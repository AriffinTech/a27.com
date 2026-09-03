import type { Metadata } from "next";

import { Pricing } from "@/components/site/pricing";
import { CtaBand } from "@/components/site/cta-band";
import { SectionFrame } from "@/components/site/section-frame";
import { Faq } from "@/components/site/faq";

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
        <h1>Clear, upfront pricing.</h1>
        <div><span>No hidden fees or surprise invoices. Choose the plan that fits your current business needs.</span></div>
      </section>

      <div className="mb-14 mt-10 md:mb-24 md:mt-16">
        <Pricing />
      </div>

      <SectionFrame
        title="Frequently Asked Questions"
      >
        <Faq />
      </SectionFrame>

      <CtaBand 
        title="Not sure which plan is right for you?" 
        body="Tell us what you're trying to solve and we'll point you in the right direction."
      />
    </div>
  );
}
