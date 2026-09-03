import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { FounderSection } from "@/components/site/founder-section";
import { ProcessSteps } from "@/components/site/process-steps";
import { SectionFrame } from "@/components/site/section-frame";

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
        <h1>Built close to the work.</h1>
        <div>
          <span>Founder-led work for businesses that need their website, tools, and automated tasks to work together.</span>
        </div>
      </section>

      <FounderSection />

      <SectionFrame
        title="Our Principles"
        intro="The core philosophy behind A27. Why founder-led engineering works better than traditional agencies for modern business tooling."
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
              We don't force your business into a rigid template. We build tools around the way your team actually works.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Clear Engineering</h2>
            <p>
              We value simple, maintainable solutions over complex buzzwords. If a simple automation fixes the problem, that's what we build.
            </p>
          </article>
        </div>
      </SectionFrame>

      <SectionFrame
        title="How we work together"
        intro="A clear, predictable process from the first conversation to launch."
      >
        <div className="mt-8 md:mt-12">
          <ProcessSteps />
        </div>
      </SectionFrame>

      <CtaBand title="Start with the work that needs attention." body="Tell us about your business, what you want to improve, and the decision you need to make." />
    </div>
  );
}
