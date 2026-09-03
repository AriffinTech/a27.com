import { cn } from "@/lib/utils";

type SectionFrameProps = React.ComponentPropsWithoutRef<"section"> & {
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionFrame({ title, intro, align = "left", children, className, ...props }: SectionFrameProps) {
  return (
    <section className={cn("section-frame", `section-frame--${align}`, className)} {...props}>
      <div className="section-frame__head">
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
