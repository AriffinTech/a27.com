import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { InteractiveTravelCard } from "@/components/ui/3d-card";

export function FounderSection() {
  return (
    <CardSpotlight id="founder" className="my-12 rounded-[2.5rem] p-6 sm:p-10 md:my-20 md:p-16">
      <div className="relative z-20 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 
            className="mb-6 font-display text-[clamp(1.75rem,8vw,3rem)] font-bold leading-snug tracking-tight text-[var(--color-ink)] md:mb-10"
          >
            You work directly with the person building your system.
          </h2>
          <div className="flex flex-col gap-4 text-[color-mix(in_srgb,var(--color-ink)_72%,transparent)] text-[var(--text-md)] leading-relaxed">
            <p>
              A27 is run by Ariff, a Malaysian builder of websites, business tools, and AI-powered tasks.
            </p>
            <p>
              I handle your project from start to finish. There is no sales team in between. The person you speak to is the same person who designs, builds, and delivers the work.
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-8 min-h-[3rem] rounded-[var(--radius-pill)] border border-white/20 bg-white/10 text-[var(--text-sm)] font-semibold text-[var(--color-ink)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
              >
                Meet Ariff <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        
        <div style={{ perspective: "1000px" }} className="flex justify-center w-full">
          <InteractiveTravelCard
            title="Ariff"
            subtitle="Founder & Engineer"
            imageUrl="/ariff.jpg"
            href="/about"
            className="w-full max-w-sm border-[var(--color-rule)]"
          />
        </div>
      </div>
    </CardSpotlight>
  );
}
