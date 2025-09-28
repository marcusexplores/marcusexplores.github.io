import { cn } from "../../../functions/cn";
import { Root, Portal, Content, Overlay, Title } from "@radix-ui/react-dialog";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { Button } from "../../../features/button/Button";
import { Badge } from "../../../features/badge/Badge";

interface TravelogueDialogProps {
  title: string;
  region: string;
  dates: string; 
  days: number;
  description: string;
  image?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const TravelogueDialog = ({ title, region, dates, days, description, image, isOpen, onClose }: TravelogueDialogProps) => {
  const handleVisitSite = () => {
    // In a real app, this would navigate to the actual travelogue page
    console.log(`Visiting site for: ${title}`);
    // For demo purposes, we'll just close the dialog
    onClose();
  };

  return (
    <Root open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
        <Content className="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg max-w-2xl">
          <div className={cn("flex items-start justify-between gap-4")}>
            <Title className="text-lg leading-none font-semibold">{title}</Title>
            <Badge variant="secondary" className="shrink-0">
              {days} {days === 1 ? 'day' : 'days'}
            </Badge>
          </div>
          
          <div className="space-y-6">
            {/* Image */}
            {image && (
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <img 
                  src={image} 
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
                <span>
                  {dates}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4>About this trip</h4>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

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
        </Content>
      </Portal>
    </Root>
  );
}