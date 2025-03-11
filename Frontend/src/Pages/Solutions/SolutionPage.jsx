import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
        tags: ["Mobile", "Web App", "AI & Automation", "Enterprise Application"]
    },
    {
        title: "Design",
        description:
            "Craft stunning, user-friendly experiences that connect with your audience.",
        imageUrl: Design,
        tags: ["Branding", "UX/UI Design", "Concept Design", "Product Design"]
    },
    {
        title: "Host",
        description:
            "Ensure your digital presence is reliable, fast, and secure with premium hosting solutions.",
        imageUrl: Host,
        tags: ["Web Hosting", "Cloud", "Server Management", "AWS", "Google Cloud", "Azure"]
    },
    {
        title: "Market",
        description:
            "Amplify your reach with strategies that drive real results and engage your audience.",
        imageUrl: Market,
        tags: ["Digital Growth", "Organic Marketing", "Media Buying", "Performance Marketing"]
    },
];

const SolutionPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const totalCards = cardsData.length;

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="h-screen flex flex-col justify-center items-center font-instrument-sans"
            >
                <div className="text-[80px] md:text-[140px] text-center font-semibold">
                    What Are We Fighting Against?
                </div>
                <div className="text-gray-500 text-[24px] md:text-[40px] text-center">
                    Users not engaging with your design or project
                </div>
                <div className="text-gray-500 text-[22px] md:text-[38px] text-center">
                    Let's turn that challenge into opportunities.
                </div>
            </motion.div>

            <div ref={containerRef} className="relative h-[600vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
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