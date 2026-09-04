import type { Metadata } from "next";

import { Pricing } from "@/components/site/pricing";
import { CtaBand } from "@/components/site/cta-band";
import { SectionFrame } from "@/components/site/section-frame";
import { Faq } from "@/components/site/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Clear, upfront prices for websites, business tools, and automated tasks.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="page-shell page-shell--interior">
      <section className="interior-hero">
        <p>Pricing</p>
        <h1>Clear pricing before we start.</h1>
        <div className="flex-col !items-start"><span>Straightforward starting prices for common builds, with a custom quote when your needs are more specific.</span><Button asChild className="mt-6" size="lg" variant="primary"><Link href="/start-a-project">Start a Project</Link></Button></div>
      </section>

      <div className="mb-10 mt-8 md:mb-24 md:mt-16">
        <Pricing />
      </div>

      <SectionFrame
        title="Frequently Asked Questions"
      >
        <Faq />
      </SectionFrame>

      <CtaBand 
        title="Not sure what your project would cost?"
        body="Send us what you have in mind and we’ll recommend the most sensible option."
      />
    </div>
  );
}
