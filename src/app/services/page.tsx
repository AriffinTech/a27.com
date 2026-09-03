import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { SolutionLibrary } from "@/components/site/solution-library";

export const metadata: Metadata = {
  title: "Solutions Library",
  description: "Websites, tools, and automated ways of working from A27.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="page-shell page-shell--interior">
      <section className="interior-hero">
        <p>✦ Solutions Library</p>
        <h1>Less manual work, more momentum.</h1>
        <div>
          <span>
            Find smarter ways to build your website, handle bookings, and manage customer support. We build custom systems that connect directly to your existing tools.
            <br/><br/>
            We don't do generic templates. Every solution is tailored to how your team operates and how you want to treat your customers.
          </span>
        </div>
      </section>

      <section className="py-12">
        <SolutionLibrary />
      </section>

      <CtaBand title="Start with the work that needs attention." body="Tell us about your business, what you want to improve, and the decision you need to make." />
    </div>
  );
}
