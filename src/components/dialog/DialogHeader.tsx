import { cn } from "../../functions/cn";

type DialogHeaderProps = React.ComponentProps<"div">;

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
          "flex items-start justify-between gap-4",
          className
        )}
      {...props}
    />
  )
}