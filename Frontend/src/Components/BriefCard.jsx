import React from 'react';
import { motion, useTransform } from 'framer-motion';

const BriefCard = ({ title, description, imageUrl, listItems, scrollYProgress, index }) => {
    // Image fade animation
    const imageOpacity = useTransform(
        scrollYProgress,
        [
            index * 0.33,
            index * 0.33 + 0.05,
            (index + 1) * 0.33 - 0.05,
            (index + 1) * 0.33
        ],
        [0, 1, 1, 0]
    );

    // Text slide-up animations with different timings for each element
    const titleY = useTransform(
        scrollYProgress,
        [index * 0.33, (index + 1) * 0.33],
        [100, -50]
    );

    const descriptionY = useTransform(
        scrollYProgress,
        [index * 0.33 + 0.05, (index + 1) * 0.33],
        [100, -30]
    );

    const listY = useTransform(
        scrollYProgress,
        [index * 0.33 + 0.1, (index + 1) * 0.33],
        [100, 0]
    );

    // Opacity animations
    const contentOpacity = useTransform(
        scrollYProgress,
        [
            index * 0.33,
            index * 0.33 + 0.05,
            (index + 1) * 0.33 - 0.05,
            (index + 1) * 0.33
        ],
        [0, 1, 1, 0]
    );

    return (
        <div className="absolute inset-0 flex items-center">
            {/* Left Content Section with Staggered Animations */}
            <div className="w-1/2 px-12 relative overflow-hidden">
                <motion.div
                    style={{
                        opacity: contentOpacity,
                    }}
                    className="relative"
                >
                    {/* Title with its own motion */}
                    <motion.h1 
                        style={{ y: titleY }}
                        className="text-[96px] font-[600] font-instrument-sans mb-6 relative"
                    >
                        {title}
                    </motion.h1>

                    {/* Description with its own motion */}
                    <motion.p 
                        style={{ y: descriptionY }}
                        className="text-gray-600 text-[32px] max-w-xl font-urbanist mb-8 relative"
                    >
                        {description}
                    </motion.p>

                    {/* List Items with staggered animations */}
                    {listItems && listItems.length > 0 && (
                        <motion.ul 
                            style={{ y: listY }}
                            className="space-y-4 text-[32px] text-gray-600 font-urbanist relative"
                        >
                            {listItems.map((item, itemIndex) => (
                                <motion.li
                                    key={itemIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                        delay: itemIndex * 0.1,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                    className="flex items-center"
                                >
                                    <motion.span 
                                        className="mr-2 text-2xl"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                                    >
                                        •
                                    </motion.span>
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.div>
            </div>

            {/* Right Image Section with Smooth Transitions */}
            <div className="w-1/2 flex justify-center">
                <motion.div
                    style={{ opacity: imageOpacity }}
                    className="relative w-full max-w-[594px]"
                >
                    <motion.img
                        src={imageUrl}
                        alt={title ? `${title} illustration` : 'Card illustration'}
                        className="w-full h-[700px] object-cover rounded-[36px] "
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    
                    {/* Optional decorative elements */}
                    <motion.div 
                        className="absolute inset-0 rounded-[36px] border-2 border-gray-100"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default BriefCard;