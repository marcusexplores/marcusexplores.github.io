import { cn } from "@/functions/classname";

type SectionHeroProps = React.ComponentProps<"section">;

export const SectionHero = ({ children, className }: SectionHeroProps) => {
  return (
    <section className={cn("py-20", className)}>
      {children}
    </section>
  );
}