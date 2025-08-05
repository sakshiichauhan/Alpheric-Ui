import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MoveRight } from "lucide-react";
import videsectionImage from "../assets/Homepage/design-asset-cropped.png";
import playButton from "../assets/Videos/play.png";

const Design = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

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
            className="min-h-screen py-10 md:py-20 overflow-hidden"
        >
            <div className="max-w-full flex flex-col px-4 md:px-8 lg:px-18 mt-6 md:mt-10">
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0}
                    className="text-[30px] md:text-[60px] lg:text-[84px] font-instrument-sans font-[600] mb-4"
                >
                    We do amazing things
                </motion.h1>
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={1}
                    className="flex items-center justify-start gap-2 md:gap-4 font-instrument-serif-italics text-[30px] md:text-[60px] lg:text-[84px] mb-6 md:mb-10"
                >
                    <MoveRight className="size-[40px] md:size-[60px]" />
                    oh, with amazing people too
                </motion.div>
                <motion.div
                    variants={videoVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative px-4 md:px-0"
                >
                    <video
                        className="w-full rounded-xl md:rounded-2xl h-auto"
                        ref={videoRef}
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        poster={videsectionImage}
                        onClick={handleVideoClick}
                    />
                    {!isPlaying && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full p-2 md:p-4 z-10"
                            onClick={handleVideoClick}
                        >
                            <img className="w-20 md:w-35" src={playButton} alt="Play button" />
                        </motion.button>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Design;