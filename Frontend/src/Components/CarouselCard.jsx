import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CarouselCard = ({ title, imageUrl, description, visitLink }) => {
    return (
        <div className="relative w-80 h-130 mx-1 rounded-xl overflow-hidden shadow-lg group font-instrument-sans">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-between">
                <div className=''>
                    <h3 className="text-white text-[30px] font-semibold">{title}</h3>
                    <p className="text-white font-medium text-md">{description}</p>
                </div>
                <div className="flex justify-end">
                    <a
                        href={visitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-stone-400 text-white gap-2 p-2 rounded-full text-sm font-medium flex items-center hover:bg-black"
                    >
                        <ArrowUpRight size={25} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
