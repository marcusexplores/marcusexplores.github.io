import { ScrollDownButton } from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../functions/cn";

export const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof ScrollDownButton>) => {
  return (
    <ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </ScrollDownButton>
  );
}