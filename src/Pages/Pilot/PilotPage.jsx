// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import PilotSection from "../../Components/PilotCards";

// import pilot1 from "../../assets/Pilot_assets/pilot_asset_1.jpeg";
// import pilot2 from "../../assets/Pilot_assets/pilot_asset_2.jpeg";
// import pilot3 from "../../assets/Pilot_assets/pilot_asset_3.png";
// import pilot4 from "../../assets/Pilot_assets/pilot_asset_4.png";
// import { ChevronRight, ChevronLeft } from "lucide-react";

// const Pilotpage = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const pilotCards = [ <motion.button
//         className="text-black bg-white/80 p-2 rounded-full hover:bg-[#56c8dc] hover:text-white transition-colors"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() =>
//             setCurrentIndex((prev) => (prev + 1) % pilotCards.length)
//         }
//     >
//         <ChevronRight size={24} />
//     </motion.button>
//         {
//             title: "Pilot for You",
//             subtitle: "Your idea or concept = our solution.",
//             duration: "2 weeks",
//             buttonText: "Book a pilot",
//             imageSrc: pilot1,
//         },
//         {
//             title: "Pilot for Startups",
//             subtitle:
//                 "This service aids your tech department in boosting conversions and attracting investments.",
//             duration: "4 weeks",
//             buttonText: "Book a pilot",
//             imageSrc: pilot2,
//         },
//         {
//             title: "Pilot For SMBs",
//             subtitle:
//                 "Transform your tech ideas into market success. Boost conversions, attract investment.",
//             duration: "4 weeks",
//             buttonText: "Book a pilot",
//             imageSrc: pilot3,
//         },
//         {
//             title: "Pilot for Enterprise",
//             subtitle:
//                 "Want to test compatibility with your future partner or need a quick solution to a crucial problem?",
//             duration: "6 weeks",
//             buttonText: "Book a pilot",
//             imageSrc: pilot4,
//         },
//     ];

//     const cardVariants = {
//         hidden: (custom) => ({
//             rotateY: custom >= currentIndex ? 45 : -45,
//             scale: 0.8,
//             y: custom >= currentIndex ? 100 : -100,
//             opacity: 0,
//             z: -200,
//         }),
//         visible: (custom) => ({
//             rotateY: 0,
//             scale: 1 - Math.abs(custom - currentIndex) * 0.1,
//             y: (custom - currentIndex) * 50,
//             opacity: 1 - Math.abs(custom - currentIndex) * 0.2,
//             z: -Math.abs(custom - currentIndex) * 100,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//                 duration: 0.8,
//             },
//         }),
//         exit: (custom) => ({
//             rotateY: custom >= currentIndex ? -45 : 45,
//             scale: 0.2,
//             y: custom >= currentIndex ? -100 : 100,
//             opacity: 0,
//             z: -200,
//             transition: {
//                 duration: 0.5,
//             },
//         }),
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-white to-white py-0 relative overflow-hidden">
//             <div className="flex justify-center items-center font-instrument-sans text-4xl md:text-[120px] font-semibold px-4 text-center">
//                 Book a Pilot
//             </div>

//             <div className="relative h-[600px] md:h-[800px] w-full perspective-2000 mb-6">
//                 <AnimatePresence mode="wait">
//                     {pilotCards.map((card, index) => (
//                         <motion.div
//                             key={index}
//                             className="absolute inset-0 flex items-center justify-center w-full cursor-pointer"
//                             custom={index}
//                             variants={cardVariants}
//                             initial="hidden"
//                             animate="visible"
//                             exit="exit"
//                             style={{
//                                 transformStyle: "preserve-3d",
//                                 zIndex: pilotCards.length - Math.abs(currentIndex - index),
//                             }}
//                             onClick={() => setCurrentIndex(index)}
//                             whileHover={{ scale: 1.02 }}
//                         >
//                             <PilotSection
//                                 title={card.title}
//                                 subtitle={card.subtitle}
//                                 duration={card.duration}
//                                 buttonText={card.buttonText}
//                                 imageSrc={card.imageSrc}
//                                 onButtonClick={(e) => {
//                                     e.stopPropagation();
//                                     console.log(`${card.title} button clicked`);
//                                 }}
//                             />
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>

//                 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
//                     <motion.button
//                         className="text-black bg-white/80 p-2 rounded-full hover:bg-[#56c8dc] hover:text-white transition-colors"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() =>
//                             setCurrentIndex(
//                                 (prev) => (prev - 1 + pilotCards.length) % pilotCards.length
//                             )
//                         }
//                     >
//                         <ChevronLeft size={24} />
//                     </motion.button>

//                     {pilotCards.map((_, index) => (
//                         <motion.button
//                             key={index}
//                             className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#56c8dc]" : "bg-black"
//                                 }`}
//                             whileHover={{ scale: 0.7 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => setCurrentIndex(index)}
//                         />
//                     ))}

//                     <motion.button
//                         className="text-black bg-white/80 p-2 rounded-full hover:bg-[#56c8dc] hover:text-white transition-colors"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() =>
//                             setCurrentIndex((prev) => (prev + 1) % pilotCards.length)
//                         }
//                     >
//                         <ChevronRight size={24} />
//                     </motion.button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Pilotpage;

// import PilotSection from "../../Components/PilotCards";
// import { motion } from "framer-motion";

// import pilot1 from "../../assets/Pilot_assets/pilot_asset_1.jpeg";
// import pilot2 from "../../assets/Pilot_assets/pilot_asset_2.jpeg";
// import pilot3 from "../../assets/Pilot_assets/pilot_asset_3.png";
// import pilot4 from "../../assets/Pilot_assets/pilot_asset_4.png";

