import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import PilotSection from "../../Components/PilotCards";

import pilot1 from "../../assets/Pilot_assets/pilot_asset_1.jpeg";
import pilot2 from "../../assets/Pilot_assets/pilot_asset_2.jpeg";
import pilot3 from "../../assets/Pilot_assets/pilot_asset_3.png";
import pilot4 from "../../assets/Pilot_assets/pilot_asset_4.png";

const Pilotpage = () => {
  return (
    <div className="space-y-16">
      <h1 className="flex justify-center items-center font-instrument-sans font-semibold text-[140px] px-15">
        Book a Pilot
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ rotateY: 0 }}
          whileHover={{
            rotateY: -15,
            transition: { duration: 0.3 },
          }}
          className="perspective-1000"
        >
          <PilotSection
            title="Pilot for You"
            subtitle="Your idea or concept = our solution. "
            duration="2 weeks"
            buttonText="Book a pilot"
            onButtonClick={() => console.log("First Pilot button clicked")}
            imageSrc={pilot1}
          />
        </motion.div>

        <motion.div
          initial={{ rotateY: 0 }}
          whileHover={{
            rotateY: -15,
            transition: { duration: 0.3 },
          }}
          className="perspective-1000"
        >
          <PilotSection
            title="Pilot for Startups"
            subtitle="This service aids your tech department in boosting conversions and attracting investments."
            duration="4 weeks"
            buttonText="Book a pilot"
            onButtonClick={() => console.log("First Pilot button clicked")}
            imageSrc={pilot2}
          />
        </motion.div>

        <motion.div
          initial={{ rotateY: 0 }}
          whileHover={{
            rotateY: -15,
            transition: { duration: 0.3 },
          }}
          className="perspective-1000"
        >
          <PilotSection
            title="Pilot For SMBs"
            subtitle="Transform your tech ideas into market success. Boost conversions, attract investment."
            duration="4 weeks"
            buttonText="Book a pilot"
            onButtonClick={() => console.log("Third Pilot button clicked")}
            imageSrc={pilot3}
          />
        </motion.div>

        <motion.div
          initial={{ rotateY: 0 }}
          whileHover={{
            rotateY: -15,
            transition: { duration: 0.3 },
          }}
          className="perspective-1000"
        >
          <PilotSection
            title="Pilot for Enterprise"
            subtitle="Want to test compatibility with your future partner or need a quick solution to a crucial problem?"
            duration="6 weeks"
            buttonText="Book a pilot "
            onButtonClick={() => console.log("Second Pilot button clicked")}
            imageSrc={pilot4}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Pilotpage;
