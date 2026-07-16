"use client";

import { useEffect, useState } from "react";
import type { Company } from "@/lib/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useCompanies } from "@/hooks/useCompanies";
import { useToast } from "@/components/ui/Toast";
import { normalizeUrl } from "@/lib/format";

interface EditCompanyModalProps {
  company: Company | null;
  onClose: () => void;
}

export function EditCompanyModal({ company, onClose }: EditCompanyModalProps) {
  const { updateCompany } = useCompanies();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (company) {
      setName(company.name);
      setIndustry(company.industry ?? "");
      setContact(company.contact ?? "");
      setWebsite(company.website ?? "");
    }
  }, [company]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !name.trim()) return;
    await updateCompany(company.id, {
      name: name.trim(),
      industry: industry.trim() || null,
      contact: contact.trim() || null,
      website: website.trim() ? normalizeUrl(website) : null,
    });
    toast("Company details saved", "success");
    onClose();
  };

  return (
    <Modal open={company !== null} onClose={onClose} title="Edit company">
      <form onSubmit={submit} className="flex flex-col gap-4">
        <Input label="Company name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        <Input
          label="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Name, phone, or email"
        />
        <Input label="Existing website" value={website} onChange={(e) => setWebsite(e.target.value)} />
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
