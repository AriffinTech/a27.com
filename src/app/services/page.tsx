import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { SolutionLibrary } from "@/components/site/solution-library";
import { Button } from "@/components/ui/button";
import { solutions } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions Library",
  description: "Websites, tools, and automated ways of working from A27.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="page-shell page-shell--interior">
      <section className="interior-hero">
        <p>✦ What We Build</p>
        <h1>One business problem. The right solution.</h1>
        <div className="flex-col !items-start">
          <span>
            Websites, AI automation, and custom solutions that help your team manage customers and daily work.
          </span>
          <Button asChild className="mt-6" size="lg" variant="primary"><Link href="/start-a-project">Start a Project</Link></Button>
        </div>
      </section>

      <section className="py-12">
        <SolutionLibrary initialSolutions={solutions.filter((solution) => solution.featured)} />
      </section>

      <CtaBand title="Don’t see exactly what you need?" body="That’s normal. Most of what we build starts with a specific business problem." />
    </div>
  );
}
