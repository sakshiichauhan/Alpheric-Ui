import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MoveRight } from "lucide-react";
import videsectionImage from "../assets/design-asset-cropped.png";
import playButton from "../assets/Videos/play.png";

const Design = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Animation variants for text and video
  const textVariants = {
    hidden: { 
      x: -200,
      opacity: 0 
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: custom * 0.2,
        duration: 0.8
      }
    })
  };

  const videoVariants = {
    hidden: { 
      x: 200,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen py-20 overflow-hidden"
    >
      <div className="max-w-full flex flex-col px-18 mt-10">
        
        {/* TEXT #1: Slides in from left with a short delay */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-[84px] font-instrument-sans font-[600] mb-4"
        >
          We do amazing things
        </motion.h1>

        {/* TEXT #2: Slides in from left with a slightly longer delay */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
          className="flex items-center justify-start gap-4 font-instrumental-serif italic text-[84px] mb-10"
        >
          <MoveRight size={60} />
          oh, with amazing people too
        </motion.div>

        {/* VIDEO SECTION: Slides in from right with a delay */}
        <motion.div
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <video
            className="w-screen rounded-2xl h-auto"
            ref={videoRef}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            poster={videsectionImage}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       hover:bg-white/10 rounded-full p-4 z-10"
            onClick={() => {
              if (videoRef.current.paused) {
                videoRef.current.play();
              } else {
                videoRef.current.pause();
              }
            }}
          >
            <img className="w-35" src={playButton} alt="Play button" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Design;
