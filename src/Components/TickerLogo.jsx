import Segment from "../assets/Ticker/Segment.svg"
import ShutterFrame from "../assets/Ticker/Shutterframe.svg"
import Sisyphus from "../assets/Ticker/Sisyphus.svg"
import Solaris from "../assets/Ticker/Solaris.svg"
import Sonorous from "../assets/Ticker/Sonorous.svg"
import Spherule from "../assets/Ticker/Spherule.svg"
import Stack3dLab from "../assets/Ticker/Stack3d.svg"
import Visionwork from "../assets/Ticker/Visionwork.svg"
import Voxel_Labs from "../assets/Ticker/VoxelLabs.svg"
import Warpspeed from "../assets/Ticker/Warpspeed.svg"
import Watchtower from "../assets/Ticker/Watchtower.svg"
import Wildcrafted from "../assets/Ticker/Wildcrafted.svg"
import { motion } from "framer-motion"

const TickerLogo = () => {
    return (
        <div className="py-8 bg-white">
            <div className="">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
                    <motion.div className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: "-50%"
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType:"loop",
                        ease:"linear"
                    }}
                    >
                        <img src={Segment} alt="Segment" />
                        <img src={ShutterFrame} alt="ShutterFrame" />
                        <img src={Sisyphus} alt="" />
                        <img src={Solaris} alt="" />
                        <img src={Sonorous} alt="" />
                        <img src={Spherule} alt="" />
                        <img src={Stack3dLab} alt="" />
                        <img src={Visionwork} alt="" />
                        <img src={Voxel_Labs} alt="" />
                        <img src={Warpspeed} alt="" />
                        <img src={Watchtower} alt="" />
                        <img src={Wildcrafted} alt="" />

                        {/* reapeated */}
                        <img src={Segment} alt="Segment" />
                        <img src={ShutterFrame} alt="ShutterFrame" />
                        <img src={Sisyphus} alt="" />
                        <img src={Solaris} alt="" />
                        <img src={Sonorous} alt="" />
                        <img src={Spherule} alt="" />
                        <img src={Stack3dLab} alt="" />
                        <img src={Visionwork} alt="" />
                        <img src={Voxel_Labs} alt="" />
                        <img src={Warpspeed} alt="" />
                        <img src={Watchtower} alt="" />
                        <img src={Wildcrafted} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default TickerLogo;