import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    initial: {
        y: "100vh",
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20,
            duration: 0.8,
        },
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const QuestionnaireCard = ({ question, stepNumber, totalSteps, onAnswer }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute w-full max-w-[691px] font-instrument-sans"
        >
            <div className="relative border border-gray-300 bg-white w-[671px] h-[289px] p-4 rounded-[24px] shadow-sm overflow-hidden">
                {question.type !== "special" ? (
                    <>
                        <div className="flex items-center justify-center gap-4 mb-5 mt-5 font-[20px]">
                            {Array.from({ length: totalSteps }, (_, index) => (
                                <div
                                    key={index + 1}
                                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-medium
                                        ${index + 1 === stepNumber ? "border-black" : "border-gray-300 text-gray-300"}`}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>

                        <h2 className="text-center text-[32px] font-medium mb-3 px-4">
                            {question.text}
                        </h2>

                        <div className="flex justify-between">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#56c8dc" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onAnswer("no")}
                                className="absolute -left-2 -bottom-5 bg-black text-white p-7 text-[24px] rounded-full font-medium shadow-lg transition-colors duration-300"
                            >
                                No
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#56c8dc" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onAnswer("yes")}
                                className="absolute -right-3 -bottom-5 bg-black text-white p-7 text-[24px] rounded-full font-medium shadow-lg transition-colors duration-300"
                            >
                                Yes
                            </motion.button>
                        </div>
                    </>
                ) : (
                    <div className="text-center px-7">
                        <div className="inline-block px-4 rounded-full bg-white border text-gray-600 mb-2 font-medium text-[20px] mt-4">
                            Insights
                        </div>
                        <h2 className="text-[32px] font-bold">
                            {question.text}
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#56c8dc" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onAnswer("view")}
                            className="bg-black text-white text-[24px] px-4 py-6 rounded-full absolute -bottom-7 -translate-x-1/2 shadow-lg transition-colors duration-300"
                        >
                            View
                        </motion.button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default QuestionnaireCard;