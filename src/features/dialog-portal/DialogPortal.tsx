import { Portal } from "@radix-ui/react-dialog";

export const DialogPortal = ({
  ...props
}: React.ComponentProps<typeof Portal>) => {
  return (
    <Portal data-slot="dialog-portal" {...props} />
  );
}