import React, { useState } from 'react';
import Alphericlogo from "../assets/alpheric-icon.png";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <div className="fixed top-0 left-0 w-full flex justify-evenly font-urbanist px-6 py-4 m-2 bg-transparent backdrop-blur-md border border-white/10 z-50">
            <div className='relative z-10'>
                <img src={Alphericlogo} alt="logo" className='w-36 h-auto ' />
            </div>

            <div className="flex gap-6 border border-white rounded-full px-4 py-2 text-lg bg-white/10 backdrop-blur-lg mx-5">
                <a href="#"  onClick={() => setActiveNav()}>Consult</a>
                <a href="#about" onClick={() => setActiveNav()}>Build</a>
                <a href="#design" onClick={() => setActiveNav()}>Design</a>
                <a href="#host" onClick={() => setActiveNav()}>Host</a>
                <a href="#secure" onClick={() => setActiveNav()}>Secure</a>
                <a href="#market" onClick={() => setActiveNav()}>Market</a>
                <a href="#support" onClick={() => setActiveNav()}>Support</a>
                <a href="#services" onClick={() => setActiveNav()}>Services</a>
                <a href="#hire" onClick={() => setActiveNav()}>Hire</a>
                <a href="#joinus" onClick={() => setActiveNav()}>Join Us</a>
                <a href="#action" onClick={() => setActiveNav()}>Action</a>
                <a href="#insights" onClick={() => setActiveNav()}>Insights</a>
            </div>
            <button className="px-4 py-2 text-xl rounded-3xl border border-black hover:bg-[#56c8dc] hover:text-white bg-white">
                Sign Up
            </button>
        </div>
    );
}

export default Navbar;

// import React, { useState } from 'react';
// import Alphericlogo from "../assets/alpheric-icon.png";

// const Navbar = () => {
//     const [activeNav, setActiveNav] = useState("#");

//     // Navbar items
//     const navItems = [
//         { name: "Consult", id: "#" },
//         { name: "Build", id: "#about" },
//         { name: "Design", id: "#design" },
//         { name: "Host", id: "#host" },
//         { name: "Secure", id: "#secure" },
//         { name: "Market", id: "#market" },
//         { name: "Support", id: "#support" },
//         { name: "Services", id: "#services" },
//         { name: "Hire", id: "#hire" },
//         { name: "Join Us", id: "#joinus" },
//         { name: "Action", id: "#action" },
//         { name: "Insights", id: "#insights" }
//     ];

//     return (
//         <div className="fixed top-0 left-0 w-full flex justify-evenly font-urbanist px-6 py-4 m-2 bg-transparent backdrop-blur-md border border-white/10 z-50">
//             <div className='relative z-10'>
//                 <img src={Alphericlogo} alt="logo" className="w-36 h-auto" />
//             </div>

//             <div className="flex gap-4 border border-white rounded-full px-2 text-md bg-white/10 backdrop-blur-lg">
//                 {navItems.map((item) => (
//                     <a 
//                         key={item.id}
//                         href={item.id}
//                         onClick={() => setActiveNav(item.id)}
//                         className={`px-3 py-2 rounded-full transition duration-300 ${
//                             activeNav === item.id 
//                             ? "bg-cyan-200 py-3 m-2 text-black" 
//                             : "hover:bg-cyan-200 py-3 m-2 hover:text-black"
//                         }`}
//                     >
//                         {item.name}
//                     </a>
//                 ))}
//             </div>

//             <button className="px-6 py-3 rounded-full border border-white bg-white hover:bg-cyan-200 hover:text-black transition">
//                 Sign Up
//             </button>
//             <button className="px-6 py-1 rounded-full border border-white bg-white hover:bg-cyan-200 hover:text-black transition">
//                 Sign Up
//             </button>
//         </div>
//     );
// }

// export default Navbar;

