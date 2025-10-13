import { cn } from "@/functions/classname";

type DialogFooterProps = React.ComponentProps<"div">;

export const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex gap-3 pt-4", className)}
      {...props}
    />
  );
}