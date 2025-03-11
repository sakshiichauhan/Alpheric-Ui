import React from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import SolutionTag from "./SolutionTag";

const SolutionCard = ({
    title,
    description,
    imageUrl,
    tags,
    scrollYProgress,
    index,
    totalCards,
}) => {

    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 15,
        restDelta: 0.001,
    });


    const chunk = 1 / totalCards;
    const start = index * chunk;
    const end = (index + 1) * chunk;


    const imageFadePortion = 0.2 * chunk;
    const textFadePortion = 0.4 * chunk;

    const imageOpacity = useTransform(
        smoothScrollYProgress,
        [start, start + imageFadePortion, end - imageFadePortion, end],
        [0, 1, 1, 0]
    );

    const textY = useTransform(
        smoothScrollYProgress,
        [start, start + textFadePortion, end - textFadePortion, end],
        [100, 0, -200, -300]
    );

    const textOpacity = useTransform(
        smoothScrollYProgress,
        [start, start + imageFadePortion, end - imageFadePortion, end],
        [0, 1, 1, 0]
    );

    const tagsY = useTransform(
        smoothScrollYProgress,
        [start, start + textFadePortion, end - textFadePortion, end],
        [0, 1, 1, 0]
    );



    const baseTransition = {
        duration: 2.5,
        ease: "easeInOut",
        delay: 0.5,
    };

    return (
        <div className="absolute inset-0 flex items-center overflow-visible top-6">
            <div className="w-1/2 flex justify-center">
                <motion.div
                    style={{ opacity: imageOpacity }}
                    transition={baseTransition}
                    className="w-full max-w-[594px]"
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-[500px] h-[700px] object-cover rounded-[36px] shadow-lg"
                    />
                </motion.div>
            </div>


            <div className="w-1/2 px-12 overflow-visible">
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    transition={baseTransition}
                    className="flex flex-col gap-6"
                >
                    <h2 className="font-instrument-sans font-semibold text-7xl leading-tight">
                        {title}
                    </h2>

                    <p className="font-instrument-sans text-3xl text-gray-600">
                        {description}
                    </p>

                    {tags && tags.length > 0 && (
                        <motion.div
                            style={{ y: tagsY }}
                            transition={baseTransition}
                            className="flex flex-wrap gap-2 mt-4"
                        >
                            {tags.map((tag, tagIndex) => (
                                <div key={tagIndex}>
                                    <SolutionTag tagName={tag} />
                                </div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default SolutionCard;