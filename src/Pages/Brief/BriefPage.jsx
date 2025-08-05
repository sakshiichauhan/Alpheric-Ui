import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import BriefCard from "../../Components/BriefCard"
import Brief from "../../assets/Brief/Brief.png";
import Proposal from '../../assets/Brief/Proposal.jpg';
import Contract from '../../assets/Brief/Contract.jpg';

const cardsData = [
    {
        title: "Brief",
        description: "You will get to know our team while we dive into project details for effective communication",
        imageUrl: Brief,
        listItems: ["Our questionnaire", "Introductory call", "Project documentation"],
    },
    {
        title: "Proposal",
        description: "You'll receive a detailed proposal with project goals and timeline to foster mutual understanding",
        imageUrl: Proposal,
        listItems: ["Budget", "Team Size", "Timeline"],
    },
    {
        title: "Contract",
        description: "We coordinate all necessary documentation from both sides before the project starts for seamless collaboration",
        imageUrl: Contract,
        listItems: ["Invoice and contract issuance", "Making deposit", "Start project"],
    },
];

const BriefPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    return (
        <div>
            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <div className="relative w-full max-w-7xl mx-auto">
                        {cardsData.map((card, index) => (
                            <BriefCard
                                key={index}
                                {...card}
                                scrollYProgress={scrollYProgress}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BriefPage;