import React, { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import girl from "../assets/girls.png";
import { motion } from "framer-motion";

const Contact = () => {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        setAnimationKey(Math.random());
    }, []);

    return (
        <section className=" min-h-[700px] lg:min-h-screen  w-full flex items-center justify-start px-4 sm:px-8 md:px-16 lg:px-24">
            <motion.div
                key={animationKey}
                className="w-full max-w-4xl font-instrument-sans leading-tight"
            >
                <h3 className="text-base sm:text-xl md:text-2xl lg:text-4xl">Shall we chat?</h3>

                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 underline-offset-8 decoration-3 transition relative inline-block group">
                    <span>hello@alpheric.com</span>
                    <span
                        className="absolute left-0 bottom-[-2px] h-[3px] w-full bg-current
                        scale-x-0 origin-left transition-transform duration-300
                        group-hover:scale-x-100"
                    />
                </h1>

                <div className="flex flex-row md:items-center gap-1 sm:gap-2 group hover:underline underline-offset-8 decoration-4 transition font-instrument-sans font-medium">
                    <span className="flex items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Let's</span>

                    <motion.p
                        key={animationKey + "-image"}
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{
                            clipPath: "inset(0 0 0 0)",
                            transition: { duration: 1.2, ease: "easeInOut" },
                        }}
                        className="overflow-hidden my-2 sm:my-0"
                    >
                        <img
                            className="h-16 w-20 sm:h-20 sm:w-24 md:h-24 md:w-32 lg:h-32 lg:w-40 bg-[#56c8dc] rounded-full"
                            src={girl}
                            alt="Girl"
                        />
                    </motion.p>

                    <motion.span
                        key={animationKey + "-talk"}
                        initial={{ x: -100 }}
                        animate={{
                            x: 0,
                            transition: {
                                delay: 0.4,
                                duration: 1.2,
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                            },
                        }}
                        className="flex items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl overflow-hidden"
                    >
                        talk
                    </motion.span>
                    <button className="mt-2 sm:mt-0 sm:ml-2 md:ml-4 px-4 py-1 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-black">
                        <MoveRight
                            size={48}
                            className="w-12 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-black transition-colors duration-300 group-hover:text-white"
                        />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;