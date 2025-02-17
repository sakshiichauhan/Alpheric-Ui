import React from 'react';
import { motion, useTransform } from 'framer-motion';
import SolutionTag from './SolutionTag';

// Variants for text animation: slides from bottom to top with a fade-in
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Variants for image animation: fade in only
const imageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const SolutionCard = ({ title, description, imageUrl, tags, scrollYProgress, index }) => {
  // Image animations
  const imageOpacity = useTransform(
    scrollYProgress,
    [
      index * 0.25,
      index * 0.25 + 0.05,
      (index + 1) * 0.25 - 0.05,
      (index + 1) * 0.25
    ],
    [0, 1, 1, 0]
  );

  // Text animations
  const textY = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [100, 0]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [
      index * 0.25,
      index * 0.25 + 0.05,
      (index + 1) * 0.25 - 0.05,
      (index + 1) * 0.25
    ],
    [0, 1, 1, 0]
  );

  // Tags animation
  const tagsY = useTransform(
    scrollYProgress,
    [index * 0.25, (index + 1) * 0.25],
    [50, 0]
  );

  return (
    <div className="absolute inset-0 flex items-center">
      {/* Image Section - Fixed position with fade transition */}
      <div className="w-1/2 flex justify-center">
        <motion.div
          style={{ opacity: imageOpacity }}
          className="w-full max-w-[594px]"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[700px] object-cover rounded-[36px] shadow-lg"
          />
        </motion.div>
      </div>

      {/* Content Section - Animated text and tags */}
      <div className="w-1/2 px-12">
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY
          }}
          className="flex flex-col gap-6"
        >
          {/* Title */}
          <h2 className="font-instrument-sans font-semibold text-7xl leading-tight">
            {title}
          </h2>
          
          {/* Description */}
          <p className="font-instrument-sans text-3xl text-gray-600">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <motion.div 
              style={{ y: tagsY }}
              className="flex flex-wrap gap-2 mt-4"
            >
              {tags.map((tag, tagIndex) => (
                <SolutionTag 
                  key={tagIndex} 
                  tagName={tag}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionCard;
