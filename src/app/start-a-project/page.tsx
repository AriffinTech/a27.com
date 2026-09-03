import type { Metadata } from "next";

import { ProjectBriefForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Share the business problem you need A27 to help solve.",
  alternates: { canonical: "/start-a-project" },
};

export default function StartAProjectPage() {
  return (
    <div className="page-shell page-shell--interior">
      <section className="interior-hero">
        <p>Start a Project</p>
        <h1>Let's build something that works.</h1>
        <div>
          <span>
            Tell us what you're trying to achieve or what's currently slowing your business down. We'll review your needs and get back to you with a clear path forward.
          </span>
        </div>
      </section>
      <ProjectBriefForm />
    </div>
  );
}
