import { useRef, useState, useEffect } from "react"
import Spiral from "../assets/spiral.png"
import asset from "../assets/asset.png"
import sample from "../assets/Videos/sample.mp4"
// import playButton from "../assets/Videos/play.png"
import { X, VolumeOff, Volume2} from "lucide-react"
import reelPoster from "../assets/reelPoster.png"
import alpheric_logo from "../assets/alpheric-a1.jpeg"
import asset_1 from "../assets/Homeicons/asset-1.png"
import asset_2 from "../assets/Homeicons/asset-2.png"
import asset_3 from "../assets/Homeicons/asset-3.png"
import asset_4 from "../assets/Homeicons/asset-4.png"


const HomePage = () => {
    const videoRef = useRef(null);
    const [isShowingPanel, setIsShowingPanel] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.autoplay = true;
            // videoRef.current.playsInline = true;
            videoRef.current.play()
                .catch(error => {
                    console.log("Video autoplay failed:", error);
                });
        }
    }, []);

    const handleVolumeToggle = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.muted = false;
                videoRef.current.volume = 1;
            } else {
                videoRef.current.muted = true;
                videoRef.current.volume = 0;
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="#" className="min-h-screen w-full bg-gradient-to-br from-white to-[#F5F0FF]">
            <div className="container mx-auto my-5 px-2 h-screen flex items-center">
            {/* <div className="w-full my-5 px-2 py-10 h-screen flex items-center"> */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    {/* Left Section */}
                    <div className="md:w-1/2 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <img src={asset} alt="Image asset" />
                        </div>


                        <div className="space-y-8 mt-14">
                            <button className="px-8 py-3 rounded-full border border-black text-lg hover:bg-[#56c8dc] hover:text-white">
                                Let's Talk
                            </button>

                            <div className="flex gap-6 font-urbanist">
                                <p className="text-lg text-gray-600">You'll Be Talking With Our Creative Talents:</p>
                                <div className="flex -space-x-3">
                                    <div className="w-9 h-9  border-2 border-white bg-gray-200 shadow-lg"><img src={asset_1}/></div>
                                    <div className="w-9 h-9  border-2 border-white bg-gray-200 shadow-lg"><img src={asset_2}/></div>
                                    <div className="w-9 h-9  border-2 border-white bg-gray-200 shadow-lg"><img src={asset_3}/></div>
                                    <div className="w-9 h-9  border-2 border-white bg-gray-200 shadow-lg"><img src={asset_4}/></div>
                                </div>
                                <p className="text-lg text-gray-600 max-w-md">
                                    Let's Craft A Digital Strategy Powered By
                                    Award-Winning Tech To Drive Real Results And
                                    Grow Your Business — Together!  🚀
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 relative h-full flex items-center justify-center">
                        {/* Circular Logo */}
                        <div className="absolute top-8 left-8">
                            <div className="relative w-34 h-34">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center overflow-hidden">
                                        <img src={alpheric_logo} alt="alpheric-logo" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <svg className="animate-spin-slow absolute inset-1" viewBox="0 0 100 100">
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                            fill="none"
                                        />
                                    </defs>
                                    <text>
                                        <textPath 
                                            href="#circlePath" 
                                            fontSize="9" 
                                            startOffset="1"
                                        >
                                            • FOLLOW OUR DIGITAL JOURNEY • FOLLOW OUR DIGITAL JOURNEY
                                            <animate
                                                attributeName="startOffset"
                                                from="0"
                                                to="50"
                                                dur="10s"
                                                repeatCount="indefinite"
                                            />
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Spiral Image */}
                        <div className="mt-12 relative">
                            <div className="aspect-square w-full max-w-xl mx-auto">
                                <img src={Spiral} />
                            </div>

                            
                            {isShowingPanel && (
                                <div className="fixed bottom-18 right-8 bg-slate-900 text-white rounded-4xl w-70 z-55">
                                    <div className="relative">
                                        <video
                                            // src={sample}
                                            src="https://rondesignlab.com/video/common/intercom.mp4"
                                            className="w-full object-cover rounded-4xl"
                                            ref={videoRef}
                                            id="videoPlayer"
                                            poster={reelPoster}
                                            autoPlay
                                            playsInline
                                            muted
                                        />
                                        <button
                                            onClick={() => setIsShowingPanel(false)}
                                            className="absolute top-4 right-4 bg-white p-2 rounded-xl text-black z-10 hover:bg-black hover:text-white "
                                        >
                                            <X />
                                        </button>

                                        
                                        <button
                                            onClick={handleVolumeToggle}
                                            className="absolute top-4 left-4 bg-white p-2 rounded-xl text-black z-10 hover:bg-black hover:text-white"
                                        >
                                            {isMuted ? <VolumeOff /> : <Volume2 />}
                                        </button>
                                        

                                        <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-14 bg-black text-white font-medium rounded-full py-2 text-xl hover:bg-white transition hover:text-black">
                                            Let's Talk 👋
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage