import { useState } from "react";
import { Filter, X } from "lucide-react";
import { TRAVELOGUE_FILTER_PROPERTY, TRAVELOGUE_FILTER_DURATION_OPTION, TRAVELOGUE_FILTER_REGION_OPTION } from "../constants"
import type { TravelogueFilterState } from "../types";
import { Badge } from "../../../components/badge/Badge";
import { Button } from "../../../components/button/Button";
import { Select } from "../../../features/select/Select";
import { SelectContent } from "../../../features/select-content/SelectContent";
import { SelectItem } from "../../../features/select-item/SelectItem";
import { SelectTrigger } from "../../../features/select-trigger/SelectTrigger";
import { SelectValue } from "../../../features/select-value/SelectValue";
import { InputSearch } from "../../../features/input-search/InputSearch";


interface TravelogueFiltersProps {
  filters: TravelogueFilterState;
  onFiltersChange: (filters: TravelogueFilterState) => void;
  regions: string[];
  totalResults: number;
}

export function TravelogueFilters({ 
  filters, 
  onFiltersChange, 
  regions, 
  totalResults 
}: TravelogueFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof TravelogueFilterState, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      keyword: "",
      region: "",
      duration: ""
    });
  };

  const hasActiveFilters = filters.keyword || filters.region || filters.duration;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2>Travel Stories</h2>
          <Badge variant="outline">{totalResults} {totalResults === 1 ? 'story' : 'stories'}</Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Keyword Search */}
          <InputSearch
            placeholder="Search by keyword..."
            value={filters.keyword}
            onChange={(e) => handleFilterChange(TRAVELOGUE_FILTER_PROPERTY.KEYWORD, e.target.value)}
          />

          {/* region Filter */}
          <Select
            value={filters.region}
            onValueChange={(value) => handleFilterChange(TRAVELOGUE_FILTER_PROPERTY.REGION, value === TRAVELOGUE_FILTER_REGION_OPTION.ALL ? '' : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TRAVELOGUE_FILTER_REGION_OPTION.ALL}>All regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Day Range Filter */}
          <Select
            value={filters.duration}
            onValueChange={(value) => handleFilterChange(TRAVELOGUE_FILTER_PROPERTY.DURATION, value === TRAVELOGUE_FILTER_DURATION_OPTION.ALL ? '' : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={TRAVELOGUE_FILTER_DURATION_OPTION.ALL}>Any duration</SelectItem>
              <SelectItem value={TRAVELOGUE_FILTER_DURATION_OPTION.LESS_THAN_ONE_WEEK}>&le; 1 week</SelectItem>
              <SelectItem value={TRAVELOGUE_FILTER_DURATION_OPTION.MORE_THAN_ONE_WEEK}>&gt; 1 week</SelectItem>
              <SelectItem value={TRAVELOGUE_FILTER_DURATION_OPTION.MORE_THAN_TWO_WEEKS}>&gt; 2 weeks</SelectItem>
            </SelectContent>
          </Select>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="justify-center"
            >
              <X className="h-4 w-4 mr-2" />
              Clear
            </Button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {filters.keyword && (
              <Badge variant="secondary" className="gap-1">
                Title: "{filters.keyword}"
                <button
                  onClick={() => handleFilterChange(TRAVELOGUE_FILTER_PROPERTY.KEYWORD, '')}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.region && (
              <Badge variant="secondary" className="gap-1">
                Region: {filters.region}
                <button
                  onClick={() => handleFilterChange(TRAVELOGUE_FILTER_PROPERTY.REGION, '')}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.duration && (
              <Badge variant="secondary" className="gap-1">
                Duration: {filters.duration === TRAVELOGUE_FILTER_DURATION_OPTION.MORE_THAN_TWO_WEEKS ? '2+ weeks' : 
                          filters.duration === TRAVELOGUE_FILTER_DURATION_OPTION.MORE_THAN_ONE_WEEK ? '1+ weeks' : '1 week'}
                <button
                  onClick={() => handleFilterChange(TRAVELOGUE_FILTER_PROPERTY.DURATION, '')}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}