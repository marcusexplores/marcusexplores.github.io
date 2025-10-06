interface Polaroid {
  src: string;
  caption: string;
  rotate: number;
}

export const polaroids: DeepReadonly<Polaroid[]> = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    caption: "Mountain Escape",
    rotate: -10,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    caption: "City Lights",
    rotate: 15,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    caption: "Ocean View",
    rotate: -5,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    caption: "Forest Trail",
    rotate: 12,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    caption: "High Peaks",
    rotate: -18,
  },
];
