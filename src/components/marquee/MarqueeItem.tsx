import type { HTMLAttributes } from "react";
import { cn } from "@/functions/classname";

type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn("mx-2 flex-shrink-0 object-contain", className)}
    {...props}
  />
);
