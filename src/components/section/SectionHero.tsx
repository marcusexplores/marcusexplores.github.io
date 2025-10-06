import { cn } from "@/functions/cn";

type SectionHeroProps = React.ComponentProps<"section">;

export const SectionHero = ({ children, className }: SectionHeroProps) => {
  return (
    <section className={cn("py-20", className)}>
      {children}
    </section>
  );
}