import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getWhatsAppUrl } from "@/config/contact";

type PricingProps = { compact?: boolean };

const packages = [
  {
    title: "Website Starter", price: "From RM399", interest: "website-starter",
    description: "A clean, professional website that makes it easy for customers to understand and contact you.",
    items: ["Landing page or simple business website", "Mobile-ready design", "WhatsApp and contact actions", "Basic SEO setup", "Clear plan and revision rounds", "Ready for your own domain"],
    whatsapp: "Hello A27, I’m interested in the Website Starter package.", variant: "secondary" as const, action: "Start with Website Starter",
  },
  {
    title: "Website + Connected Tools", price: "From RM699", interest: "connected-website",
    description: "A website connected to the tools you already use, so enquiries and bookings are easier to manage.",
    items: ["Everything in Website Starter", "Lead capture forms", "WhatsApp enquiry flow", "Connect your customer list or spreadsheet", "Send work to the right place", "Basic team setup and walkthrough"],
    whatsapp: "Hello A27, I’m interested in the Website + Connected Tools package.", variant: "primary" as const, action: "Plan connected tools",
  },
  {
    title: "Custom Tools & Automation", price: "Custom Quotation", interest: "custom-tools",
    description: "A system, dashboard, or automation made around how your team handles daily work.",
    items: ["WhatsApp replies and follow-ups", "Order and payment tracking", "Automatic invoices and receipts", "Team dashboards and admin tools", "Connect third-party services", "Custom AI help or software"],
    whatsapp: "Hello A27, I’d like to discuss a custom system or automation need.", variant: "secondary" as const, action: "Discuss custom tools",
  },
] as const;

export function Pricing({ compact = false }: PricingProps) {
  return (
    <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
      {packages.map((item) => (
        <Card className="flex flex-col" key={item.title}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <span className="my-3 block font-mono text-xl font-bold tracking-tight text-[var(--color-ink)]">{item.price}</span>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <hr className="border-t border-[var(--color-rule)]" />
            <ul className="list-outside space-y-3 text-[var(--text-sm)] text-[var(--color-ink-2)]">
              {(compact ? item.items.slice(0, 4) : item.items).map((feature) => (
                <li key={feature} className="flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 size-4 flex-shrink-0 text-[var(--color-muted)]" /><span>{feature}</span></li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="mt-auto flex-col gap-3">
            <Button asChild variant={item.variant} className="w-full"><Link href={`/start-a-project?interest=${item.interest}`}>{item.action}</Link></Button>
            <a className="text-link min-h-11" href={getWhatsAppUrl(item.whatsapp)} target="_blank" rel="noopener noreferrer">Prefer WhatsApp?</a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
