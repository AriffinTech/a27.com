import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  actionText?: string;
  href: string;
  external?: boolean;
  className?: string;
}

export function InteractiveTravelCard({ title, subtitle, imageUrl, actionText, href, external = false, className }: InteractiveTravelCardProps) {
  return (
    <article className={cn("card-portrait relative h-[26rem] w-full overflow-hidden rounded-[2rem] border border-border/30 shadow-2xl", className)}>
      <Image src={imageUrl} alt={`${title}, ${subtitle}`} fill sizes="(max-width: 768px) calc(100vw - 3rem), 24rem" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold font-display">{title}</h2>
            <p className="text-sm font-light text-white/80">{subtitle}</p>
            {actionText && <a className="mt-6 inline-flex rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/20" href={href}>{actionText}</a>}
          </div>
          <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={`Learn more about ${title}`} className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/40">
            <ArrowUpRight className="h-6 w-6" />
          </a>
        </div>
      </div>
    </article>
  );
}
