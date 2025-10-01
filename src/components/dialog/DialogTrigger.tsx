import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;

export const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};
