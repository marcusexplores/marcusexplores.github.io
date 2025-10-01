import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;

export const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};
