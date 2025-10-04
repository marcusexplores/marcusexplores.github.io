import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { resolveImagePath } from "@/functions/image";
import { Dialog } from "@/components/dialog/Dialog";
import { DialogTrigger } from "@/components/dialog/DialogTrigger";
import { DialogContent } from "@/components/dialog/DialogContent";
import { DialogHeader } from "@/components/dialog/DialogHeader";
import { DialogTitle } from "@/components/dialog/DialogTitle";
import { DialogFooter } from "@/components/dialog/DialogFooter";
import { DialogClose } from "@/components/dialog/DialogClose";
import { Button } from "@/components/button/Button";
import { Badge } from "@/components/badge/Badge";

interface TravelogueDialogProps {
  children: React.ReactNode
  title: string;
  region: string;
  dates: string;
  days: number;
  description: string;
  image?: string;
  website?: string;
}

export const TravelogueDialog = ({
  children,
  title,
  region,
  dates,
  days,
  description,
  image,
  website
}: TravelogueDialogProps) => {
  const handleVisitSite = () => {
    // In a real app, this would navigate to the actual travelogue page
    console.log(`Visiting site for: ${title} and the site is: ${website}`);
    window.open(website, '_blank')
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <Badge variant="secondary" className="items-end shrink-0">
            {days} {days === 1 ? "day" : "days"}
          </Badge>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          {image && (
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <img
                src={resolveImagePath(image)}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Location and Date Info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{region}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span>{dates}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4>About this trip</h4>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <DialogFooter>
          <Button onClick={handleVisitSite} className="flex-1">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Full Story
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
