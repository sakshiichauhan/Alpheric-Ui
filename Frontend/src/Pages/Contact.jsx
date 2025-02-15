import React from 'react'
import { MoveRight } from 'lucide-react'
import girl from "../assets/girls.png"
import {motion} from 'framer-motion';
import {fadeIn} from "../variants"

const Contact = () => {
    return (
        <section className='min-h-screen w-full px-15 flex items-center justify-start'>
            <motion.div
            variants={fadeIn("left", 0.2)}
            // initial="hidden"
            whileInView={"show"}
            viewport={{once : true, amount : 0.9 }}
            
            className='w-full max-w-4xl'>
                <h3 className='text-3xl mb-4'>Shall we chat?</h3>
                <h1 className='text-6xl font-bold mb-8 hover:underline'>hello@alpheric.com</h1>
                <div className='flex gap-6 items-center hover:underline'>
                    <span className='text-9xl'>Let's</span>
                    <p>
                        <img className='h-auto w-6xl bg-sky-400 rounded-full' src={girl} />
                    </p>
                    <span className='text-9xl'>talk</span>
                    <button className='ml-4 px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300'>
                        <MoveRight size={90} />
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
