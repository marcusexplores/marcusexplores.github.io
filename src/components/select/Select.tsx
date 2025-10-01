import * as SelectPrimitive from "@radix-ui/react-select";

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>;

export const Select = ({ ...props }: SelectProps) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};
