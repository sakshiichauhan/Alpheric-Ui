import React from 'react';

const Card = ({ title, description, imageUrl, listItems }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-8 max-w-6xl mx-auto">
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                {title && (
                    <div className="mb-6">
                        <h1 className="text-[96px] font-[600px] font-instrument-sans">{title}</h1>
                    </div>
                )}

                {description && (
                    <div className="mb-8">
                        <p className="text-gray-600 text-[32px] max-w-xl font-urbanist">{description}</p>
                    </div>
                )}

                {listItems && listItems.length > 0 && (
                    <div>
                        <ul className="space-y-4 text-[32px] text-gray-600 font-urbanist">
                            {listItems.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {imageUrl && (
                <div className="flex-1">
                    <div className="relative w-full h-full">
                        <img
                            src={imageUrl}
                            alt={title ? `${title} illustration` : 'Card illustration'}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;