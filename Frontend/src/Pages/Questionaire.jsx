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

  const handleAnswer = (answer) => {
    console.log(`Question ${currentStep}:`, answer);
    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <section className="max-w-full min-h-screen px-[120px] flex flex-row items-center gap-10 overflow-hidden">
      <div className="flex flex-col gap-6 w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-instrument-sans font-semibold text-[84px]/24 mt-5"
        >
          Answer a few questions to unlock Insights into
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-instrument-serif italic text-[70px]"
        >
          Innovation with AI and Cloud
        </motion.h3>
      </div>

      <div className="relative w-[671px]">
        <div className="relative h-[289px]">
          <AnimatePresence mode="popLayout" initial={false}>
            <QuestionaireCard
              key={currentStep}
              question={questions[currentStep - 1]}
              stepNumber={currentStep}
              totalSteps={questions.length}
              onAnswer={handleAnswer}
            />
          </AnimatePresence>
        </div>

        <div 
          className="absolute top-2 left-0 right-0 -z-10 opacity-90"
          style={{ transform: 'scale(0.98)' }}
        >
          <div className="w-[671px] h-[289px] bg-white rounded-[24px] border border-gray-300 shadow-sm" />
        </div>
        <div 
          className="absolute top-4 left-0 right-0 -z-20 opacity-80"
          style={{ transform: 'scale(0.96)' }}
        >
          <div className="w-[671px] h-[289px] bg-white rounded-[24px] border border-gray-300 shadow-sm" />
        </div>
      </div>
    </section>
  );
};

export default Questionaire;
