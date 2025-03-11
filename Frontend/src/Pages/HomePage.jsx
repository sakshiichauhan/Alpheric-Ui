import { useRef, useState, useEffect } from "react"
import Spiral from "../assets/Homepage/spiral.png"
import asset from "../assets/Homepage/asset.png"
import { X, VolumeOff, Volume2, ChevronLeft, ChevronRight} from "lucide-react"
import reelPoster from "../assets/Homepage/reelPoster.png"

import asset_1 from "../assets/Homeicons/asset-1.png"
import asset_2 from "../assets/Homeicons/asset-2.png"
import asset_3 from "../assets/Homeicons/asset-3.png"
import asset_4 from "../assets/Homeicons/asset-4.png"
import asset_5 from "../assets/Homeicons/asset-5.png"

import alpheric_animation from "../assets/Homepage/alpheric-gif.gif"


const HomePage = () => {
    const videoRef = useRef(null);
    const [isShowingPanel, setIsShowingPanel] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.autoplay = true;
            videoRef.current.playsInline = true;
            videoRef.current.loop = true;
            videoRef.current.play().catch(error => {
                console.error("Error attempting to play:", error);
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
        <section id="#" className="min-h-screen w-full bg-[radial-gradient(ellipse_50%_100%_at_top_right,#EDE6FE_10%,#FFFFFF_100%)] overflow-clip">
            <div className="w-full my-5 px-[116px] h-screen flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    
                    <div className="h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2">
                            <img src={asset} alt="Image asset" />
                        </div>
                        <div className="space-y-8 mt-14">
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.documentElement.scrollHeight || document.body.scrollHeight,
                                        behavior: "smooth"
                                    });
                                }} className="px-8 py-3 rounded-full border border-black text-lg hover:bg-[#56c8dc] hover:text-white ">
                                Let's Talk
                            </button>

                            <div className="flex justify-between items-center font-urbanist">
                                <div className="flex justify-self-end items-center  gap-5">
                                <p className="text-[20px] text-gray-600">You'll Be Talking With<br />Our Creative Talents.</p>
                                <div className="flex space-x-1">
                                    <div className="w-[36px] h-[36px] "><img src={asset_1} /></div>
                                    <div className="w-[36px] h-[36px]"><img src={asset_2} /></div>
                                    <div className="w-[36px] h-[36px]  "><img src={asset_3} /></div>
                                    <div className="w-[36px] h-[36px]  "><img src={asset_4} /></div>
                                    <div className="w-[36px] h-[36px]  "><img src={asset_5} /></div>
                                </div>
                                </div>
                                <p className="text-[20px] text-gray-600 max-w-md">
                                    Let's Craft A Digital Strategy Powered By <br/>
                                    Award-Winning Tech To Drive Real Results And <br/>
                                    Grow Your Business — Together!  🚀
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative h-full flex items-center justify-end">
                        <div className="absolute left-27 bottom-43 ">
                            <div className="relative w-40 h-40">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full flex items-center justify-center ">
                                        <img src={alpheric_animation} alt="alpheric-logo" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-[900px] mx-auto h-[690px] absolute right-[-240px] top-[-400px]">
                                <img src={Spiral} />
                            </div>
                            
                            {isShowingPanel && (
                                <div className="fixed bottom-25 right-8 bg-slate-900 text-white rounded-4xl h-[409px] w-[230px] z-55">
                                    <div className="relative">
                                        <video
                                            src="https://rondesignlab.com/video/common/intercom.mp4"
                                            className="w-full object-cover rounded-4xl"
                                            ref={videoRef}
                                            poster={reelPoster}
                                            autoPlay
                                            playsInline
                                            muted
                                        />
                                        <button
                                            onClick={() => setIsShowingPanel(false)}
                                            className="absolute top-4 right-4 bg-white h-[32px] w-[32px] rounded-xl text-black z-10 hover:bg-black hover:text-white flex
                                            justify-center items-center p-1"
                                        >
                                            <X size={25} />
                                        </button>


                                        <button
                                            onClick={handleVolumeToggle}
                                            className="absolute top-4 left-4 bg-white h-[32px] w-[32px] rounded-xl text-black z-10 hover:bg-black hover:text-white flex
                                            justify-center items-center p-1"
                                        >
                                            {isMuted ? <VolumeOff size={25} /> : <Volume2 size={25} />}
                                        </button>

                                        <button
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: document.documentElement.scrollHeight || document.body.scrollHeight,
                                                    behavior: "smooth"
                                                });
                                            }}
                                            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[173px] h-[46px] bg-black text-white font-medium rounded-[63px] py-2 text-xl hover:bg-white transition hover:text-black ">
                                            Let's Talk 👋
                                        </button>
                                    </div>
                                </div>
                            )}

                            
                            <button 
                            className=" fixed bottom-30 -right-5 bg-white text-black rounded-4xl h-20 w-10 z-55 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
                            onClick={() => setIsShowingPanel(true) }>
                                { isShowingPanel ? <ChevronRight /> : <ChevronLeft />}
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage