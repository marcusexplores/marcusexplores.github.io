import { Value } from "@radix-ui/react-select";

export const SelectValue = ({
  ...props
}: React.ComponentProps<typeof Value>) => {
  return (
    <Value data-slot="select-value" {...props} />
  );
}