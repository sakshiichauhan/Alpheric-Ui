import React from "react";
import { motion } from "framer-motion";
import calender from "../assets/Pilot_assets/calendar.svg"

const PilotCards = ({
    title = "Pilot for You",
    subtitle = "Your idea or concept = our solution.",
    duration = "2 weeks",
    buttonText = "Book a pilot",
    onButtonClick,
    imageSrc,
}) => {
    return (
        <motion.div 
            className="font-instrument-sans relative w-full h-[540px] flex justify-center"
            style={{
                perspective: "1500px",
                transformStyle: "preserve-3d"
            }}
        >
            <motion.div 
                className="absolute inset-0 left-[116px] right-[116px] rounded-[32px] overflow-hidden shadow-xl"
                style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d"
                }}
            >
                <img
                    src={imageSrc}
                    alt="Pilot Background"
                    className="w-full h-full object-cover transform-gpu"
                />
                <div className="absolute inset-0 bg-black/40" />
                
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-xl ml-20">
                        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
                        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>

                        <div className="flex items-center bg-white/20 px-6 py-1.5 rounded-full w-fit">
                            <span className="text-white flex items-center mr-4 gap-3 font-semibold">
                                {duration} <img src={calender} className="w-6" />
                            </span>

                            <button
                                onClick={onButtonClick}
                                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PilotCards;