import { motion, useTransform, useSpring } from "framer-motion";

const BriefCard = ({
    title,
    description,
    imageUrl,
    listItems,
    scrollYProgress,
    index,
    totalCards = 3,
}) => {
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001,
    });

    const chunk = 1 / totalCards;
    const start = index * chunk;
    const end = (index + 1) * chunk;


    const imageFadePortion = 0.2 * chunk;
    const textFadePortion = 0.4 * chunk;




    const titleY = useTransform(
        smoothScroll,
        [start, start + 0.5 * textFadePortion, end - 0.5 * textFadePortion, end],
        [200, 0, 0, -200]
    );

    // Description specific animation
    const descriptionY = useTransform(
        smoothScroll,
        [start, start + 0.5 * textFadePortion, end - 0.5 * textFadePortion, end],
        [200, 0, 0, -400]
    );

    // List items specific animation
    const listY = useTransform(
        smoothScroll,
        [start, start + 0.5 * textFadePortion, end - 0.5 * textFadePortion, end],
        [200, 0, 0, -400]
    );


    const contentOpacity = useTransform(
        smoothScroll,
        [
            start - 0.05,
            start,
            start + imageFadePortion,
            end - imageFadePortion,
            end,
            end + 0.05
        ],
        [0, 0.4, 1, 1, 0.4, 0]
    );

    // Image opacity with similar values
    const imageOpacity = useTransform(
        smoothScroll,
        [start, start + imageFadePortion, end - imageFadePortion, end],
        [0, 1, 1, 0]
    );

    const baseTransition = {
        duration: 1,
        ease: "easeInOut",
        delay: 0.2,
    };

    return (
        <div className="absolute inset-0 flex items-center">
            {/* --- Left Text Section --- */}
            <div className="w-1/2 px-12 relative overflow-hidden">
                <motion.div
                    style={{ opacity: contentOpacity }}
                    transition={baseTransition}
                    className="relative"
                >
                    <motion.h1
                        style={{ y: titleY }}
                        transition={baseTransition}
                        className="text-[96px] font-[600] font-instrument-sans mb-6"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        style={{ y: descriptionY }}
                        transition={baseTransition}
                        className="text-gray-600 text-[32px] max-w-xl font-urbanist mb-8"
                    >
                        {description}
                    </motion.p>

                    {listItems && listItems.length > 0 && (
                        <motion.ul
                            style={{ y: listY }}
                            transition={baseTransition}
                            className="space-y-4 text-[32px] text-gray-600 font-urbanist"
                        >
                            {listItems.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center">
                                    <span className="mr-2 text-2xl">•</span>
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </motion.div>
            </div>

            {/* --- Right Image Section --- */}
            <div className="w-1/2 flex justify-center">
                <motion.div
                    style={{ opacity: imageOpacity }}
                    transition={baseTransition}
                    className="relative w-full max-w-[520px]"
                >
                    <img
                        src={imageUrl}
                        alt={title ? `${title} illustration` : "Card illustration"}
                        className="w-full h-[550px] object-cover rounded-[36px]"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default BriefCard;  