import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;

export const DialogClose = ({ ...props }: DialogCloseProps) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
};
