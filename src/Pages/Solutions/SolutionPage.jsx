import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SolutionCard from "../../Components/SolutionCard";

// Images imports
import Business from "../../assets/Solutions/Business.jpg";
import Consult from "../../assets/Solutions/Consult.jpg";
import Build from "../../assets/Solutions/Build.jpg";
import Design from "../../assets/Solutions/Design.jpg";
import Host from "../../assets/Solutions/Host.jpg";
import Market from "../../assets/Solutions/Market.jpg";

const cardsData = [
    {
        title: "Your Business, Simplified",
        description:
            "We're here to handle it all so you can focus on what matters most.",
        imageUrl: Business,
        tags: [],
    },
    {
        title: "Consult",
        description:
            "Gain clarity with expert advice on strategy, business growth and scaling solutions.",
        imageUrl: Consult,
        tags: ["Technology", "Design", "Cyber Security", "Business Consulting"],
    },
    {
        title: "Build",
        description:
            "Develop solutions tailored to your goals, from robust platforms to seamless integrations.",
        imageUrl: Build,
        tags: ["Mobile", "Web App", "AI & Automation", "Enterprise Application"],
    },
    {
        title: "Design",
        description:
            "Craft stunning, user-friendly experiences that connect with your audience.",
        imageUrl: Design,
        tags: ["Branding", "UX/UI Design", "Concept Design", "Product Design"],
    },
    {
        title: "Host",
        description:
            "Ensure your digital presence is reliable, fast, and secure with premium hosting solutions.",
        imageUrl: Host,
        tags: [
            "Web Hosting",
            "Cloud",
            "Server Management",
            "AWS",
            "Google Cloud",
            "Azure",
        ],
    },
    {
        title: "Market",
        description:
            "Amplify your reach with strategies that drive real results and engage your audience.",
        imageUrl: Market,
        tags: [
            "Digital Growth",
            "Organic Marketing",
            "Media Buying",
            "Performance Marketing",
        ],
    },
];

const SolutionPage = () => {
    const containerRef = useRef(null);
    const heroSectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const { scrollYProgress: heroScrollProgress } = useScroll({
        target: heroSectionRef,
        offset: ["start center", "end start"],
    });

    const translateY = useTransform(heroScrollProgress, [0, 1], [0, -300]);
    const scale = useTransform(heroScrollProgress, [0, 1], [1, 0.5]);

    const totalCards = cardsData.length;

    return (
        <div>
            <section
                ref={heroSectionRef}
                className="h-screen flex flex-col justify-center items-center font-instrument-sans px-4"
            >
                <motion.div
                    initial={{ scale: 0.55, x: 0 }}
                    animate={{ y: -100 }}
                    transition={{ ease: "easeIn" }}
                    style={{ translateY, scale }}
                    className="flex flex-col items-center"
                >
                    <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px] text-center font-semibold leading-tight">
                        What Are We
                        <br /> Fighting Against?
                    </div>
                    <div className="text-gray-500 text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px] text-center mt-4">
                        Users not engaging with your design or project
                    </div>
                    <div className="text-gray-500 text-[16px] sm:text-[20px] md:text-[30px] lg:text-[38px] text-center mt-2">
                        Let's turn that challenge into opportunities.
                    </div>
                </motion.div>
            </section>

            <div ref={containerRef} className="relative h-[600vh] font-instrument-sans">
                <div className="container hidden">
                        {cardsData.map((_,i) => (
                            <div key={i} className="flex flex-col gap-2 m-4">
                                <div className="text-4xl ">{_.title}</div>
                                <div className="text-xl">{_.description}</div>
                                <div className="">{_.tags}</div>
                                <img className="rounded-4xl m-2 w-70 h-auto" src={_.imageUrl} />
                            </div>
                        ))}
                </div>
                <div className="flex sticky top-5 h-screen items-center overflow-hidden">
                    <div className="relative w-full max-w-7xl mx-auto">
                        {cardsData.map((card, index) => (
                            <SolutionCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                imageUrl={card.imageUrl}
                                tags={card.tags}
                                scrollYProgress={scrollYProgress}
                                index={index}
                                totalCards={totalCards}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionPage;
