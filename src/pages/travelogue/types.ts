import { TRAVELOGUE_FILTER_PROPERTY } from "./constants"

type FilterProperty = typeof TRAVELOGUE_FILTER_PROPERTY[keyof typeof TRAVELOGUE_FILTER_PROPERTY];
export type TravelogueFilterState = Record<FilterProperty, string>;