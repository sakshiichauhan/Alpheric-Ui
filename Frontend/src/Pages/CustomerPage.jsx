import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Customers() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // ===== Left-side animations remain unchanged =====
  // (No horizontal translation for the right side now.)

  // Text animation for left side
  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.26, 0.45, 0.7], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.9], [0, 0.9]);

  const y1 = useTransform(scrollYProgress, [0, 0.6], [0, -250]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.8], [250, 0]);
  const y3 = useTransform(scrollYProgress, [0.8, 1], [300, 0]);

  return (
    <section className="relative w-full flex items-center justify-center bg-white">
      <div className="max-w-screen flex">
        {/* Left Side (Text + Vertical Scroll Bar) */}
        <div className="w-1/3 flex flex-col justify-start sticky top-10 h-[100vh]">
          <h2 className="text-[64px] mb-16 font-poppins font-semibold">
            Customer Outcomes
          </h2>
          <div className="absolute left-5 top-[180px] h-[40vh] w-[4px] bg-gray-200/50">
            <motion.div
              className="absolute h-full w-full bg-blue-500"
              style={{
                scaleY: useTransform(scrollYProgress, [0, 0.9], [0, 1]),
                originY: 0,
              }}
            />
          </div>

          <ul className="m-3 text-lg space-y-60 relative h-full pl-12">
            {/* Section 1 */}
            <motion.div
              style={{ opacity: opacity1, y: y1 }}
              className="absolute top-5 flex flex-col gap-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <p className="text-[32px] font-bold text-gray-800">
                  Visibility & Communication
                </p>
                <ul className="text-[16px] pl-8 text-gray-600 mt-4 space-y-2">
                  <li>• Cyber Risk Quantification</li>
                  <li>• Attack Surface Management</li>
                  <li>• Board & SEC Materiality Reporting</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              style={{ opacity: opacity2, y: y2 }}
              className="absolute top-0"
            >
              <div>
                <p className="text-[32px] text-gray-800 font-bold">
                  Operational Prioritization
                </p>
                <ul className="text-[16px] pl-8 text-gray-600 mt-4 space-y-2">
                  <li>• Continuous Controls Monitoring</li>
                  <li>• Risk-based Vulnerability Management</li>
                  <li>• Controls Effectiveness & Prioritization</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              style={{ opacity: opacity3, y: y3 }}
              className="absolute top-0"
            >
              <div>
                <p className="text-[32px] text-gray-800 font-bold">
                  Justification & Planning
                </p>
                <ul className="text-[16px] pl-8 text-gray-600 mt-4 space-y-2">
                  <li>• Optimize Cyber Security Budgets</li>
                  <li>• Identify Highest ROI Initiatives</li>
                  <li>• Reduce Cyber Insurance Premiums</li>
                </ul>
              </div>
            </motion.div>
          </ul>
        </div>

        {/* Right Side (Circles / Logos) - now static without animation */}
        <div className="w-2/3 h-[200vh] sticky top-0 flex overflow-x-visible" ref={ref}>
          {/* We can use standard divs instead of motion.div here */}
          <div className="relative w-[800px] top-0 m-3">
            {/* Row 1 (White) */}
            <div style={{ position: "absolute", top: 0, right: 0 }} className="flex items-center gap-6">
              <div className="w-6 h-6 bg-white rounded-full" />
              <div className="w-3 h-3 bg-white rounded-full" />
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="./src/assets/Customer-icons/Gucci.png"
                  alt="Gucci"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-4">
                <img
                  src="./src/assets/Customer-icons/coca-cola.png"
                  alt="coca-cola"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="./src/assets/Customer-icons/Rolex.png"
                  alt="Rolex"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Row 2 (White) */}
            <div style={{ position: "absolute", top: 140, right: 30 }} className="flex items-center gap-6">
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Hm.png"
                  alt="H&M"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Puma.png"
                  alt="Puma"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/versace.png"
                  alt="Versace"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Row 3 (White) */}
            <div style={{ position: "absolute", top: 280, right: 70 }} className="flex items-center gap-5">
              <div className="w-3 h-3 bg-white rounded-full" />
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Starbuck.png"
                  alt="Starbucks"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Hyundai.png"
                  alt="Hyundai"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rage.png"
                  alt="Zara"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Row 4 (White) */}
            <div style={{ position: "absolute", top: 420, right: 100 }} className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/vl.png"
                  alt="Louis Vuitton"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Double.png"
                  alt="Mastercard"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Chanel.png"
                  alt="Chanel"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Row 5 (White) */}
            <div style={{ position: "absolute", top: 560, right: 130 }} className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Lacoste.png"
                  alt="Lacoste"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rolex.png"
                  alt="Rolex"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/versace.png"
                  alt="Versace"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Row 6 (Blue) */}
            <div style={{ position: "absolute", top: 700, right: 160 }} className="flex items-center gap-6">
              <div className="w-6 h-6 bg-[#5AC8DC] rounded-full" />
              <div className="w-3 h-3 bg-[#5AC8DC] rounded-full" />
              <div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="./src/assets/Customer-icons/Gucci.png"
                  alt="Gucci"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/coca-cola.png"
                  alt="coca-cola"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rolex.png"
                  alt="Rolex"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Row 7 (Blue) */}
            <div style={{ position: "absolute", top: 840, right: 180 }} className="flex items-center gap-6">
              <div className="w-5 h-5 bg-[#5AC8DC] rounded-full" />
              <div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/hm.png"
                  alt="H&M"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Puma.png"
                  alt="Puma"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/versace.png"
                  alt="Versace"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Row 8 (Blue) */}
            <div style={{ position: "absolute", top: 980, right: 210 }} className="flex items-center gap-5">
              <div className="w-3 h-3 bg-[#5AC8DC] rounded-full" />
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Starbuck.png"
                  alt="Starbucks"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Hyundai.png"
                  alt="Hyundai"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-24 h-24 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rage.png"
                  alt="Zara"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Row 9 (Blue) */}
            <div style={{ position: "absolute", top: 1120, right: 230 }} className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/vl.png"
                  alt="Louis Vuitton"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Double.png"
                  alt="Mastercard"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Chanel.png"
                  alt="Chanel"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Row 10 (Blue) */}
            <div style={{ position: "absolute", top: 1260, right: 240 }} className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Lacoste.png"
                  alt="Lacoste"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rolex.png"
                  alt="Rolex"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-[#5AC8DC] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/versace.png"
                  alt="versace"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Row 11 (Green) */}
            <div style={{ position: "absolute", top: 1400, right: 260 }} className="flex items-center gap-6">
              <div className="w-6 h-6 bg-[#B3FEA9] rounded-full" />
              <div className="w-3 h-3 bg-[#B3FEA9] rounded-full" />
              <div className="w-24 h-24 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="./src/assets/Customer-icons/Gucci.png"
                  alt="Gucci"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/coca-cola.png"
                  alt="coca-cola"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rolex.png"
                  alt="Rolex"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            {/* Row 12 (Green) */}
            <div style={{ position: "absolute", top: 1540, right: 260 }} className="flex items-center gap-6">
              <div className="w-5 h-5 bg-[#B3FEA9] rounded-full" />
              <div className="w-24 h-24 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/hm.png"
                  alt="H&M"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Puma.png"
                  alt="Puma"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/versace.png"
                  alt="Versace"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Row 13 (Green) */}
            <div style={{ position: "absolute", top: 1680, right: 260 }} className="flex items-center gap-5">
              <div className="w-3 h-3 bg-[#B3FEA9] rounded-full" />
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Starbuck.png"
                  alt="Starbucks"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-24 h-24 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Hyundai.png"
                  alt="Hyundai"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-24 h-24 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rage.png"
                  alt="Zara"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* Row 14 (Green) */}
            <div style={{ position: "absolute", top: 1820, right: 260 }} className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/vl.png"
                  alt="Louis Vuitton"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Double.png"
                  alt="Mastercard"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Chanel.png"
                  alt="Chanel"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Row 15 (Green) */}
            <div style={{ position: "absolute", top: 1960, right: 270 }} className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Lacoste.png"
                  alt="Lacoste"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-20 h-20 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/Rolex.png"
                  alt="Rolex"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-[#B3FEA9] rounded-full shadow-sm flex items-center justify-center p-2">
                <img
                  src="/src/assets/Customer-icons/versace.png"
                  alt="versace"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
