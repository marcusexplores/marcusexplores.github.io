import { motion, type Variants } from 'motion/react';
import { LOAD_DURATION_MS } from './constants'

const fillVariants: Variants = {
  // Animation that controls the width of the masking element, revealing the white text
  fill: {
    width: ["0%", "100%"], // Animate the width from 0% to 100%
    transition: {
      duration: LOAD_DURATION_MS / 1000, // Match the simulated loading time (2.5 seconds)
      ease: "linear", // Consistent speed for a loading bar effect
    },
  },
};

export const LoadingScreen = () => {
  // Variants for the overlay itself (handles the exit animation)
  const overlayVariants: Variants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 }, // Stay solid while loading
    exit: {
      opacity: 0,
      scale: 1.05, // Slight scale up while fading out for a nice transition
      transition: {
        duration: 0.5,
        delay: 0.2, // Wait a moment after the loading is complete before fading
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative">
        {/* Background Text (The 'empty' state, dark gray) */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-gray-700 tracking-tighter select-none">
          LOADING...
        </h1>

        {/* Foreground Fill Mask (Expands width from left-to-right) */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          // This motion.div's width will animate from 0% to 100%,
          // acting as a mask that reveals the white text inside.
          initial={{ width: "0%" }}
          animate="fill"
          variants={fillVariants}
        >
          {/* The white text revealed by the expanding container. It must be positioned absolutely to align perfectly with the background text. */}
          <h1 className="text-8xl md:text-9xl font-extrabold text-white tracking-tighter select-none absolute inset-0">
            LOADING...
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};
