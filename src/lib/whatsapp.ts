import { siteConfig } from "@/config/site";

export type WhatsAppLead = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
};

export function buildWhatsAppUrl(lead: WhatsAppLead): string {
  const number = siteConfig.whatsAppNumber.replace(/\D/g, "");

  if (!number) {
    throw new Error("WhatsApp has not been configured yet. Add the business number in src/config/site.ts.");
  }

  const lines = [
    siteConfig.defaultWhatsAppMessage,
    "",
    `Name: ${lead.name}`,
    `Work email: ${lead.email}`,
    lead.company ? `Company: ${lead.company}` : "",
    `Project type: ${lead.projectType}`,
    "",
    "Project details:",
    lead.message,
  ].filter(Boolean);

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
