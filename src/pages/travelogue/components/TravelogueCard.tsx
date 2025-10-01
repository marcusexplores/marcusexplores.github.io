import { cn } from "../../../functions/cn";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "../../../components/badge/Badge";
import { badgeVariant } from "../../../components/badge/constants";
import { TravelogueDialog } from "./TravelogueDialog";

interface TravelogueCardProps {
  title: string;
  region: string;
  dates: string;
  days: number;
  description: string;
  image?: string;
  website?: string;
}

const imageModules = import.meta.glob('../../../assets/travelogue/**/*.jpg', {
  eager: true,
  import: 'default',
});

const getLocalImagePath = (path: string) => {
  const INPUT_PATH_PREFIX_TO_REMOVE = 'src/';
  const NESTING_PREFIX = '../../../';
  const pathWithoutSrc = path.substring(INPUT_PATH_PREFIX_TO_REMOVE.length);
  const key = `${NESTING_PREFIX}${pathWithoutSrc}`;
  return imageModules[key] as string | undefined;
};

export const TravelogueCard = ({
  title,
  region,
  dates,
  days,
  description,
  image,
  website
}: TravelogueCardProps) => {
  const isExternalUrl = image?.startsWith('https://');
  const finalImageSrc = isExternalUrl ? image : getLocalImagePath(image ?? "");
  return (
    <TravelogueDialog title={title} region={region} dates={dates} days={days} description={description} image={image} website={website}>
      <div
        data-slot="card"
        className={cn(
          "flex flex-col gap-6 rounded-xl border-border",
          "h-64 relative overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
        )}
      >
        {/* Background Image */}
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${finalImageSrc})` }}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          {/* Top Section - Duration Badge */}
          <div className="flex justify-end">
            <Badge
              variant={badgeVariant.Secondary}
              className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              {days} {days === 1 ? "day" : "days"}
            </Badge>
          </div>

          {/* Bottom Section - Title, Location, Date */}
          <div className="space-y-3">
            <h3 className="group-hover:text-white/90 transition-colors">
              {title}
            </h3>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>{region}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CalendarDays className="h-4 w-4" />
                <span>{dates}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TravelogueDialog>
  );
};
