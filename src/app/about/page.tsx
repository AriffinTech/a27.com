import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { FounderSection } from "@/components/site/founder-section";
import { ProcessSteps } from "@/components/site/process-steps";
import { SectionFrame } from "@/components/site/section-frame";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About A27",
  description: "Founder-led engineering for websites, business systems, and automation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="page-shell page-shell--interior">
      <section className="interior-hero">
        <p>About A27</p>
        <h1>You work directly with the person building it.</h1>
        <div className="flex-col !items-start">
            <span>A27 is an independent studio. You work directly with the person planning, designing, and building your website or system.</span>
          <Button asChild className="mt-6" size="lg" variant="primary"><Link href="/start-a-project">Start a Project</Link></Button>
        </div>
      </section>

      <FounderSection />

      <SectionFrame
        title="Our Principles"
        intro="How we approach every build."
      >
        <div className="about-principles mt-12">
          <article>
            <span>01</span>
            <h2>Direct Access</h2>
            <p>
              No account managers or sales teams. You speak directly with the engineer designing and building your system.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Built for Your Reality</h2>
            <p>
              We don’t force your business into a rigid template. We build tools around the way your team actually works.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Clear Engineering</h2>
            <p>
              We value simple, maintainable solutions over complex buzzwords. If a simple automation fixes the problem, that’s what we build.
            </p>
          </article>
        </div>
      </SectionFrame>

      <SectionFrame
        title="From first details to final handover"
        intro="A focused process that makes the next decision clear and keeps the work moving."
      >
        <div className="mt-8 md:mt-12">
          <ProcessSteps />
        </div>
      </SectionFrame>

      <CtaBand title="Got something worth building?" body="Let’s talk through the problem and see what makes sense." />
    </div>
  );
}
