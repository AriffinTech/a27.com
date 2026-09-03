import Link from "next/link";
import { ArrowRight, LayoutTemplate, Workflow, Code2, Check } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export function ServiceGrid() {
  const groups = [
    {
      id: "01 — WEBSITES",
      title: "Websites",
      description: "A clear, professional website that helps customers understand, enquire, and buy.",
      icon: LayoutTemplate,
      capabilities: [
        "Business websites",
        "Landing pages",
        "Online shops and product websites",
        "Customer login areas",
        "Web tools"
      ],
      linkText: "Explore Services",
      href: "/services"
    },
    {
      id: "02 — AI AUTOMATION",
      title: "AI Automation",
      description: "Automate replies, follow-ups, and repeated tasks so your team spends less time on admin.",
      icon: Workflow,
      capabilities: [
        "WhatsApp replies",
        "Customer follow-ups",
        "Order and payment updates",
        "Lead handling",
        "Connect the tools you already use",
        "AI help for repeated tasks"
      ],
      linkText: "Explore Services",
      href: "/services"
    },
    {
      id: "03 — CUSTOM SOLUTIONS",
      title: "Custom Solutions",
      description: "Custom tools and systems built around your business when standard software does not fit.",
      icon: Code2,
      capabilities: [
        "Software made for your business",
        "Team dashboards",
        "Order and stock management",
        "Payment tracking",
        "AI help for your team",
        "Tools to manage customer leads"
      ],
      linkText: "Explore Services",
      href: "/services"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      {groups.map((group, index) => {
        const Icon = group.icon;
        return (
          <Reveal delay={index * 100} key={group.id} className="flex flex-col border border-[var(--color-rule)] rounded-[var(--radius-lg)] bg-[var(--color-paper)] p-8 transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-paper-2)] hover:shadow-[0_8px_24px_-4px_color-mix(in_srgb,var(--color-accent)_10%,transparent)] group">
            
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)]">
                <Icon size={20} className="text-[var(--color-accent)]" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">{group.id}</span>
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--color-ink)] mb-3">
              {group.title}
            </h3>
            
            <p className="text-[var(--text-md)] text-[var(--color-muted)] leading-relaxed mb-8 border-b border-[var(--color-rule)] pb-8">
              {group.description}
            </p>

            <ul className="space-y-3 mb-10 flex-grow">
              {group.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-[var(--text-sm)] text-[var(--color-ink-2)]">
                  <Check size={16} className="mt-0.5 text-[var(--color-accent)] shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            <Link href={group.href} className="inline-flex items-center justify-center gap-2 w-full min-h-[2.75rem] rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--text-sm)] font-semibold text-[var(--color-ink)] transition-colors duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-ink)]">
              {group.linkText}
              <ArrowRight size={16} />
            </Link>

          </Reveal>
        );
      })}
    </div>
  );
}
