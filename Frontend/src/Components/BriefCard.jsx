// import { motion, useTransform } from 'framer-motion';

// const BriefCard = ({ title, description, imageUrl, listItems, scrollYProgress, index }) => {
//     const imageOpacity = useTransform(
//         scrollYProgress,
//         [
//             index * 0.4,
//             index * 0.4 + 0.15,
//             (index + 1) * 0.4 - 0.15, 
//             (index + 1) * 0.4
//         ],
//         [0, 1, 1, 0]
//     );

//     const titleY = useTransform(
//         scrollYProgress,
//         [index * 0.4, (index + 1) * 0.4],
//         [120, -40]
//     );

//     const descriptionY = useTransform(
//         scrollYProgress,
//         [index * 0.4 + 0.15, (index + 1) * 0.4],
//         [120, -30]
//     );

//     const listY = useTransform(
//         scrollYProgress,
//         [index * 0.4 + 0.2, (index + 1) * 0.4],
//         [120, 0]
//     );

//     const contentOpacity = useTransform(
//         scrollYProgress,
//         [
//             index * 0.4,
//             index * 0.4 + 0.15,
//             (index + 1) * 0.4 - 0.15,
//             (index + 1) * 0.4
//         ],
//         [0, 1, 1, 0]
//     );

//     return (
//         <div className="absolute inset-0 flex items-center">
//             <div className="w-1/2 px-12 relative overflow-visible">
//                 <motion.div
//                     style={{ opacity: contentOpacity }}
//                     className="relative"
//                 >
//                     <motion.h1 
//                         style={{ y: titleY }}
//                         className="text-[96px] font-[600] font-instrument-sans mb-6 relative"
//                     >
//                         {title}
//                     </motion.h1>

//                     <motion.p 
//                         style={{ y: descriptionY }}
//                         className="text-gray-600 text-[32px] max-w-xl font-urbanist mb-8 relative"
//                     >
//                         {description}
//                     </motion.p>

//                     {listItems && listItems.length > 0 && (
//                         <motion.ul 
//                             style={{ y: listY }}
//                             className="space-y-4 text-[32px] text-gray-600 font-urbanist relative"
//                         >
//                             {listItems.map((item, itemIndex) => (
//                                 <motion.li
//                                     key={itemIndex}
//                                     initial={{ opacity: 0, x: -40 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ 
//                                         delay: itemIndex * 0.25,
//                                         duration: 1.2,
//                                         ease: "easeInOut"
//                                     }}
//                                     className="flex items-center"
//                                 >
//                                     <motion.span 
//                                         className="mr-2 text-2xl"
//                                         animate={{ scale: [1, 1.2, 1] }}
//                                         transition={{ 
//                                             duration: 1.2, 
//                                             delay: itemIndex * 0.25 
//                                         }}
//                                     >
//                                         •
//                                     </motion.span>
//                                     {item}
//                                 </motion.li>
//                             ))}
//                         </motion.ul>
//                     )}
//                 </motion.div>
//             </div>

//             <div className="w-1/2 flex justify-center">
//                 <motion.div
//                     style={{ opacity: imageOpacity }}
//                     className="relative w-full max-w-[594px]"
//                 >
//                     <motion.img
//                         src={imageUrl}
//                         alt={title ? `${title} illustration` : 'Card illustration'}
//                         className="w-full h-[600px] object-cover rounded-[36px]"
//                         initial={{ scale: 0.9 }}
//                         animate={{ scale: 1 }}
//                         transition={{ duration: 1.4 }}
//                     />

//                     <motion.div 
//                         className="absolute inset-0 rounded-[36px]"
//                         initial={{ scale: 0.85, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 1.4, delay: 0.5 }}
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default BriefCard;

import { motion, useTransform, useSpring } from "framer-motion";

const BriefCard = ({
    title,
    description,
    imageUrl,
    listItems,
    scrollYProgress,
    index,
}) => {

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001,
    });

    // 2) Use the springed value instead of raw scrollYProgress
    const textY = useTransform(
        smoothScroll,
        [index * 0.4, (index + 1) * 0.4],
        [120, -40]
    );

    const contentOpacity = useTransform(
        smoothScroll,
        [index * 0.4, index * 0.4 + 0.1, (index + 1) * 0.4 - 0.1, (index + 1) * 0.4],
        [0, 1, 1, 0]
    );

    const imageOpacity = useTransform(
        smoothScroll,
        [
            index * 0.4,
            index * 0.4 + 0.15,
            (index + 1) * 0.4 - 0.15,
            (index + 1) * 0.4,
        ],
        [0, 1, 1, 0]
    );


    const baseTransition = {
        duration: 2.5,
        ease: "easeInOut",
    };

    return (
        <div className="absolute inset-0 flex items-center">
            {/* --- Left Text Section --- */}
            <div className="w-1/2 px-12 relative overflow-visible">
                <motion.div
                    style={{ opacity: contentOpacity, y: textY }}
                    transition={baseTransition}
                    className="relative"
                >
                    <h1 className="text-[96px] font-[600] font-instrument-sans mb-6">
                        {title}
                    </h1>
                    <p className="text-gray-600 text-[32px] max-w-xl font-urbanist mb-8">
                        {description}
                    </p>

                    {listItems && listItems.length > 0 && (
                        <ul className="space-y-4 text-[32px] text-gray-600 font-urbanist">
                            {listItems.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center">
                                    <span className="mr-2 text-2xl">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
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