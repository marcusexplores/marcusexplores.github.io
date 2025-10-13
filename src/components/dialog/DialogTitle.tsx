import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/functions/classname";

type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg text-foreground leading-none font-semibold", className)}
      {...props}
    />
  );
};
