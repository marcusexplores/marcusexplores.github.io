import { Title } from "@radix-ui/react-dialog";
import { cn } from "../../functions/cn";

export const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>) => {
  return (
    <Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}