import { useState } from "react";
import { Filter, X } from "lucide-react";
import type { TravelogueFilterState } from "../interfaces/TravelogueFilterState";
import { Badge } from "../../../features/badge/Badge";
import { Button } from "../../../features/button/Button";
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
      titleSearch: "",
      region: "",
      dayRange: ""
    });
  };

  const hasActiveFilters = filters.titleSearch || filters.region || filters.dayRange;

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
          {/* Title Search */}
          <InputSearch
            placeholder="Search by title..."
            value={filters.titleSearch}
            onChange={(e) => handleFilterChange('titleSearch', e.target.value)}
          />

          {/* region Filter */}
          <Select
            value={filters.region}
            onValueChange={(value) => handleFilterChange('region', value === 'all' ? '' : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Day Range Filter */}
          <Select
            value={filters.dayRange}
            onValueChange={(value) => handleFilterChange('dayRange', value === 'all' ? '' : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any duration</SelectItem>
              <SelectItem value="1-3">1-3 days</SelectItem>
              <SelectItem value="4-7">4-7 days</SelectItem>
              <SelectItem value="8-14">1-2 weeks</SelectItem>
              <SelectItem value="15+">2+ weeks</SelectItem>
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
            {filters.titleSearch && (
              <Badge variant="secondary" className="gap-1">
                Title: "{filters.titleSearch}"
                <button
                  onClick={() => handleFilterChange('titleSearch', '')}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.region && (
              <Badge variant="secondary" className="gap-1">
                region: {filters.region}
                <button
                  onClick={() => handleFilterChange('region', '')}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.dayRange && (
              <Badge variant="secondary" className="gap-1">
                Duration: {filters.dayRange === '15+' ? '2+ weeks' : 
                          filters.dayRange === '8-14' ? '1-2 weeks' :
                          filters.dayRange === '4-7' ? '4-7 days' : '1-3 days'}
                <button
                  onClick={() => handleFilterChange('dayRange', '')}
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