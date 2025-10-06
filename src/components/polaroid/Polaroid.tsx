// components/PolaroidItem.tsx
import { motion } from "motion/react";

interface PolaroidProps {
  imageSrc: string;
  caption: string;
  initialRotate: number;
}

export const Polaroid = ({
  imageSrc,
  caption,
  initialRotate,
}: PolaroidProps) => {
  const swayRange = 2; // +/- 2 degrees for the sway
  const baseRotate = initialRotate; // e.g., -10

  return (
    <motion.div
      className="relative bg-white p-4 pb-16 shadow-2xl"
      style={{
        rotate: baseRotate,
        transformOrigin: "top center",
      }}
      animate={{
        // Sway around the base rotation
        rotate: [
          baseRotate,
          baseRotate - swayRange,
          baseRotate + swayRange,
          baseRotate - swayRange / 2,
          baseRotate + swayRange / 2,
          baseRotate,
        ],
      }}
      transition={{
        duration: 4 + Math.random() * 2, // Slightly random duration for a less uniform look
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2, // Random delay so they don't sway in sync
      }}
    >
      {/* Simplified Peg Element */}
      <motion.div
        className="absolute w-4 h-10 -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center"
        style={{ transformOrigin: "bottom center" }}
        animate={{ rotate: [-0, 2, -2, 1, -1, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1,
        }}
      >
        <div className="absolute w-full h-full bg-blue-500 rounded-sm shadow-md" />
        <div className="absolute w-full h-2 bg-gray-300 border-t border-b border-gray-400 -translate-y-0.5 z-10" />
      </motion.div>

      {/* Image container */}
      <div className="w-64 h-64 bg-gray-100 overflow-hidden">
        <img
          src={imageSrc}
          alt={caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Optional caption area */}
      <div className="mt-3 text-center">
        <p className="text-gray-600 font-handwriting text-sm">{caption}</p>
      </div>
    </motion.div>
  );
};