//
// export default function PilotPage() {
//   return (
//     <section>
//       <div className="">
//         <h1 className="flex justify-center text-center text-[120px] font-medium font-instrument-sans">
//           Book a Pilot
//         </h1>
//         <div className="min-h-screen relative">
//           <div className="flex flex-col gap-6 sticky top-0">
//             {pilotCards.map((_, index) => (
//               <PilotSection
//                 key={index}
//                 title={_.title}
//                 subtitle={_.subtitle}
//                 duration={_.duration}
//                 buttonText={_.buttonText}
//                 imageSrc={_.imageSrc}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import PilotSection from "../../Components/PilotCards";
// import pilot1 from "../../assets/Pilot_assets/pilot_asset_1.jpeg";
// import pilot2 from "../../assets/Pilot_assets/pilot_asset_2.jpeg";
// import pilot3 from "../../assets/Pilot_assets/pilot_asset_3.png";
// import pilot4 from "../../assets/Pilot_assets/pilot_asset_4.png";

//

// const Pilotpage = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     damping: 20,
//     mass: 0.5,
//     stiffness: 70
//   });

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-[400vh] bg-gradient-to-b from-white to-white relative"
//     >
//       <div className="sticky top-0 h-screen flex flex-col">
//         <div className="flex justify-center items-center font-instrument-sans text-4xl md:text-[120px] font-semibold px-4 text-center pt-10">
//           Book a Pilot
//         </div>

//         <div className="relative flex-1 w-full overflow-hidden">
//           {pilotCards.map((card, index) => {
//             const range = 1 / pilotCards.length;
//             const progress = range * index;

//             return (
//               <motion.div
//                 key={index}
//                 className="absolute inset-0 flex items-center justify-center w-full"
//                 style={{
//                   transformOrigin: "bottom",
//                   rotateX: useTransform(
//                     smoothProgress,
//                     [progress, progress + range, 1],
//                     [0, -45, -2 * index]
//                   ),
//                   y: useTransform(
//                     smoothProgress,
//                     [progress, progress + range, 1],
//                     ["0%", "-100%", `${-5 * index}%`]
//                   ),
//                   scale: useTransform(
//                     smoothProgress,
//                     [progress - range, progress, progress + range, 1],
//                     [0.85, 1, 0.85, 0.95 - (index * 0.02)]
//                   ),
//                   opacity: useTransform(
//                     smoothProgress,
//                     [progress - range/4, progress, progress + range/2, 1],
//                     [0.3, 1, 0.3, 0.8 - (index * 0.1)]
//                   ),
//                   zIndex: pilotCards.length - index,
//                 }}
//               >
//                 <PilotSection {...card} />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Pilotpage;

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import PilotSection from "../../Components/PilotCards";
import pilot1 from "../../assets/Pilot_assets/pilot_asset_1.jpeg";
import pilot2 from "../../assets/Pilot_assets/pilot_asset_2.jpeg";
import pilot3 from "../../assets/Pilot_assets/pilot_asset_3.png";
import pilot4 from "../../assets/Pilot_assets/pilot_asset_4.png";

const pilotCards = [
  {
    title: "Pilot for You",
    subtitle: "Your idea or concept = our solution.",
    duration: "2 weeks",
    buttonText: "Book a pilot",
    imageSrc: pilot1,
    onButtonClick: "https://www.lipsum.com/"
  },
  {
    title: "Pilot for Startups",
    subtitle:
      "This service aids your tech department in boosting conversions and attracting investments.",
    duration: "4 weeks",
    buttonText: "Book a pilot",
    imageSrc: pilot2,
    onButtonClick: "https://www.lipsum.com/"
  },
  {
    title: "Pilot For SMBs",
    subtitle:
      "Transform your tech ideas into market success. Boost conversions, attract investment.",
    duration: "4 weeks",
    buttonText: "Book a pilot",
    imageSrc: pilot3,
    onButtonClick: "https://www.lipsum.com/"
  },
  {
    title: "Pilot for Enterprise",
    subtitle:
      "Want to test compatibility with your future partner or need a quick solution to a crucial problem?",
    duration: "6 weeks",
    buttonText: "Book a pilot",
    imageSrc: pilot4,
    onButtonClick: "https://www.lipsum.com/"
  },
];

const Pilotpage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    mass: 0.5,
    stiffness: 70,
  });
  return (
    <div
      ref={containerRef}
      className="min-h-[400vh] bg-gradient-to-b from-white to-white relative"
    >
      <div className="sticky top-8 h-screen flex flex-col">
        <div className="flex justify-center items-center font-instrument-sans text-4xl md:text-[120px] font-semibold px-4 text-center pt-10">
          Book a Pilot
        </div>
        <div className="relative flex-1 w-full overflow-hidden">
          {pilotCards.map((card, index) => {
            const range = 1 / pilotCards.length;
            const progress = range * index;
            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center w-full"
                exit={{
                  scale: 0.1,
                }}
                initial={{
                  scale: 1
                }}
                animate={{
                  scale: 0.4
                }}
                style={{
                  transformOrigin: "50% 100%",
                  rotateX: useTransform(
                    smoothProgress,
                    [progress, progress + range],
                    [0, -60]
                  ),
                  y: useTransform(
                    smoothProgress,
                    [progress, progress + range],
                    ["0%", "-120%"]
                  ),
                  scale: useTransform(
                    smoothProgress,
                    [progress - 0.5, progress - 0.2, progress, progress + 0.3],
                    [0.5, 0.7, 1, 1.4]
                  ),
                  opacity: useTransform(
                    smoothProgress,
                    [progress - 0.5, progress - 0.3, progress, progress + 0.2],
                    [0, 0.5, 1, 0]
                  ),
                  zIndex: pilotCards.length - index,
                }}
              >
                <PilotSection {...card} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Pilotpage;
