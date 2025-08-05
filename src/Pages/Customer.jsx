// import Segment from "../assets/Ticker/Segment.svg"
// import ShutterFrame from "../assets/Ticker/Shutterframe.svg"
// import Sisyphus from "../assets/Ticker/Sisyphus.svg"
// import Solaris from "../assets/Ticker/Solaris.svg"
// import Sonorous from "../assets/Ticker/Sonorous.svg"
// import Spherule from "../assets/Ticker/Spherule.svg"
// import Stack3dLab from "../assets/Ticker/Stack3d.svg"
// import Visionwork from "../assets/Ticker/Visionwork.svg"
// import Voxel_Labs from "../assets/Ticker/VoxelLabs.svg"
// import Warpspeed from "../assets/Ticker/Warpspeed.svg"
// import Watchtower from "../assets/Ticker/Watchtower.svg"
// import Wildcrafted from "../assets/Ticker/Wildcrafted.svg"

// const Customer = () => {
//     return (
//         <section className="bg-yellow-400 py-20">
//             <h1 className="flex justify-center items-center text-4xl font-bold">1B+ requests tracked for users like...</h1>
//             <div className="border-2 border-black w-full h-[50px] rotate-3 flex bg-white">
//                 <img src={Segment} />
//                 <img src={ShutterFrame} />
//                 <img src={Sisyphus} />
//                 <img src={Solaris} />
//                 <img src={Sonorous} />
//                 <img src={Spherule} />
//                 <img src={Stack3dLab} />
//                 <img src={Visionwork} />
//                 <img src={Voxel_Labs} />
//                 <img src={Warpspeed} />
//                 <img src={Watchtower} />
//                 <img src={Wildcrafted} />

//             </div>
//             <div className="border-2 border-black w-full h-[50px] -rotate-3 flex bg-white">
//                 <img src={Segment} />
//                 <img src={ShutterFrame} />
//                 <img src={Sisyphus} />
//                 <img src={Solaris} />
//                 <img src={Sonorous} />
//                 <img src={Spherule} />
//                 <img src={Stack3dLab} />
//                 <img src={Visionwork} />
//                 <img src={Voxel_Labs} />
//                 <img src={Warpspeed} />
//                 <img src={Watchtower} />
//                 <img src={Wildcrafted} />
//             </div>
//         </section>
//     )
// }
// export default Customer;

import React, { useEffect, useRef, useState } from 'react';

