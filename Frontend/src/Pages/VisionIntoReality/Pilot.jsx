import React from 'react'
import pilot_asset from "../../assets/Pilot_assets/pilot_asset_1.jpeg"
import calender from "../../assets/Pilot_assets/calendar.svg"

const Pilot = () => {
    return (
        <>
            <div className='h-screen'>
                <h1 className='flex justify-center items-center font-Instrumental-sans text-9xl text-center'>Book a Pilot</h1>
            </div>

            <section className='px-5'>
                <div style={{ backgroundImage: `url(${pilot_asset})` }} className='flex justify-center items-center w-auto h-[650px] bg-cover bg-center rounded-2xl'>

                    <div className='flex justify-start items-start'>
                        <div className='flex flex-col justify-start items-center text-white space-y-4'>
                            <h1 className='text-5xl font-bold'>Pilot for You </h1>
                            <h3 className='text-2xl font'>Your idea or concept = our solution.</h3>
                            <div className='flex flex-row items-center place-items-end bg-gray-400 px-6 py-1 rounded-full gap-7'>
                                <p className='flex justify-between gap-1 text-xl'>
                                    2 weeks
                                    <img src={calender} alt="calendar" className='w-6 h-7' />
                                </p>
                                <button className='bg-white rounded-full text-black px-6 py-4'>Book a pilot</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default Pilot
