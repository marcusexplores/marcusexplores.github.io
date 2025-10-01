import { cn } from "../../functions/cn";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
};
