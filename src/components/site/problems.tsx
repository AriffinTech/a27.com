"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Problems() {
  const problems = [
    {
      id: "01",
      title: "Enquiries everywhere",
      explanation: "Customer enquiries are scattered across WhatsApp, social media and different staff members. Leads get forgotten and follow-ups become inconsistent.",
      transformation: "Enquiry → Captured → Organised → Followed up"
    },
    {
      id: "02",
      title: "Too much manual admin",
      explanation: "Staff repeatedly calculate orders, copy customer information, prepare invoices, confirm payments or enter the same information into multiple systems.",
      transformation: "Order → Payment → Invoice → Fulfilment → Notification"
    },
    {
      id: "03",
      title: "No proper digital system",
      explanation: "The business relies heavily on WhatsApp, spreadsheets or manual processes and doesn't have one clear system supporting operations.",
      transformation: "WhatsApp + spreadsheets + manual work → One structured system"
    },
    {
      id: "04",
      title: "Website doesn't help the business",
      explanation: "The business either has no strong online presence or has a website that acts like a brochure without helping generate enquiries, collect payments or automate work.",
      transformation: "Lead capture → WhatsApp → Payments → Orders → Automation"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-8">
      {/* Left: Tab List */}
      <div className="md:col-span-5 flex flex-col gap-2">
        {problems.map((prob, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={prob.id}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "group flex items-center justify-between w-full text-left p-4 rounded-[var(--radius-md)] border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]",
                isActive 
                  ? "border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] shadow-[0_0_16px_-2px_color-mix(in_srgb,var(--color-accent)_20%,transparent)]"
                  : "border-transparent hover:border-[var(--color-rule)] hover:bg-[var(--color-paper-2)]"
              )}
            >
              <div className="flex items-center gap-4">
                <span className={cn(
                  "font-mono text-sm transition-colors duration-300",
                  isActive ? "text-[var(--color-accent)]" : "text-[var(--color-muted)] group-hover:text-[var(--color-ink-2)]"
                )}>
                  {prob.id}
                </span>
                <span className={cn(
                  "font-display text-lg font-bold tracking-tight transition-colors duration-300",
                  isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]"
                )}>
                  {prob.title}
                </span>
              </div>
              <ArrowRight 
                size={16} 
                className={cn(
                  "transition-all duration-300",
                  isActive ? "text-[var(--color-accent)] translate-x-1" : "text-transparent -translate-x-2 group-hover:text-[var(--color-muted)] group-hover:translate-x-0"
                )}
              />
            </button>
          )
        })}
      </div>

      {/* Right: Content Pane */}
      <div className="md:col-span-7 flex flex-col justify-center">
        <div 
          key={activeIndex} 
          className="rounded-[var(--radius-lg)] border border-[var(--color-rule)] bg-[var(--color-paper)] p-8 md:p-12 shadow-sm animate-in fade-in slide-in-from-right-4 duration-500"
          style={{ animation: "hero-enter var(--dur-long) var(--ease-out)" }}
        >
          <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--color-ink)]">
            The Problem
          </h3>
          <p className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
            {problems[activeIndex].explanation}
          </p>

          <div className="mt-8 pt-8 border-t border-[var(--color-rule)]">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[var(--color-muted)]">
              The Transformation
            </h4>
            <div className="mt-4 flex items-start sm:items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] mt-0.5 sm:mt-0">
                <ArrowRight size={12} className="text-[var(--color-accent)]" />
              </span>
              <p className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--color-accent)]">
                {problems[activeIndex].transformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
