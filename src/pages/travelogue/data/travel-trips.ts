export interface TravelTrip {
  title: string;
  region: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl?: string;
  website?: string;
}

export const travelTrips: DeepReadonly<TravelTrip[]> = [
  {
    title: "Dream Around Taiwan",
    region: "Taiwan",
    startDate: "2025-01-05",
    endDate: "2025-01-14",
    description: "Good trip",
    imageUrl: "@/assets/travelogue/dream-around-taiwan.jpg",
    website: "https://sites.google.com/view/dream-around-taiwan"
  },
  {
    title: "Tokyo Summer Cats",
    region: "Japan",
    startDate: "2024-09-07",
    endDate: "2024-09-15",
    description: "Good trip",
    imageUrl: "@/assets/travelogue/tokyo-summer-cats.jpg",
    website: "https://sites.google.com/view/tokyo-summer-cats"
  },
  {
    title: "The Sakura Chase",
    region: "Japan",
    startDate: "2024-03-22",
    endDate: "2024-04-03",
    description: "Good trip",
    imageUrl: "@/assets/travelogue/the-sakura-chase.jpg",
    website: "https://sites.google.com/view/the-sakura-chase"
  },
  {
    title: "Batam Escapade",
    region: "Indonesia",
    startDate: "2024-01-01",
    endDate: "2024-01-01",
    description: "Good trip",
    imageUrl: "@/assets/travelogue/batam-escapade.jpg",
    website: "https://sites.google.com/view/batam-escapade"
  },
  {
    title: "Chengdu For You",
    region: "China",
    startDate: "2023-12-08",
    endDate: "2023-12-13",
    description: "Good trip",
    imageUrl: "@/assets/travelogue/chengdu-for-you.jpg",
    website: "https://sites.google.com/view/chengdu-for-you"
  },
  {
    title: "March To Japan",
    region: "Japan",
    startDate: "2023-03-19",
    endDate: "2023-04-02",
    description: "Good trip",
    imageUrl: "@/assets/travelogue/march-to-japan.jpg",
    website: "https://marchtojapan.web.app"
  }
];
