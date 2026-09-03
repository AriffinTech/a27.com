import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Velaris from "@/components/ui/velaris";

const words = ["business websites.", "AI automations.", "internal tools.", "customer portals.", "custom software.", "online shops."];
const heroColors = ["#2563eb", "#1d4ed8", "#1e40af", "#172554"];

export function HeroSection() {
  return (
    <section className="hero-section relative overflow-hidden" aria-labelledby="hero-title">
      <Velaris className="absolute inset-0 z-0" height="100%" colors={heroColors} />

      <div className="hero-section__content relative z-10">
        <Link className="hero-badge" href="/services">
          <Sparkles aria-hidden="true" size={14} />
          <span>Built around your business, not a template</span>
          <ArrowRight aria-hidden="true" size={14} />
        </Link>
        <h1 id="hero-title">
          We build your{" "}
          <span className="hero-rotator" aria-label="business operations">
            <span aria-hidden="true" className="hero-rotator__track">
              {words.map((word) => <span key={word}>{word}</span>)}
              <span aria-hidden="true">business websites.</span>
            </span>
          </span>
          <br />
          So your business keeps moving.
        </h1>
        <p>
          We build websites and tools that help you reply to customers, take payments, and keep the day-to-day work moving.
        </p>
        <div className="hero-section__actions">
          <Button asChild size="lg" variant="secondary"><Link href="/case-studies">View Work <ArrowRight aria-hidden="true" size={17} /></Link></Button>
          <Button asChild size="lg" variant="primary"><Link href="/start-a-project">Start a Project</Link></Button>
        </div>
      </div>
    </section>
  );
}
