import React, { memo } from 'react'
import visionGif from "../../assets/vision.gif";

const MemoizedImage = memo(({ src, alt }) => (
    <img src={src} alt={alt} />
));

const Vision = () => {
    return (
        <section className='h-screen flex justify-center items-center font-Instrumental-sans'>
            <MemoizedImage src={visionGif} alt="gif" />
            <div className='absolute flex-1 flex-row text-7xl justify-center items-center font-bold text-outline'>
                <div>Let's turn your vision into reality,</div>
                <div className='flex justify-center'>One step at a time.</div>
            </div>
        </section>
    )
}

export default Vision
