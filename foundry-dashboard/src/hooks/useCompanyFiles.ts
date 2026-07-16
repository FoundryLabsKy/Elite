"use client";

import { useCallback, useEffect, useState } from "react";
import type { CompanyFile } from "@/lib/types";
import { useCompanies } from "./useCompanies";
import { useToast } from "@/components/ui/Toast";

export function useCompanyFiles(companyId: string) {
  const { repo } = useCompanies();
  const { toast } = useToast();
  const [files, setFiles] = useState<CompanyFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    repo
      .listFiles(companyId)
      .then((data) => {
        if (!cancelled) setFiles(data);
      })
      .catch(() => {
        if (!cancelled) toast("Could not load files.", "error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [repo, companyId, toast]);

  const upload = useCallback(
    async (fileList: FileList | File[]) => {
      const items = Array.from(fileList);
      if (!items.length) return [] as CompanyFile[];
      setUploading(true);
      const uploaded: CompanyFile[] = [];
      try {
        for (const file of items) {
          const record = await repo.uploadFile(companyId, file);
          uploaded.push(record);
        }
        setFiles((prev) => [...uploaded, ...prev]);
        toast(
          items.length === 1 ? `Uploaded ${items[0].name}` : `Uploaded ${items.length} files`,
          "success"
        );
      } catch {
        toast("Upload failed. Try again.", "error");
      } finally {
        setUploading(false);
      }
      return uploaded;
    },
    [repo, companyId, toast]
  );

  const remove = useCallback(
    async (file: CompanyFile) => {
      setFiles((prev) => prev.filter((f) => f.id !== file.id));
      try {
        await repo.deleteFile(file);
      } catch {
        setFiles((prev) => [file, ...prev]);
        toast("Could not delete the file.", "error");
      }
    },
    [repo, toast]
  );

  const getUrl = useCallback((file: CompanyFile) => repo.getFileUrl(file), [repo]);

  return { files, loading, uploading, upload, remove, getUrl };
}
