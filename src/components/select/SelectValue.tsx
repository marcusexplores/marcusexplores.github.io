import * as SelectPrimitive from "@radix-ui/react-select";

type SelectValueProps = React.ComponentProps<typeof SelectPrimitive.Value>;

export const SelectValue = ({ ...props }: SelectValueProps) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};
