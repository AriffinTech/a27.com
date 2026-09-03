import type React from "react";

import { cn } from "@/lib/utils";

export function CardSpotlight({
  children,
  radius = 350,
  color = "rgba(255, 255, 255, 0.1)",
  className,
  style,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("card-spotlight relative overflow-hidden bg-[var(--color-paper-2)] border border-[var(--color-rule)]", className)}
      style={{ "--spotlight-color": color, "--spotlight-radius": `${radius}px`, ...style } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
