import React from "react";
import { motion } from "framer-motion";
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
        tags: ["Technology","Design","Cyber Security","Business Consulting"],
    },
    {
        title: "Build",
        description:
            "Develop solutions tailored to your goals, from robust platforms to seamless integrations.",
        imageUrl: Build,
        tags: ["Mobile", "Web App","AI & Automation","Enterprise Application"]
    },
    {
        title: "Design",
        description:
            "Craft stunning, user-friendly experiences that connect with your audience.",
        imageUrl: Design,
        tags: ["Branding", "UX/UI Design","Concept Design","Product Design"]
    },
    {
        title: "Host",
        description:
            "Ensure your digital presence is reliable, fast, and secure with premium hosting solutions.",
        imageUrl: Host,
        tags: ["Web Hosting","Cloud","Server Management","AWS","Google Cloud","Azure"]
    },
    {
        title: "Market",
        description:
            "Amplify your reach with strategies that drive real results and engage your audience.",
        imageUrl: Market,
        tags: ["Digital Growth","Organic Marketing","Media Buying","Performance Marketing"]
    },
];

const SolutionPage = () => {
    return (
        <div>
            <div className="h-screen flex flex-col font-instrument-sans justify-center items-center">
                <div className="flex align-center items-center text-[140px] text-center font-semibold ">What Are We Fighting Against?</div>
                <div className="text-gray-500 text-[40px] text-center">Users not engaging with your design or project</div>
                <div className="text-gray-500 text-[38px] text-center">Let's turn that challenge into an opportunities.</div>
            </div>
        <div className="relative space-y-12 px-4 overflow-hidden">
            {cardsData.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <SolutionCard {...card} />
                </motion.div>
            ))}

        </div>
        </div>

    );
};

export default SolutionPage;
