import { cn } from "../../../functions/cn";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "../../../features/badge/Badge";
import { badgeVariant } from "../../../features/badge/constants";

interface TravelTripCardProps {
  title: string;
  region: string;
  dates: string;
  days: number;
  background?: string;
  onClick: () => void;
}

export const TravelTripCard = ({ title, region, dates, days, background, onClick }: TravelTripCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl border",
        "h-64 relative overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
      )}
      onClick={onClick}
    >
      {/* Background Image */}
      {background && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${background})` }}
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
              <span>
                {dates}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
