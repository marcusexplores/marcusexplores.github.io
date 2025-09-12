import { Root } from "@radix-ui/react-select";

export const Select = ({
  ...props
}: React.ComponentProps<typeof Root>) => {
  return (
    <Root data-slot="select" {...props} />
  );
}