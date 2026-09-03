import { CtaBand } from "@/components/site/cta-band";
import { CapabilityMarquee } from "@/components/site/capability-marquee";
import { HeroSection } from "@/components/site/hero-1";
import { SectionFrame } from "@/components/site/section-frame";
import { WhatWeDo } from "@/components/site/what-we-do";
import { FounderSection } from "@/components/site/founder-section";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilityMarquee />
      <div className="page-shell page-shell--home">
        
        <SectionFrame
          title="How We Can Help"
          intro="A27 builds websites, AI automation, and custom solutions for businesses."
        >
          <WhatWeDo />
        </SectionFrame>

        <SectionFrame
          title="Founder-Led Engineering"
        >
          <FounderSection />
        </SectionFrame>

        <SectionFrame
          title="Pricing"
          intro="Clear, upfront pricing."
        >
          <Pricing />
        </SectionFrame>

        <SectionFrame
          title="Frequently Asked Questions"
        >
          <Faq />
        </SectionFrame>

        <CtaBand />
      </div>
    </>
  );
}
