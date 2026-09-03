import Link from "next/link";
import { ArrowRight, ToyBrick, Workflow, CheckCircle2, SquareActivity } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { GridCard } from "@/components/ui/grid-card";

export function WhatWeDo() {
  const pillars = [
    {
      label: "01 — WEBSITES",
      title: "Websites",
      pain: "A clear, professional website that helps customers understand, enquire, and buy.",
      capabilities: ["Business websites", "Landing pages", "Online shops", "Customer portals"],
      icon: ToyBrick,
      href: "/services#websites"
    },
    {
      label: "02 — AI AUTOMATION",
      title: "AI Automation",
      pain: "Automate replies, follow-ups, and repeated tasks so your team spends less time on admin.",
      capabilities: ["WhatsApp replies", "Customer follow-ups", "Order and payment updates", "Lead handling"],
      icon: Workflow,
      href: "/services#whatsapp-automation"
    },
    {
      label: "03 — CUSTOM SOLUTIONS",
      title: "Custom Solutions",
      pain: "Custom tools and systems built around your business when standard software does not fit.",
      capabilities: ["Team dashboards", "Order and stock tools", "Customer management", "Software made for your business"],
      icon: SquareActivity,
      href: "/services#internal-systems"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <Reveal delay={index * 100} key={pillar.label} className="h-full">
            <GridCard className="p-8 group h-full">
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                    <Icon size={20} className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-ink)] transition-colors duration-300" />
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">{pillar.label}</span>
                </div>

                <h3 className="font-display text-[1.35rem] leading-tight font-bold tracking-tight text-[var(--color-ink)] mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-[var(--color-muted)] text-[var(--text-sm)] mb-8 min-h-[3rem]">
                  {pillar.pain}
                </p>

                <ul className="flex flex-col gap-3 mb-10 flex-grow">
                  {pillar.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[var(--color-accent)] opacity-70 mt-0.5 shrink-0" />
                      <span className="text-[var(--text-sm)] font-medium text-[var(--color-ink-2)]">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={pillar.href} className="inline-flex items-center justify-center gap-2 w-full min-h-[3rem] rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--text-sm)] font-semibold text-[var(--color-ink)] transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-ink)] mt-auto relative z-20">
                See how we can help
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

            </GridCard>
          </Reveal>
        );
      })}
    </div>
  );
}
