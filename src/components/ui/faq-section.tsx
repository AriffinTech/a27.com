"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  description = "Everything you need to know about our packages, timelines, and process.",
  buttonLabel = "Browse All FAQs",
  buttonHref,
  faqsLeft,
  faqsRight,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("w-full py-8 md:py-16", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
        {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
          <Accordion
            key={columnIndex}
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqColumn.map((faq, i) => (
              <AccordionItem key={i} value={`item-${columnIndex}-${i}`}>
                <AccordionTrigger className="text-base md:text-lg font-medium text-[var(--color-ink)] hover:text-[var(--color-ink)] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--text-sm)] text-[var(--color-ink-2)] leading-relaxed">
                  <div className="min-h-[40px] transition-all duration-200 ease-in-out">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>

      {buttonHref && (
        <div className="mt-12 text-center">
          <Button variant="secondary" asChild className="rounded-full">
            <Link href={buttonHref}>
              {buttonLabel} <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}
