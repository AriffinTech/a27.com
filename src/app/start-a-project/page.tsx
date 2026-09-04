import type { Metadata } from "next";

import { ProjectBriefForm } from "@/components/site/contact-form";
import { isPricingInterest, type PricingInterest } from "@/config/project-enquiries";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell A27 what your business needs help with.",
  alternates: { canonical: "/start-a-project" },
};

export default async function StartAProjectPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const params = await searchParams;
  const initialInterest: PricingInterest | undefined = isPricingInterest(params.interest) ? params.interest : undefined;

  return (
    <div className="page-shell page-shell--interior">
      <section className="interior-hero">
        <p>Start a Project</p>
        <h1>Tell us what you want to build.</h1>
        <div>
          <span>Tell us what your business needs, what is getting in the way, or even just the rough idea. We’ll help turn it into a clear plan.</span>
          <p className="mt-4 text-sm text-muted-foreground">You do not need technical knowledge to get started.</p>
        </div>
      </section>
      <ProjectBriefForm initialInterest={initialInterest} />
    </div>
  );
}
