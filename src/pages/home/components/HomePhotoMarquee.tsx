import { Marquee } from "@/components/marquee/Marquee";
import { MarqueeContent } from "@/components/marquee/MarqueeContent";
import { MarqueeItem } from "@/components/marquee/MarqueeItem";
import { Polaroid } from "@/components/polaroid/Polaroid";
import { polaroids } from "../data/polaroids";

export const HomePhotoMarquee = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mb-12 text-foreground">
        Featured Photos
      </h2>

      <Marquee>
        <MarqueeContent speed={50} direction="left" className="py-12">
          {polaroids.map((item, index) => (
            <MarqueeItem key={index} className="px-6">
              <Polaroid
                imageSrc={item.src}
                caption={item.caption}
                initialRotate={item.rotate}
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </>
  );
};
