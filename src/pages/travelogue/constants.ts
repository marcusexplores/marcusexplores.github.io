export const TRAVELOGUE_FILTER_PROPERTY = {
  KEYWORD: "keyword",
  REGION: "region",
  DURATION: "duration"
} as const;

export const TRAVELOGUE_FILTER_REGION_OPTION = {
  ALL: "all"
} as const;

export const TRAVELOGUE_FILTER_DURATION_OPTION = {
  ALL: "all",
  LESS_THAN_ONE_WEEK: "1",
  MORE_THAN_ONE_WEEK: "1+",
  MORE_THAN_TWO_WEEKS: "2+"
} as const;