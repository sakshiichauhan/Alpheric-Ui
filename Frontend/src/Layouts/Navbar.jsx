import React, { useState } from 'react';
import Alphericlogo from "../assets/Homepage/alpheric-icon.png";
import {ChevronDown} from "lucide-react"

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <div className="fixed top-0 left-0 w-full flex justify-evenly font-urbanist px-6 py-4 m-1 bg-transparent backdrop-blur-md z-50">
            <div className='relative z-10 right-12'>
                <img src={Alphericlogo} alt="logo" className='w-[200px] h-[60px]' />
            </div>

            <div className="flex items-center gap-6 border-1 border-white rounded-full px-4 py-2 text-lg  backdrop-blur-lg mx-5 leading-tighter">
                <a className='flex items-center' href="#"  onClick={() => setActiveNav()}>Consult<ChevronDown size={15} /></a>
                <a href="#about" onClick={() => setActiveNav()}>Build</a>
                <a href="#design" onClick={() => setActiveNav()}>Design</a>
                <a href="#host" onClick={() => setActiveNav()}>Host</a>
                <a href="#secure" onClick={() => setActiveNav()}>Secure</a>
                <a href="#market" onClick={() => setActiveNav()}>Market</a>
                <a href="#support" onClick={() => setActiveNav()}>Support</a>
                <a href="#services" className='flex items-center' onClick={() => setActiveNav()}>Services <ChevronDown size={15} /></a>
                <a href="#hire" className='flex items-center' onClick={() => setActiveNav()}>Hire <ChevronDown size={15} /></a>
                <a href="#joinus" onClick={() => setActiveNav()}>Join Us</a>
                <a href="#action" onClick={() => setActiveNav()}>Action</a>
                <a href="#insights" onClick={() => setActiveNav()}>Insights</a>
            </div>
            <button className="px-6 py-4 text-xl rounded-[73px] hover:bg-[#56c8dc] hover:text-white bg-white">
                Sign Up
            </button>
        </div>
    );
}

export default Navbar;

// import React, { useState } from "react";
// import Alphericlogo from "../assets/Homepage/alpheric-icon.png";
// import { ChevronDown, Menu, X } from "lucide-react";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="fixed top-0 left-0 w-full flex items-center justify-between font-urbanist px-6 py-4 bg-transparent backdrop-blur-md z-50">
//             {/* Logo */}
//             <div className="relative z-10">
//                 <img src={Alphericlogo} alt="logo" className="w-[150px] h-[50px] md:w-[180px] md:h-[55px]" />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-6 border border-white rounded-full px-4 py-2 text-lg backdrop-blur-lg mx-5">
//                 <a className="flex items-center" href="#">Consult <ChevronDown size={15} /></a>
//                 <a href="#about">Build</a>
//                 <a href="#design">Design</a>
//                 <a href="#host">Host</a>
//                 <a href="#secure">Secure</a>
//                 <a href="#market">Market</a>
//                 <a href="#support">Support</a>
//                 <a href="#services" className="flex items-center">Services <ChevronDown size={15} /></a>
//                 <a href="#hire" className="flex items-center">Hire <ChevronDown size={15} /></a>
//                 <a href="#joinus">Join Us</a>
//                 <a href="#action">Action</a>
//                 <a href="#insights">Insights</a>
//             </div>

//             {/* Desktop Sign-Up Button (Hidden on Mobile & Tablet) */}
//             <button className="hidden lg:block px-6 py-3 text-lg rounded-full bg-black text-white hover:bg-[#56c8dc]">
//                 Sign Up
//             </button>

//             {/* Mobile & Tablet Menu Button */}
//             <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-700 focus:outline-none">
//                 {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
//             </button>

//             {/* Mobile & Tablet Menu */}
//             <div className={`fixed top-0 right-0 w-4/5 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 p-6 
//           ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
//                 <button onClick={toggleMenu} className="absolute top-5 right-5">
//                     <X size={30} />
//                 </button>
//                 <div className="flex flex-col items-start gap-6 mt-16 text-lg">
//                     <a href="#" onClick={toggleMenu}>Consult</a>
//                     <a href="#about" onClick={toggleMenu}>Build</a>
//                     <a href="#design" onClick={toggleMenu}>Design</a>
//                     <a href="#host" onClick={toggleMenu}>Host</a>
//                     <a href="#secure" onClick={toggleMenu}>Secure</a>
//                     <a href="#market" onClick={toggleMenu}>Market</a>
//                     <a href="#support" onClick={toggleMenu}>Support</a>
//                     <a href="#services" onClick={toggleMenu}>Services</a>
//                     <a href="#hire" onClick={toggleMenu}>Hire</a>
//                     <a href="#joinus" onClick={toggleMenu}>Join Us</a>
//                     <a href="#action" onClick={toggleMenu}>Action</a>
//                     <a href="#insights" onClick={toggleMenu}>Insights</a>

//                     {/* Sign Up Button inside Mobile Menu */}
//                     <button className="w-full mt-6 px-6 py-3 text-lg rounded-full bg-black text-white hover:bg-[#56c8dc]">
//                         Sign Up
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
