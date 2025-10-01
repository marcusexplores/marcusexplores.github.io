import { cn } from "../../functions/cn";

type SectionContentProps = React.ComponentProps<"section">;

export const SectionContent = ({ children, className }: SectionContentProps) => {
  return (
    <section className={cn("py-20", className)}>
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}