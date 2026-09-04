import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { Portfolio } from "@/components/site/portfolio";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <h1>Built for real businesses. Used in the real world.</h1>
        <div className="flex-col !items-start">
          <span>A look at websites, business systems, dashboards and automation we’ve built to solve actual operational problems.</span>
        </div>
        <Button asChild className="mt-6" size="lg" variant="primary"><Link href="/start-a-project">Start a Project</Link></Button>
      </section>
      <Portfolio />
      <CtaBand
        title="See something your business could use?"
        body="We can build around how your team works and what you need to improve."
      />
    </div>
  );
}
