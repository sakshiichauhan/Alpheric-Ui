import React from "react";
import { motion } from "framer-motion";

const SolutionTag = ({ tagName, index }) => {
    const tagVariants = {
        initial: { 
            opacity: 0, 
            scale: 0.8,
            y: 20 
        },
        animate: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index ? index * 0.1 : 0, // Stagger effect based on index
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <motion.button
            variants={tagVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className={`
                font-urbanist 
                px-4 
                py-2 
                m-2 
                bg-gray-100 
                rounded-full 
                text-sm
                hover:bg-gray-200 
                transition-colors 
                duration-200
            `}
        >
            {tagName}
        </motion.button>
    );
};

export default SolutionTag;
