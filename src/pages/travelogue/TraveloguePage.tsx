import { useState, useMemo } from "react";
import type { TravelTrip } from "./data/travel-trips";
import type { TravelogueFilterState } from "./interfaces/TravelogueFilterState";
import { travelTrips } from "./data/travel-trips";
import { TravelogueFilters } from "./components/TravelogueFilters";
import { TravelTripCard } from "./components/TravelTripCard";
import { Separator } from "../../features/separator/Separator";
import { TravelogueDialog } from "./components/TravelogueDialog";

export const TraveloguePage = () => {
  const [filters, setFilters] = useState<TravelogueFilterState>({
    titleSearch: "",
    country: "",
    dayRange: ""
  });

  const [selectedEntry, setSelectedEntry] = useState<TravelTrip | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (entry: TravelTrip) => {
    setSelectedEntry(entry);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedEntry(null);
  };

  // Get unique countries for the filter dropdown
  const countries = useMemo(() => {
    const uniqueCountries = Array.from(new Set(travelTrips.map(trip => trip.country)));
    return uniqueCountries.sort();
  }, []);

  // Filter the travelogues based on current filters
  const filteredTravelogues = useMemo(() => {
    return travelTrips.filter(trip => {
      // Title search filter
      if (filters.titleSearch && !trip.title.toLowerCase().includes(filters.titleSearch.toLowerCase())) {
        return false;
      }

      // Country filter
      if (filters.country && trip.country !== filters.country) {
        return false;
      }

      // Day range filter
      if (filters.dayRange) {
        const startDate = new Date(trip.startDate);
        const endDate = new Date(trip.endDate);
        const daysDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) + 1;

        switch (filters.dayRange) {
          case "1-3":
            if (daysDifference < 1 || daysDifference > 3) return false;
            break;
          case "4-7":
            if (daysDifference < 4 || daysDifference > 7) return false;
            break;
          case "8-14":
            if (daysDifference < 8 || daysDifference > 14) return false;
            break;
          case "15+":
            if (daysDifference < 15) return false;
            break;
          default:
            break;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="mb-2">Travel Stories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover amazing travel experiences from around the world. Filter by destination, 
            duration, or search for specific adventures that inspire your next journey.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Filters */}
        <div className="mb-8">
          <TravelogueFilters
            filters={filters}
            onFiltersChange={setFilters}
            countries={countries}
            totalResults={filteredTravelogues.length}
          />
        </div>

        {/* Results */}
        {filteredTravelogues.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No travel stories match your current filters.</p>
            <p className="text-muted-foreground">Try adjusting your search criteria or clearing the filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTravelogues.map((entry) => (
              <TravelTripCard 
                key={entry.id} 
                entry={entry} 
                onClick={() => handleCardClick(entry)}
              />
            ))}
          </div>
        )}

        {/* Dialog for showing travelogue details */}
        <TravelogueDialog
          entry={selectedEntry}
          isOpen={isDialogOpen}
          onClose={handleDialogClose}
        />
      </div>
    </div>
  );
}