import { cn } from "@/functions/classname";

type SectionContentProps = React.ComponentProps<"section">;

export const SectionContent = ({ children, className }: SectionContentProps) => {
  return (
    <section className={cn("py-20 bg-background text-foreground", className)}>
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}