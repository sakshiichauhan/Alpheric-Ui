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
        <section className="min-h-screen w-full flex items-center justify-start px-[120px]">
            <motion.div
                key={animationKey}
                className="w-full max-w-4xl font-instrument-sans leading-tight"
            >
                <h3 className="text-[40px]">Shall we chat?</h3>

                <h1 className="text-[64px] font-bold mb-30 underline-offset-8 decoration-3 transition relative inline-block group">
                    <span>hello@alpheric.com</span>
                    <span
                        className="absolute left-0 bottom-[-2px] h-[3px] w-full bg-current
                        scale-x-0 origin-left transition-transform duration-300
                        group-hover:scale-x-100"
                    />
                </h1>

                <div className="flex items-center gap-2 group hover:underline underline-offset-8 decoration-4 transition font-instrument-sans font-medium ">
                    <span className="text-[140px]">Let’s</span>

                    <motion.p
                        key={animationKey + "-image"}
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        animate={{
                            clipPath: "inset(0 0 0 0)",
                            transition: { duration: 1.2, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                    >
                        <img
                            className="h-[125px] w-[160px] bg-[#56c8dc] rounded-full"
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
                        className="text-[140px] overflow-hidden"
                    >
                        talk
                    </motion.span>
                    <button className="ml-4 px-8 py-2 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-black">
                        <MoveRight
                            size={100}
                            className="text-black transition-colors duration-300 group-hover:text-white"
                        />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
