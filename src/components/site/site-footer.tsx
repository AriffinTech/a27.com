import Link from "next/link";

import { whatsappUrl } from "@/config/contact";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "View Our Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__meta">
        <span>© {new Date().getFullYear()} A27. Kuala Lumpur, Malaysia.</span>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>
        <a className="justify-self-end text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp us
        </a>
      </div>
    </footer>
  );
}
