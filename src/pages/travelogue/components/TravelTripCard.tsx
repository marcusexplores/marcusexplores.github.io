import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "../../../features/badge/Badge";
import { badgeVariant } from "../../../features/badge/constants";
import { Card } from "../../../features/card/Card";
import type { TravelTrip } from "../interfaces/TravelTrip";

interface TravelTripCardProps {
  entry: TravelTrip;
  onClick: () => void;
}

export const TravelTripCard = ({ entry, onClick }: TravelTripCardProps) => {
  const startDate = new Date(entry.startDate);
  const endDate = new Date(entry.endDate);
  const daysDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card 
      className="h-64 relative overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
      onClick={onClick}
    >
      {/* Background Image */}
      {entry.imageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${entry.imageUrl})` }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        {/* Top Section - Duration Badge */}
        <div className="flex justify-end">
          <Badge variant={badgeVariant.Secondary} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {daysDifference} {daysDifference === 1 ? 'day' : 'days'}
          </Badge>
        </div>
        
        {/* Bottom Section - Title, Location, Date */}
        <div className="space-y-3">
          <h3 className="group-hover:text-white/90 transition-colors">{entry.title}</h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" />
              <span>{entry.country}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CalendarDays className="h-4 w-4" />
              <span>
                {formatDate(startDate)} - {formatDate(endDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}