import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { Portfolio } from "@/components/site/portfolio";

import styles from "@/components/site/portfolio.module.css";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected websites, systems, and automation projects by A27.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="page-shell page-shell--interior">
      <section className={`interior-hero ${styles.caseStudiesHero}`}>
        <p>✦ Selected Work</p>
        <h1>Work built around real businesses.</h1>
        <div>
          <span>A selection of public websites and private systems designed around commerce, industrial services, education, and daily operations.</span>
        </div>
      </section>
      <Portfolio />
      <CtaBand
        title="Need something built around the way you work?"
        body="Tell us where the current process slows down. We’ll build the right tool around it."
      />
    </div>
  );
}
