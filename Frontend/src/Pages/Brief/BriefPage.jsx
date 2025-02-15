import React from 'react';
import { motion } from "framer-motion";
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
      listItems: ["Budget", "Team Size", "timeline"],
    },
    {
      title: "Contract",
      description: "We coordinate all necessary documentation from both sides before the project starts for seamless collaboration",
      imageUrl: Contract,
      listItems: ["Invoice and contract issuance", "Making deposit", "Start project"],
    },
  ];
  
  const BriefPage = () => {
    return (
      <motion.div
        className="space-y-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: 'easeOut' },
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BriefCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    );
  };
  
  export default BriefPage;