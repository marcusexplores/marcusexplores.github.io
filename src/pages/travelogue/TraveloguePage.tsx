import { useState, useMemo } from "react";
import type { TravelogueFilterState } from "./types";
import { travelTrips } from "./data/travel-trips";
import { TravelogueFilters } from "./components/TravelogueFilters";
import { TravelogueCard } from "./components/TravelogueCard";
import { Separator } from "../../components/separator/Separator";
import { formatDate, getDaysBetween } from "./helpers/datetime";
import { TRAVELOGUE_FILTER_DURATION_OPTION } from "./constants";

export const TraveloguePage = () => {
  const [filterState, setFilterState] = useState<TravelogueFilterState>({
    keyword: "",
    region: "",
    duration: ""
  });

  // Get unique regions for the filter dropdown
  const regions = useMemo(() => {
    const uniqueregions = Array.from(new Set(travelTrips.map(trip => trip.region)));
    return uniqueregions.sort();
  }, []);

  // Filter the travelogues based on current filters
  const filteredTravelogues = useMemo(() => {
    return travelTrips.filter(trip => {
      // Keyword search filter
      if (filterState.keyword && !trip.title.toLowerCase().includes(filterState.keyword.toLowerCase())) {
        return false;
      }

      // region filter
      if (filterState.region && trip.region !== filterState.region) {
        return false;
      }

      // Day range filter
      if (filterState.duration) {
        const startDate = new Date(trip.startDate);
        const endDate = new Date(trip.endDate);
        const daysDifference = getDaysBetween(startDate, endDate);

        switch (filterState.duration) {
          case TRAVELOGUE_FILTER_DURATION_OPTION.LESS_THAN_ONE_WEEK:
            if (daysDifference < 1 || daysDifference > 7) return false;
            break;
          case TRAVELOGUE_FILTER_DURATION_OPTION.MORE_THAN_ONE_WEEK:
            if (daysDifference < 8 || daysDifference > 14) return false;
            break;
          case TRAVELOGUE_FILTER_DURATION_OPTION.MORE_THAN_TWO_WEEKS:
            if (daysDifference < 15) return false;
            break;
          default:
            break;
        }
      }

      return true;
    });
  }, [filterState]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">Travel Stories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover amazing travel experiences from around the world. Filter by destination, 
            duration, or search for specific adventures that inspire your next journey.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* Filters */}
        <div className="mb-8">
          <TravelogueFilters
            filters={filterState}
            onFiltersChange={setFilterState}
            regions={regions}
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
            {filteredTravelogues.map((entry, index) => {
              const startDate = new Date(entry.startDate);
              const endDate = new Date(entry.endDate);
              const dateRange = `${formatDate(startDate)} - ${formatDate(endDate)}`;
              const days = getDaysBetween(startDate, endDate);
              return (
                <TravelogueCard 
                  key={index} 
                  title={entry.title}
                  region={entry.region}
                  dates={dateRange}
                  days={days}
                  description={entry.description}
                  image={entry.imageUrl}
                  website={entry.website}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}