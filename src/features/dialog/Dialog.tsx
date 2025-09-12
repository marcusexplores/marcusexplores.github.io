import { Root } from "@radix-ui/react-dialog";

export const Dialog = ({
  ...props
}: React.ComponentProps<typeof Root>) => {
  return (
    <Root data-slot="dialog" {...props} />
  );
}