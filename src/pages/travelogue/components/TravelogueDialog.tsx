import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import type { TravelTrip } from "../interfaces/TravelTrip";
import { Button } from "../../../features/button/Button";
import { Badge } from "../../../features/badge/Badge";
import { Dialog } from "../../../features/dialog/Dialog";
import { DialogContent } from "../../../features/dialog-content/DialogContent";
import { DialogTitle } from "../../../features/dialog-title/DialogTitle";
import { DialogHeader } from "../../../features/dialog-header/DialogHeader";

interface TravelogueDialogProps {
  entry: TravelTrip | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TravelogueDialog = ({ entry, isOpen, onClose }: TravelogueDialogProps) => {
  if (!entry) return null;

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

  const handleVisitSite = () => {
    // In a real app, this would navigate to the actual travelogue page
    console.log(`Visiting site for: ${entry.title}`);
    // For demo purposes, we'll just close the dialog
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-left">{entry.title}</DialogTitle>
            <Badge variant="secondary" className="shrink-0">
              {daysDifference} {daysDifference === 1 ? 'day' : 'days'}
            </Badge>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image */}
          {entry.imageUrl && (
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <img 
                src={entry.imageUrl} 
                alt={entry.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Location and Date Info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{entry.country}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span>
                {formatDate(startDate)} - {formatDate(endDate)}
              </span>
            </div>
          </div>

          {/* Description */}
          {entry.description && (
            <div className="space-y-2">
              <h4>About this trip</h4>
              <p className="text-muted-foreground leading-relaxed">
                {entry.description}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button onClick={handleVisitSite} className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Full Story
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}