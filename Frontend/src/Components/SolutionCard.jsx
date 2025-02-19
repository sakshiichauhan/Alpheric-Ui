import React from "react";
import { motion, useTransform } from "framer-motion";
import SolutionTag from "./SolutionTag";

const SolutionCard = ({
  title,
  description,
  imageUrl,
  tags,
  scrollYProgress,
  index,
}) => {
  // --- Scroll-driven transforms (unchanged ranges) ---
  const imageOpacity = useTransform(scrollYProgress,
    [
      index * 0.25,
      index * 0.25 + 0.05,
      (index + 1) * 0.25 - 0.05,
      (index + 1) * 0.25,
    ],
    [0, 1, 1, 0]
  );

  const textY = useTransform(scrollYProgress,
    [
      index * 0.25,
      index * 0.25 + 0.1,
      (index + 1) * 0.25 - 0.1,
      (index + 1) * 0.25,
    ],
    [100, 0, -200, -300]
  );

  const textOpacity = useTransform(scrollYProgress,
    [
      index * 0.25,
      index * 0.25 + 0.05,
      (index + 1) * 0.25 - 0.05,
      (index + 1) * 0.25,
    ],
    [0, 1, 1, 0]
  );

  const tagsY = useTransform(scrollYProgress,
    [
      index * 0.25,
      index * 0.25 + 0.1,
      (index + 1) * 0.25 - 0.1,
      (index + 1) * 0.25,
    ],
    [0, 1, 1, 0]
  );

  return (
    <div className="absolute inset-0 flex items-center overflow-visible">

      <div className="w-1/2 flex justify-center">
        <motion.div
          style={{ opacity: imageOpacity }}
          initial={{ scale: 0.95, x: 50, y: 30, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          className="w-full max-w-[594px]"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-[400px] h-[500px] object-cover rounded-[36px] shadow-lg"
          />
        </motion.div>
      </div>

      {/* ------------ Content Section ------------ */}
      <div className="w-1/2 px-12 overflow-visible">
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          transition={{
            duration: 3.5, // Slower upward movement
            ease: "easeInOut",
          }}
          className="flex flex-col gap-6"
        >
          {/* Title */}
          <motion.h2
            className="font-instrument-sans font-semibold text-7xl leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5, // Slight delay for coordination with image
              duration: 3,
              ease: "easeInOut",
            }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-instrument-sans text-3xl text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.8, // Slight stagger after title
              duration: 3,
              ease: "easeInOut",
            }}
          >
            {description}
          </motion.p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <motion.div
              style={{ y: tagsY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.2, // Small offset after description
                duration: 3,
                ease: "easeInOut",
              }}
              className="flex flex-wrap gap-2 mt-4"
            >
              {tags.map((tag, tagIndex) => (
                <motion.div
                  key={tagIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 2.2 + tagIndex * 0.2, // Slight stagger per tag
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <SolutionTag tagName={tag} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionCard;
