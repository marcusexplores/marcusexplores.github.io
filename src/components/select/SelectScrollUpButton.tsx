import { cn } from "../../functions/cn";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronUpIcon } from "lucide-react"

type SelectScrollUpButtonProps = React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>;

export const SelectScrollUpButton = ({
  className,
  ...props
}: SelectScrollUpButtonProps) => {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}