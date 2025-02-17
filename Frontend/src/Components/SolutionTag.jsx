import React from "react";
import { motion } from "framer-motion";

const SolutionTag = ({ tagName }) => {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                duration: 0.2,
                ease: "easeOut"
            }}
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
