import React from 'react';
import PilotSection from "../../Components/PilotCards"
import pilot1 from '../../assets/Pilot_assets/pilot_asset_1.jpeg'
import pilot2 from '../../assets/Pilot_assets/pilot_asset_2.jpeg'
import pilot3 from '../../assets/Pilot_assets/pilot_asset_3.png'
import pilot4 from '../../assets/Pilot_assets/pilot_asset_4.png'
const Pilotpage = () => {
    return (
        <div className="space-y-16">
            <h1 className='h-screen flex justify-center items-center font-instrument-sans font-semibold text-[140px] px-15'>Book a Pilot</h1>

            <PilotSection
                title="Pilot for You"
                subtitle="Your idea or concept = our solution. "
                duration="2 weeks"
                buttonText="Book a pilot"
                onButtonClick={() => console.log('First Pilot button clicked')}
                imageSrc={pilot1} 
            />

            <PilotSection
                title="Pilot for Startups"
                subtitle="This service aids your tech department in boosting conversions and attracting investments."
                duration="4 weeks"
                buttonText="Book a pilot"
                onButtonClick={() => console.log('First Pilot button clicked')}
                imageSrc={pilot2} 
            />

            <PilotSection
                title="Pilot For SMBs"
                subtitle="Transform your tech ideas into market success. Boost conversions, attract investment."
                duration="4 weeks"
                buttonText="Book a pilot"
                onButtonClick={() => console.log('Third Pilot button clicked')}
                imageSrc={pilot3} // Another image
            />
            <PilotSection
                title="Pilot for Enterprise"
                subtitle="Want to test compatibility with your future partner or need a quick solution to a crucial problem?"
                duration="6 weeks"
                buttonText="Book a pilot "
                onButtonClick={() => console.log('Second Pilot button clicked')}
                imageSrc={pilot4} // Using a different image
            />
        </div>
    );
};

export default Pilotpage;