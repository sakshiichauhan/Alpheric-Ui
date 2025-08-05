import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionaireCard from "../Components/QuestionaireCard";

const questions = [
    {
        id: 1,
        text: "Are you taking advantage of cloud computing to reduce infrastructure costs and increase agility?",
        type: "standard",
    },
    {
        id: 2,
        text: "Have you implemented automated testing in your development pipeline?",
        type: "standard",
    },
    {
        id: 3,
        text: "Is your team using agile methodologies effectively?",
        type: "standard",
    },
    {
        id: 4,
        text: `The Heart of Enterprise Solutions\n Why it's All About People, Not Just Technology`,
        type: "special",
    },
];

const Questionaire = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isRotated, setIsRotated] = useState(true);

    const handleAnswer = (answer) => {
        console.log(`Question ${currentStep}:`, answer);
        setIsRotated(false);
        setTimeout(() => {
            if (currentStep < questions.length) {
                setCurrentStep((prev) => prev + 1);
                setIsRotated(true);
            }
        }, 500); 
    };

    return (
        <section className="max-w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-[120px] flex flex-col lg:flex-row items-center gap-6 lg:gap-10 overflow-hidden py-8">
            <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 text-center lg:text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-instrument-sans font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[80px]/24 xl:text-[84px]/24 mt-5"
                >
                    Answer a few questions to unlock Insights into
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-instrument-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[70px]"
                >
                    Innovation with AI and Cloud
                </motion.h3>
            </div>

            <div className="relative w-full max-w-[671px] mt-8 lg:mt-4   ">
                <div className="relative h-[289px] sm:h-[320px] md:h-[350px] items-center">
                    <AnimatePresence mode="popLayout">
                        {questions.map((question, index) => {
                            if (index >= currentStep - 1 && index < currentStep + 2) {
                                const stackPosition = index - currentStep + 1;
                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute w-full"
                                        initial={{ y: "100vh", rotate: index === currentStep - 1 ? 0 : -4 }}
                                        animate={{
                                            y: stackPosition * 8,
                                            scale: 1 - stackPosition * 0.02,
                                            opacity: 1 - stackPosition * 0.2,
                                            rotate: stackPosition === 0 ? 0 : -4 * stackPosition,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut",
                                            },
                                        }}
                                        exit={{
                                            y: "-100vh",
                                            rotate: stackPosition === 0 ? 0 : -4 * stackPosition,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeIn",
                                            },
                                        }}
                                        style={{
                                            zIndex: 10 - stackPosition,
                                        }}
                                    >
                                        <QuestionaireCard
                                            question={question}
                                            stepNumber={index + 1}
                                            totalSteps={questions.length}
                                            onAnswer={handleAnswer}
                                        />
                                    </motion.div>
                                );
                            }
                            return null;
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Questionaire;