const Customers = () => {
    const bubblesRef = useRef(null);
    const [expandedCompany, setExpandedCompany] = useState(null);
    const lastScrollY = useRef(0);
    const [activeSection, setActiveSection] = useState('visibility');

    // Extended companies data with more details for expanded view
    const companies = [
        {
            id: 1,
            name: 'ADP',
            logo: 'https://logo.clearbit.com/adp.com',
            description: 'Reduced cyber risk exposure by 35% within first 6 months',
            category: 'Financial Services'
        },
        {
            id: 2,
            name: 'Saks Fifth Avenue',
            logo: 'https://logo.clearbit.com/saksfifthavenue.com',
            description: 'Improved security posture across 200+ retail locations',
            category: 'Retail'
        },
        { id: 4, name: 'Expedia', logo: 'https://logo.clearbit.com/expedia.com' },
        { id: 5, name: 'Molina Healthcare', logo: 'https://logo.clearbit.com/molinahealthcare.com' },
        { id: 6, name: 'BT', logo: 'https://logo.clearbit.com/bt.com' },
        { id: 7, name: 'Blue Cross', logo: 'https://logo.clearbit.com/bcbs.com' },
        { id: 8, name: 'Dell', logo: 'https://logo.clearbit.com/dell.com' },
        {
            id: 9,
            name: 'Canva',
            logo: 'https://logo.clearbit.com/canva.com',
            description: 'Streamlined security operations with automated risk assessment',
            category: 'Technology'
        },
        {
            id: 10,
            name: 'Spotify',
            logo: 'https://logo.clearbit.com/spotify.com',
            description: 'Enhanced visibility across cloud infrastructure',
            category: 'Entertainment'
        },
        {
            id: 11,
            name: 'Airbnb',
            logo: 'https://logo.clearbit.com/airbnb.com',
            description: 'Reduced incident response time by 60%',
            category: 'Travel'
        },
        { id: 12, name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
        { id: 13, name: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com' },
        { id: 14, name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com' },
        { id: 15, name: 'Oracle', logo: 'https://logo.clearbit.com/oracle.com' },
        { id: 16, name: 'Intel', logo: 'https://logo.clearbit.com/intel.com' },
        { id: 17, name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
        { id: 18, name: 'Cisco', logo: 'https://logo.clearbit.com/cisco.com' },
        { id: 19, name: 'VMware', logo: 'https://logo.clearbit.com/vmware.com' },
        { id: 20, name: 'SAP', logo: 'https://logo.clearbit.com/sap.com' },
        {
            id: 21,
            name: 'ADP',
            logo: 'https://logo.clearbit.com/adp.com',
            description: 'Reduced cyber risk exposure by 35% within first 6 months',
            category: 'Financial Services'
        },
        {
            id: 22,
            name: 'Saks Fifth Avenue',
            logo: 'https://logo.clearbit.com/saksfifthavenue.com',
            description: 'Improved security posture across 200+ retail locations',
            category: 'Retail'
        },
        { id: 24, name: 'Expedia', logo: 'https://logo.clearbit.com/expedia.com' },
        { id: 25, name: 'Molina Healthcare', logo: 'https://logo.clearbit.com/molinahealthcare.com' },
        { id: 26, name: 'BT', logo: 'https://logo.clearbit.com/bt.com' },
        { id: 27, name: 'Blue Cross', logo: 'https://logo.clearbit.com/bcbs.com' },
        { id: 28, name: 'Dell', logo: 'https://logo.clearbit.com/dell.com' },
        {
            id: 29,
            name: 'Canva',
            logo: 'https://logo.clearbit.com/canva.com',
            description: 'Streamlined security operations with automated risk assessment',
            category: 'Technology'
        },
        {
            id: 30,
            name: 'Spotify',
            logo: 'https://logo.clearbit.com/spotify.com',
            description: 'Enhanced visibility across cloud infrastructure',
            category: 'Entertainment'
        },
        {
            id: 31,
            name: 'Airbnb',
            logo: 'https://logo.clearbit.com/airbnb.com',
            description: 'Reduced incident response time by 60%',
            category: 'Travel'
        },
        { id: 32, name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
        { id: 33, name: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com' },
        { id: 34, name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com' },
        { id: 35, name: 'Oracle', logo: 'https://logo.clearbit.com/oracle.com' },
        { id: 36, name: 'Intel', logo: 'https://logo.clearbit.com/intel.com' },
        { id: 37, name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
        { id: 38, name: 'Cisco', logo: 'https://logo.clearbit.com/cisco.com' },
        { id: 39, name: 'VMware', logo: 'https://logo.clearbit.com/vmware.com' },
        { id: 40, name: 'SAP', logo: 'https://logo.clearbit.com/sap.com' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!bubblesRef.current) return;

            const currentScrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Remove nav visibility update
            lastScrollY.current = currentScrollY;

            // Improved section detection with better thresholds
            const sections = document.querySelectorAll('section[id]');
            let currentSection = 'visibility'; // Default to first section

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                // Adjusted threshold to better detect active section
                if (rect.top <= viewportHeight * 0.7 && rect.bottom >= viewportHeight * 0.3) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);

            const bubbles = bubblesRef.current.querySelectorAll('.company-bubble');
            bubbles.forEach((bubble, index) => {
                const rect = bubble.getBoundingClientRect();
                const bubbleCenter = rect.top + rect.height / 2;
                const distanceFromCenter = Math.abs(viewportHeight / 2 - bubbleCenter);
                const maxDistance = viewportHeight / 2;

                // Adjusted animation values for smoother transitions
                const opacity = 1 - (distanceFromCenter / maxDistance) * 0.5; // Reduced opacity change
                const scaleModifier = 1 - (distanceFromCenter / maxDistance) * 0.2; // Reduced scale effect
                const finalScale = Math.min(scaleModifier, 1.2);

                // Reduced movement values for more subtle effects
                const rotation = Math.sin(currentScrollY * 0.0005 + index * 0.5) * 3;
                const horizontalShift = Math.sin(currentScrollY * 0.001 + index * 0.7) * 5;

                bubble.style.transform = `
                scale(${finalScale}) 
                translateY(${-currentScrollY * 0.02}px) 
                translateX(${horizontalShift}px)
                rotate(${rotation}deg)
                `;
                bubble.style.opacity = Math.max(0.6, opacity);
                bubble.style.zIndex = Math.floor(opacity * 10);
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        // Add initial animation for bubbles
        const bubbles = bubblesRef.current.querySelectorAll('.company-bubble');
        bubbles.forEach((bubble, index) => {
            setTimeout(() => {
                bubble.style.opacity = '1';
                bubble.style.transform = 'scale(1)';
            }, index * 100);
        });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* Remove entire nav element */}

            <div className="flex flex-col md:flex-row min-h-screen bg-white">
                {/* Update pt-16 to p-0 since we removed the nav */}
                <div className="w-full md:w-[45%] p-6 md:p-12 flex flex-col justify-start border-r border-gray-100 overflow-y-auto">
                    <h1 className="text-5xl md:text-[80px] text-gray-800 leading-tight animate-fade-in font-semibold font-instrument-sans ">
                        Customer
                    </h1>

                    <div className="relative mt-12 pb-32"> {/* Added bottom padding */}
                        <div className="absolute left-0 w-[2px] h-full bg-gradient-to-b from-gray-200 to-transparent"></div>

                        {/* Update section spacing and height handling */}
                        <div className="space-y-12"> {/* Increased spacing between sections */}
                            <section id="visibility"
                                className={`pl-8 relative transition-all duration-500 transform ${activeSection === 'visibility'
                                    ? 'opacity-100'
                                    : 'opacity-50'
                                    }`}
                            >
                                <div className={`absolute left-0 w-[2px] h-full bg-blue-500 transform origin-top transition-transform duration-500 ${activeSection === 'visibility' ? 'scale-y-100' : 'scale-y-0'
                                    }`}></div>
                                <h2 className={`font-instrument-sans text-[32px] font-medium mb-6 transition-colors duration-500 ${activeSection === 'visibility' ? 'text-gray-800' : 'text-gray-400'}`}>
                                    <span className='items-center text-[20px]'>01 </span>Visibility &<br />Communication
                                </h2>
                                <ul className={`space-y-4 text-gray-700 transition-all duration-500 origin-top ${activeSection === 'visibility'
                                    ? 'max-h-[300px] opacity-100 scale-y-100 mb-8' // Increased max-height
                                    : 'max-h-0 opacity-0 scale-y-0 mb-0'
                                    }`}>
                                    <li className='flex items-center'>
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3">
                                            Take the asssesment and get your career matches,<br /> personality archetype, and more along the way
                                        </div>
                                    </li>
                                </ul>
                            </section>

                            <section id="operational"
                                className={`pl-8 relative transition-all duration-500 transform ${activeSection === 'operational'
                                    ? 'opacity-100'
                                    : 'opacity-50'
                                    }`}
                            >
                                <div className={`absolute left-0 w-[2px] h-full bg-green-500 transform origin-top transition-transform duration-500 ${activeSection === 'operational' ? 'scale-y-100' : 'scale-y-0'
                                    }`}></div>
                                <h2 className={` font-instrument-sans text-[32px] font-medium mb-6 transition-colors duration-500 ${activeSection === 'operational' ? 'text-gray-800' : 'text-gray-400'
                                    }`}>
                                    <span>02 </span>Operational<br />Prioritization
                                </h2>
                                <ul className={`space-y-4 text-gray-700 transition-all duration-500 origin-top ${activeSection === 'operational'
                                    ? 'max-h-[300px] opacity-100 scale-y-100 mb-8' // Increased max-height
                                    : 'max-h-0 opacity-0 scale-y-0 mb-0'
                                    }`}>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 text-[18px] font-instrument-sans"></div>
                                        <span>Find out what makes you stand apart from others<br /> and why certain careers are great fits for you</span>
                                    </li>
                                </ul>
                            </section>

                            <section id="justification"
                                className={`pl-8 relative transition-all duration-500 transform ${activeSection === 'justification'
                                    ? 'opacity-100'
                                    : 'opacity-50'
                                    }`}
                            >
                                <div className={`absolute left-0 w-[2px] h-full bg-purple-500 transform origin-top transition-transform duration-500 ${activeSection === 'justification' ? 'scale-y-100' : 'scale-y-0'
                                    }`}></div>
                                <h2 className={`font-instrument-sans text-[32px] font-medium mb-6 transition-colors duration-500 ${activeSection === 'justification' ? 'text-gray-800' : 'text-gray-400'
                                    }`}>
                                    <span>03 </span>Justification &<br />Planning
                                </h2>
                                <ul className={`space-y-4 text-gray-700 transition-all duration-500 origin-top ${activeSection === 'justification'
                                    ? 'max-h-[300px] opacity-100 scale-y-100 mb-8' // Increased max-height
                                    : 'max-h-0 opacity-0 scale-y-0 mb-0'
                                    }`}>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 text-[18px] font-instrument-sans"></div>
                                        <span>Find all the information you need to know about your<br /> dream career. Then make a plan to get it.</span>
                                    </li>

                                </ul>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Reduced padding and increased width */}
                <div
                    ref={bubblesRef}
                    className="w-full md:w-[55%] p-6 md:p-12 relative min-h-screen"
                >
                    <div className="sticky top-24 w-full h-[calc(100vh-6rem)] flex items-center justify-center overflow-visible">
                        <div className="relative w-full h-[1000px]"> {/* Increased height from 800px to 1000px */}
                            {companies.map((company, index) => {
                                // Updated positions with better vertical distribution
                                const positions = [
                                    // Row 1 (4 bubbles)
                                    { top: '21%', left: '15%', size: 'xs', delay: 0 },
                                    { top: '18%', left: '30%', size: 'lg', delay: 0.1 },
                                    { top: '19%', left: '55%', size: 'sm', delay: 0.2 },
                                    { top: '21%', left: '75%', size: 'xs', delay: 0.3 },

                                    // Row 2 (4 bubbles)
                                    { top: '31%', left: '5%', size: 'xs', delay: 0.1 },
                                    { top: '28%', left: '20%', size: 'lg', delay: 0.1 },
                                    { top: '28%', left: '45%', size: 'lg', delay: 0.2 },
                                    { top: '29%', left: '65%', size: 'sm', delay: 0.3 },

                                    // Row 3 (4 bubbles)
                                    { top: '40%', left: '15%', size: 'sm', delay: 0.3 },
                                    { top: '39%', left: '32%', size: 'lg', delay: 0.4 },
                                    { top: '39%', left: '55%', size: 'lg', delay: 0.5 },
                                    { top: '41%', left: '80%', size: 'xs', delay: 0.6 },

                                    // Row 4 (4 bubbles)
                                    { top: '51%', left: '6%', size: 'sm', delay: 0.6 },
                                    { top: '50%', left: '23%', size: 'lg', delay: 0.7 },
                                    { top: '50%', left: '45%', size: 'lg', delay: 0.8 },
                                    { top: '52%', left: '70%', size: 'xs', delay: 0.9 },

                                    // Row 5 (4 bubbles)
                                    { top: '63%', left: '15%', size: 'xs', delay: 0 },
                                    { top: '60%', left: '30%', size: 'lg', delay: 0.1 },
                                    { top: '61%', left: '55%', size: 'sm', delay: 0.2 },
                                    { top: '63%', left: '75%', size: 'xs', delay: 0.3 },

                                    // Row 6 (4 bubbles)
                                    { top: '73%', left: '5%', size: 'xs', delay: 0.1 },
                                    { top: '70%', left: '20%', size: 'lg', delay: 0.1 },
                                    { top: '70%', left: '45%', size: 'lg', delay: 0.2 },
                                    { top: '71%', left: '65%', size: 'sm', delay: 0.3 },

                                    // Row 7 (4 bubbles)
                                    { top: '82%', left: '15%', size: 'sm', delay: 0.3 },
                                    { top: '81%', left: '32%', size: 'lg', delay: 0.4 },
                                    { top: '81%', left: '55%', size: 'lg', delay: 0.5 },
                                    { top: '83%', left: '80%', size: 'xs', delay: 0.6 },

                                    // Row 8 (4 bubbles)
                                    { top: '93%', left: '6%', size: 'sm', delay: 0.6 },
                                    { top: '92%', left: '23%', size: 'lg', delay: 0.7 },
                                    { top: '92%', left: '45%', size: 'lg', delay: 0.8 },
                                    { top: '94%', left: '70%', size: 'xs', delay: 0.9 },
                                ];

                                const position = positions[index] || positions[0];
                                const sizeClasses = {
                                    xs: 'w-8 h-8 md:w-12 md:h-12',     // Small bubbles
                                    sm: 'w-18 h-18 md:w-20 md:h-20',     // Medium bubbles
                                    lg: 'w-24 h-24 md:w-26 md:h-26',     // Large bubbles
                                };

                                return (
                                    <div
                                        key={company.id}
                                        className={`company-bubble absolute bg-white 
                                            rounded-full shadow-lg border border-gray-100
                                            flex items-center justify-center p-3 
                                            transition-all duration-700 ease-in-out cursor-pointer 
                                            hover:shadow-xl hover:border-opacity-80
                                            ${sizeClasses[position.size]}
                                            ${expandedCompany === company.id ? 'z-50 scale-150' : 'hover:scale-110'}`}
                                        style={{
                                            top: position.top,
                                            left: position.left,
                                            opacity: 0,
                                            transform: 'scale(0.8)',
                                            animation: `fadeIn 0.8s ease-out ${position.delay}s forwards`,
                                            marginTop: position.size === 'xs' ? '6px' : position.size === 'sm' ? '2px' : '0px',
                                        }}
                                        onClick={() => setExpandedCompany(
                                            expandedCompany === company.id ? null : company.id
                                        )}
                                    >
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="max-w-[70%] max-h-[70%] object-contain filter drop-shadow-sm"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = `https://via.placeholder.com/100?text=${company.name.charAt(0)}`;
                                            }}
                                        />

                                        {/* Enhanced Expanded Content */}
                                        {expandedCompany === company.id && (
                                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setExpandedCompany(null);
                                                }}>
                                                <div className="bg-white rounded-xl shadow-2xl p-8 w-11/12 max-w-md m-4 transform origin-center"
                                                    onClick={(e) => e.stopPropagation()}>
                                                    <div className="flex items-center mb-6">
                                                        <img
                                                            src={company.logo}
                                                            alt={company.name}
                                                            className="w-16 h-16 object-contain mr-4 rounded-lg shadow-sm"
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = `https://via.placeholder.com/100?text=${company.name.charAt(0)}`;
                                                            }}
                                                        />
                                                        <div>
                                                            <h3 className="text-2xl font-semibold text-gray-800">{company.name}</h3>
                                                            <p className="text-sm text-gray-500">{company.category}</p>
                                                        </div>
                                                    </div>

                                                    <div className="mb-6">
                                                        <h4 className="text-lg font-medium text-gray-700 mb-2">Success Story</h4>
                                                        <p className="text-gray-600">{company.description}</p>
                                                    </div>

                                                    <div className="mb-6">
                                                        <h4 className="text-lg font-medium text-gray-700 mb-2">Key Outcomes</h4>
                                                        <ul className="space-y-2">
                                                            <li className="flex items-start">
                                                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="text-gray-600">Improved security posture</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="text-gray-600">Reduced operational costs</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="text-gray-600">Enhanced compliance reporting</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <button
                                                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                                        onClick={() => setExpandedCompany(null)}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add CSS animations */}
            <style jsx>{`
            @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
            }
            
            .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
            }
        `}</style>
        </div>
    );
};

export default Customers;