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
    imageUrl: "src/assets/travelogue/march-to-japan/main.jpg",
    website: "https://sites.google.com/view/dream-around-taiwan"
  },
  {
    title: "Tokyo Summer Cats",
    region: "Japan",
    startDate: "2024-09-07",
    endDate: "2024-09-15",
    description: "Good trip",
    imageUrl: "src/assets/travelogue/march-to-japan/main.jpg",
    website: "https://sites.google.com/view/tokyo-summer-cats"
  },
  {
    title: "The Sakura Chase",
    region: "Japan",
    startDate: "2024-03-22",
    endDate: "2024-04-03",
    description: "Good trip",
    imageUrl: "src/assets/travelogue/march-to-japan/main.jpg",
    website: "https://sites.google.com/view/the-sakura-chase"
  },
  {
    title: "Batam Escapade",
    region: "Indonesia",
    startDate: "2024-01-01",
    endDate: "2024-01-01",
    description: "Good trip",
    imageUrl: "src/assets/travelogue/march-to-japan/main.jpg",
    website: "https://sites.google.com/view/batam-escapade"
  },
  {
    title: "Chengdu For You",
    region: "China",
    startDate: "2023-12-08",
    endDate: "2023-12-13",
    description: "Good trip",
    imageUrl: "src/assets/travelogue/march-to-japan/main.jpg",
    website: "https://sites.google.com/view/chengdu-for-you"
  },
  {
    title: "March To Japan",
    region: "Japan",
    startDate: "2023-03-19",
    endDate: "2023-04-02",
    description: "Good trip",
    imageUrl: "src/assets/travelogue/march-to-japan/main.jpg",
    website: "https://marchtojapan.web.app"
  },
  {
    title: "Adventures in the Swiss Alps",
    region: "Switzerland",
    startDate: "2024-07-15",
    endDate: "2024-07-22",
    description: "An incredible week hiking through the stunning Swiss Alps, exploring mountain villages and enjoying breathtaking views.",
    imageUrl: "https://images.unsplash.com/photo-1560259979-feecf6605869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTd2lzcyUyMEFscHMlMjBtb3VudGFpbnMlMjBoaWtpbmd8ZW58MXx8fHwxNzU3NTI0MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Exploring Ancient Rome",
    region: "Italy",
    startDate: "2024-05-10",
    endDate: "2024-05-14",
    description: "A fascinating journey through Rome's ancient history, from the Colosseum to the Roman Forum.",
    imageUrl: "https://images.unsplash.com/photo-1706884027668-4b2a1a9701ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb21lJTIwQ29sb3NzZXVtJTIwYW5jaWVudHxlbnwxfHx8fDE3NTc1MjQzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Cherry Blossom Season in Kyoto",
    region: "Japan",
    startDate: "2024-04-01",
    endDate: "2024-04-12",
    description: "Experiencing the magical cherry blossom season in Japan's cultural capital.",
    imageUrl: "https://images.unsplash.com/photo-1733147084990-3c62e70e7baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLeW90byUyMGNoZXJyeSUyMGJsb3Nzb218ZW58MXx8fHwxNzU3NTI0MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Weekend in Barcelona",
    region: "Spain",
    startDate: "2024-06-08",
    endDate: "2024-06-10",
    description: "A quick but memorable weekend exploring Gaudí's architecture and Barcelona's vibrant food scene.",
    imageUrl: "https://images.unsplash.com/photo-1720782631940-9ea9ea66cce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXJjZWxvbmElMjBhcmNoaXRlY3R1cmUlMjBHYXVkaXxlbnwxfHx8fDE3NTc1MjQzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Northern Lights in Iceland",
    region: "Iceland",
    startDate: "2024-02-20",
    endDate: "2024-03-05",
    description: "Two weeks chasing the Northern Lights and exploring Iceland's dramatic landscapes and geothermal wonders.",
    imageUrl: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzU3NTI0MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Safari Adventure in Kenya",
    region: "Kenya",
    startDate: "2024-08-12",
    endDate: "2024-08-26",
    description: "An unforgettable safari experience in the Maasai Mara, witnessing the Great Migration.",
    imageUrl: "https://images.unsplash.com/photo-1613457231357-a5db3bc5bd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhZmFyaSUyMHdpbGRsaWZlfGVufDF8fHx8MTc1NzUyNDM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Cultural Immersion in Morocco",
    region: "Morocco",
    startDate: "2024-03-15",
    endDate: "2024-03-25",
    description: "Exploring the souks of Marrakech, the blue city of Chefchaouen, and the Sahara Desert.",
    imageUrl: "https://images.unsplash.com/photo-1580746738099-1cb74f972feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwZGVzZXJ0JTIwTWFycmFrZWNofGVufDF8fHx8MTc1NzUyNDM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Island Hopping in Greece",
    region: "Greece",
    startDate: "2024-09-01",
    endDate: "2024-09-08",
    description: "A week sailing between the Greek islands, from Santorini to Mykonos, enjoying crystal-clear waters.",
    imageUrl: "https://images.unsplash.com/photo-1689016889984-f4e9998f2d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHcmVlY2UlMjBpc2xhbmRzJTIwU2FudG9yaW5pfGVufDF8fHx8MTc1NzUyNDM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Business Trip to Singapore",
    region: "Singapore",
    startDate: "2024-01-22",
    endDate: "2024-01-24",
    description: "A brief but efficient business trip with some time to explore the Gardens by the Bay.",
    imageUrl: "https://images.unsplash.com/photo-1577619945390-b4b0f0329265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBnYXJkZW5zJTIwYmF5fGVufDF8fHx8MTc1NzUyNDM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Road Trip Through New Zealand",
    region: "New Zealand",
    startDate: "2024-11-10",
    endDate: "2024-12-01",
    description: "Three weeks driving through both North and South Islands, from Auckland to Queenstown.",
    imageUrl: "https://images.unsplash.com/photo-1556789483-2d4a13fb8fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBaZWFsYW5kJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc1NzQ4MDQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Another Road Trip Through New Zealand",
    region: "New Zealand",
    startDate: "2024-12-10",
    endDate: "2024-12-12",
    description: "Three weeks driving through both North and South Islands, from Auckland to Queenstown.",
    imageUrl: "https://images.unsplash.com/photo-1556789483-2d4a13fb8fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBaZWFsYW5kJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc1NzQ4MDQ0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];
