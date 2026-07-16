"use client";

import { useEffect, useState } from "react";
import type { Company } from "@/lib/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { useCompanies } from "@/hooks/useCompanies";
import { normalizeUrl } from "@/lib/format";

interface TodoEditModalProps {
  company: Company | null;
  onClose: () => void;
}

export function TodoEditModal({ company, onClose }: TodoEditModalProps) {
  const { updateCompany } = useCompanies();
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (company) {
      setName(company.name);
      setWebsite(company.website ?? "");
      setNotes(company.notes);
    }
  }, [company]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !name.trim()) return;
    void updateCompany(company.id, {
      name: name.trim(),
      website: website.trim() ? normalizeUrl(website) : null,
      notes,
    });
    onClose();
  };

  return (
    <Modal open={company !== null} onClose={onClose} title="Edit idea">
      <form onSubmit={submit} className="flex flex-col gap-4">
        <Input label="Company name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input
          label="Existing website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="company.ky"
        />
        <Textarea label="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
        <div className="mt-1 flex justify-end gap-3">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={!name.trim()}>
            Save changes
          </Button>
        </div>
      </form>
    </Modal>
  );
}
