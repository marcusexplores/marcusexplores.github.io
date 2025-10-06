import FastMarquee from "react-fast-marquee";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";

type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) => {
  return (
    <FastMarquee
      autoFill={autoFill}
      loop={loop}
      pauseOnHover={pauseOnHover}
      {...props}
    />
  );
};
