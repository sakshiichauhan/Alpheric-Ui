import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PilotSection from "../../Components/PilotCards";
import pilot1 from "../../assets/Pilot_assets/pilot_asset_1.jpeg";
import pilot2 from "../../assets/Pilot_assets/pilot_asset_2.jpeg";
import pilot3 from "../../assets/Pilot_assets/pilot_asset_3.png";
import pilot4 from "../../assets/Pilot_assets/pilot_asset_4.png";

const pilotCards = [
  {
    title: "Starter Pilot",
    subtitle: "Perfect for small teams getting started",
    duration: "2 weeks",
    buttonText: "Book Now",
    imageSrc: pilot1,
  },
  {
    title: "Standard Pilot",
    subtitle: "Comprehensive evaluation for established teams",
    duration: "4 weeks",
    buttonText: "Book Now",
    imageSrc: pilot2,
  },
  {
    title: "Premium Pilot",
    subtitle: "In-depth analysis for complex requirements",
    duration: "6 weeks",
    buttonText: "Book Now",
    imageSrc: pilot3,
  },
  {
    title: "Enterprise Pilot",
    subtitle: "Custom solution for enterprise needs",
    duration: "8 weeks",
    buttonText: "Book Now",
    imageSrc: pilot4,
  },
];

const Pilotpage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    mass: 0.5,
    stiffness: 70
  });

  return (
    <div
      ref={containerRef}
      className="min-h-[400vh] bg-gradient-to-b from-white to-white relative"
    >
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="flex justify-center items-center font-instrument-sans text-4xl md:text-[120px] font-semibold px-4 text-center pt-10">
          Book a Pilot
        </div>

        <div className="relative flex-1 w-full overflow-hidden">
          {pilotCards.map((card, index) => {
            const range = 1 / pilotCards.length;
            const progress = range * index;
            
            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center w-full"
                style={{
                  transformOrigin: "50% 100%",
                  rotateX: useTransform(
                    smoothProgress,
                    [progress, progress + range],
                    [0, -60]
                  ),
                  y: useTransform(
                    smoothProgress,
                    [progress, progress + range],
                    ["0%", "-120%"]
                  ),
                  scale: useTransform(
                    smoothProgress,
                    [progress - 0.5, progress - 0.2, progress, progress + 0.3],
                    [0.5, 0.7, 1, 1.4]  // Modified scale values for more dramatic effect
                  ),
                  opacity: useTransform(
                    smoothProgress,
                    [progress - 0.5, progress - 0.3, progress, progress + 0.2],
                    [0, 0.5, 1, 0]
                  ),
                  zIndex: pilotCards.length - index,
                }}
              >
                <PilotSection {...card} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pilotpage;
