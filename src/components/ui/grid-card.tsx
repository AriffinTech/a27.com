import type React from "react";

import { cn } from "@/lib/utils";

export function GridCard({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "card-surface group relative isolate z-0 flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-5 py-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
