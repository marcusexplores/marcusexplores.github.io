import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/functions/classname";

type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;

export const DialogDescription = ({
  className,
  ...props
}: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};
