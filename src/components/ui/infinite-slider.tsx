import type React from "react";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({ children, gap = 40, duration = 28, durationOnHover = 70, reverse = false, className }: InfiniteSliderProps) {
  return (
    <div
      className={cn("infinite-slider", className)}
      style={{ "--slider-gap": `${gap}px`, "--slider-duration": `${duration}s`, "--slider-direction": reverse ? "reverse" : "normal" } as React.CSSProperties}
      data-hover-duration={durationOnHover}
    >
      <div className="infinite-slider__track">
        {children}
        <span aria-hidden="true" className="contents">{children}</span>
      </div>
    </div>
  );
}
