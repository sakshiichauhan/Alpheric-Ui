import React from "react";
import CarouselCard from "../Components/CarouselCard";
import card1 from "../assets/Carousel/asset1.jpeg"
import card2 from "../assets/Carousel/asset2.jpeg"
import card3 from "../assets/Carousel/asset3.jpeg"
import card4 from "../assets/Carousel/asset4.jpeg"
import card5 from "../assets/Carousel/asset5.jpeg"
import { useRef } from "react";

const Hire = () => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-evenly px-14 py-10">
            <h1 className="font-instrument-sans text-8xl p-4 m-18 w-full font-semibold ">Hire</h1>
            <div className="w-full ">
                <div 
                    className="relative overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div className="flex gap-2 px-4 py-20 w-max scroll-smooth snap-x snap-mandatory">
                        <CarouselCard
                            imageUrl={card1}
                            title="Technology"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card2}
                            title="Project Manager"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card3}
                            title="Developer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card4}
                            title="Designer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card5}
                            title="Marketer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card3}
                            title="Developer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card4}
                            title="Designer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card5}
                            title="Marketer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        /><CarouselCard
                        imageUrl={card3}
                        title="Developer"
                        description="Stay ahead with the latest in tech trends."
                        visitLink="https://example.com"
                    />
                    <CarouselCard
                        imageUrl={card4}
                        title="Designer"
                        description="Stay ahead with the latest in tech trends."
                        visitLink="https://example.com"
                    />
                    <CarouselCard
                        imageUrl={card5}
                        title="Marketer"
                        description="Stay ahead with the latest in tech trends."
                        visitLink="https://example.com"
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hire;
