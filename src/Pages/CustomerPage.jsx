import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Customers() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Animate horizontally from 0 to -600 px as user scrolls
    // (Pulling the entire set of logos from right to left)
    const translateX = useTransform(scrollYProgress, [0, 3], [0, -600]);

    // Your fade + slide transforms for the left text
    const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.26, 0.45, 0.7], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.9], [0, 0.9]);

    const y1 = useTransform(scrollYProgress, [0, 0.6], [0, -250]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.8], [250, 0]);
    const y3 = useTransform(scrollYProgress, [0.8, 1], [300, 0]);

    return (
        <section className="relative w-full flex items-center justify-center bg-white ">
            <div className="max-w-screen flex">
                {/* Left Side (text + progress bar) */}
                <div className="w-1/3 flex flex-col justify-start sticky top-10 h-[100vh]">
                    <h2 className="text-[84px] mb-16 font-poppins font-semibold">
                        Customers
                    </h2>

                    {/* Vertical Scroll Progress Bar */}
                    <div className="absolute left-5 top-[180px] h-[40vh] w-[4px] bg-gray-200/50">
                        <motion.div
                            className="absolute h-full w-full bg-black"
                            style={{
                                scaleY: useTransform(scrollYProgress, [0, 0.9], [0, 1]),
                                originY: 0,
                            }}
                        />
                    </div>

                    <div className="m-3">
                        <ul className="text-lg space-y-60 relative h-full pl-12">
                            {/* Section 1 */}
                            <motion.div
                                style={{ opacity: opacity1, y: y1 }}
                                className="absolute top-5 flex flex-col gap-2 transition-opacity duration-1000 ease-in-out"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <p className="text-[32px] font-bold text-gray-700">
                                        <span className="text-[18px] font-semibold">01 </span>
                                        Visibility &amp; Communication
                                    </p>
                                    <p className="text-[18px] pl-8 text-gray-500 mt-2">
                                        Take the assessment and get your career matches, personality
                                        archetype, and more along the way.
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Section 2 */}
                            <motion.div
                                style={{ opacity: opacity2, y: y2 }}
                                className="absolute top-0 transition-opacity duration-500 ease-in-out"
                            >
                                <div>
                                    <p className="text-[32px] text-gray-700 font-bold">
                                        <span className="text-[18px] font-semibold">02 </span>
                                        Operational Prioritization
                                    </p>
                                    <p className="text-[18px] pl-8 text-gray-500 text-base mt-2">
                                        Find out what makes you stand apart from others and why
                                        certain careers are great fits for you.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Section 3 */}
                            <motion.div
                                style={{ opacity: opacity3, y: y3 }}
                                className="absolute top-0 transition-opacity duration-500 ease-in-out"
                            >
                                <div>
                                    <p className="text-[32px] text-gray-700 font-bold ">
                                        <span className="text-[18px] font-semibold">03 </span>
                                        Justification &amp; Planning
                                    </p>
                                    <p className="text-[18px] pl-8 text-gray-500 text-base mt-2">
                                        Find all the information you need to know about your dream
                                        career. Then make a plan to get there.
                                    </p>
                                </div>
                            </motion.div>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Sticky container (top-right to bottom-left) */}
                <div
                    className="w-2/3 h-[200vh] sticky top-0 flex overflow-x-visible "
                    ref={ref}
                >
                    <motion.div
                        style={{ x: translateX, originX: 1 }}
                        className="relative w-[800px] top-0 m-3"
                    >
                        {/* Row 1 (white) */}
                        <motion.div
                            style={{ position: "absolute", top: 0, right: 0 }}
                            className="flex items-center gap-10 m-3"
                        >
                            <div className="w-6 h-6 bg-white rounded-full" />
                            <div className="w-2 h-2 bg-white rounded-full" />
                            <motion.div className="w-28 h-28 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                                <img
                                    src="./src/assets/Customer-icons/Gucci.png"
                                    alt="Gucci"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="./src/assets/Customer-icons/coca-cola.png"
                                    alt="coca-cola"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-4 m-3">
                                <img
                                    src="./src/assets/Customer-icons/Rolex.png"
                                    alt="Rolex"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 2 (white) */}
                        <motion.div
                            style={{ position: "absolute", top: 125, right: 30 }}
                            className="flex items-center gap-8"
                        >
                            <div className="w-7 h-7 bg-white rounded-full" />
                            <motion.div className="w-28 h-28 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Hm.png"
                                    alt="H&M"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Puma.png"
                                    alt="Puma"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/versace.png"
                                    alt="Versace"
                                    className="w-18 h-18 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 3 (white) */}
                        <motion.div
                            style={{ position: "absolute", top: 238, right: 90 }}
                            className="flex items-center gap-8"
                        >
                            <div className="w-4 h-4 bg-white rounded-full" />
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Starbuck.png"
                                    alt="Starbucks"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-28 h-28 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Hyundai.png"
                                    alt="Hyundai"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-28 h-28 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Rage.png"
                                    alt="Zara"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 4 (white) */}
                        <motion.div
                            style={{ position: "absolute", top: 350, right: 120 }}
                            className="flex items-center gap-8"
                        >
                            <motion.div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/vl.png"
                                    alt="Louis Vuitton"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Double.png"
                                    alt="Mastercard"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Chanel.png"
                                    alt="Chanel"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 5 (white) */}
                        <motion.div
                            style={{ position: "absolute", top: 450, right: 140 }}
                            className="flex items-center gap-8"
                        >
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Lacoste.png"
                                    alt="Lacoste"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Rolex.png"
                                    alt="Rolex"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/versace.png"
                                    alt="versace"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 6 (blue) */}
                        <motion.div
                            style={{ position: "absolute", top: 550, right: 160 }}
                            className="flex items-center gap-8"
                        >
                            <div className="w-6 h-6 bg-[#5AC8DC] rounded-full" />
                            <div className="w-2 h-2 bg-[#5AC8DC] rounded-full" />
                            <motion.div className="w-28 h-28 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="./src/assets/Customer-icons/Gucci.png"
                                    alt="Gucci"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/coca-cola.png"
                                    alt="coca-cola"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Rolex.png"
                                    alt="Rolex"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 7 (blue) */}
                        <motion.div
                            style={{ position: "absolute", top: 665, right: 180 }}
                            className="flex items-center gap-8"
                        >
                            <div className="w-7 h-7 bg-[#5AC8DC] rounded-full" />
                            <motion.div className="w-28 h-28 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/hm.png"
                                    alt="H&M"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Puma.png"
                                    alt="Puma"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/versace.png"
                                    alt="Versace"
                                    className="w-18 h-18 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 8 (blue) */}
                        <motion.div
                            style={{ position: "absolute", top: 780, right: 210 }}
                            className="flex items-center gap-8"
                        >
                            <div className="w-4 h-4 bg-[#5AC8DC] rounded-full" />
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Starbuck.png"
                                    alt="Starbucks"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-28 h-28 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Hyundai.png"
                                    alt="Hyundai"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-28 h-28 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Rage.png"
                                    alt="Zara"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 9 (blue) */}
                        <motion.div
                            style={{ position: "absolute", top: 895, right: 230 }}
                            className="flex items-center gap-8"
                        >
                            <motion.div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/vl.png"
                                    alt="Louis Vuitton"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Double.png"
                                    alt="Mastercard"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Chanel.png"
                                    alt="Chanel"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 10 (blue) */}
                        <motion.div
                            style={{ position: "absolute", top: 995, right: 240 }}
                            className="flex items-center gap-8"
                        >
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Lacoste.png"
                                    alt="Lacoste"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Rolex.png"
                                    alt="Rolex"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/versace.png"
                                    alt="versace"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Row 11 (green) */}
                        <motion.div
                            style={{ position: "absolute", top: 1090, right: 260 }}
                            className="flex items-center gap-8"
                        >
                            <div className="w-6 h-6 bg-[#B3FEA9] rounded-full" />
                            <div className="w-2 h-2 bg-[#B3FEA9] rounded-full" />
                            <motion.div className="w-28 h-28 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="./src/assets/Customer-icons/Gucci.png"
                                    alt="Gucci"
                                    className="w-20 h-20 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-24 h-24 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/coca-cola.png"
                                    alt="coca-cola"
                                    className="w-16 h-16 object-contain"
                                />
                            </motion.div>
                            <motion.div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-4">
                                <img
                                    src="/src/assets/Customer-icons/Rolex.png"
                                    alt="Rolex"
                                    className="w-10 h-10 object-contain"
                                />
                            </motion.div>

                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
