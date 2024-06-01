import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import background from "../../public/retreat/1.jpeg"
import Footer from '../components/Footer'

function page() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>


        <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed top-0 flex items-center justify-center px-5'>
            <div className='flex items-center justify-between  w-full max-w-[1500px]'>
                <Link href="/"><div className='text-[#623810]/85 font-light  md:text-[24px] hover:scale-[1.05] transition duration-300'><span className='font-semibold md:text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
                <div className='flex max-md:flex-col md:gap-5 items-center'>
                    {/* <h1 className='text-[15px] md:text-[24px] font-bold text-[#623810]/85'> YOGA</h1> */}
                    <h3 className='text-[#623810]/85 max-md:hidden'><span className='font-bold'>Next retreat:</span> 11th to 13th October 2024</h3>
                    <Link href="#prices"><button className='px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book Now</button></Link>
                </div>
            </div>
        </div>

        <section className='relative w-full h-screen flex items-center justify-center'>
            <Image src={background} alt='background'  className='w-full h-full object-cover z-[-5]'/>
            {/* <div className='absolute flex flex-col gap-5 bg-white/50 p-10 rounded'> */}
                {/* <h1 className='font-bold text-5xl text-[#D37472]'>UNWIND, <span className='text-[#8C5233]'>RECONNECT</span> <span className='text-white'>& FIND INNER PEACE</span></h1> */}
                {/* <h1 className='font-bold text-5xl text-[#D37472]'>UNWIND, RECONNECT & FIND INNER PEACE</h1> */}
                {/* <h1 className='font-bold text-5xl text-white'>UNWIND, RECONNECT & FIND INNER PEACE</h1> */}
                {/* <h1 className='font-bold text-5xl text-[#8C5233]'>UNWIND, RECONNECT & FIND INNER PEACE</h1> */}
                {/* <h1 className='font-bold text-5xl text-black'>UNWIND, RECONNECT & FIND INNER PEACE</h1> */}
                {/* <h1 className='font-bold text-5xl text-[#8C5233]'>RECONNECT</h1> */}
                {/* <h1 className='font-bold text-5xl text-white'>GET INNER PEACE</h1> */}
            {/* </div> */}
            <div className='absolute mt-60  md:mt-[230px] w-full max-w-[350px]  lg:max-w-[1280px] mb-40 flex flex-col gap-5 bg-white/70 py-10 md:py-14 px-5 rounded'>
                <h1 className='font-bold text-2xl md:text-5xl text-[#623810]/85 text-center'>UNWIND, RECONNECT & FIND INNER PEACE</h1>
                <h1 className='text-lg md:text-3xl text-center mb-5'>Give yourself a chance to relax because you deserve it.</h1>
                <p className='max-w-[1000px] mx-auto text-sm md:text-lg'>A weekend of well-being and reconnecting with nature in the serene countryside of Tiernaur, Nevins Newfield Inn, County Mayo, Ireland. This special weekend retreat offers a chance to reconnect with yourself & discover your inner light. Through yoga, meditation & mindfulness practices, you will learn tools to stay grounded & peaceful in a busy world.</p>
                <p className='max-w-[1000px] mx-auto text-sm md:text-lg'>We will take you on a journey of deep relaxation and spiritual guidance, whilst surrounded by the beautiful vast ocean, mountains & nature that County Mayo has to offer. The core concept of the retreat is to let go of unnecessary burdens & stress so that you connect with your inner power. Once connected, you gain a deeper understanding and clarity to find inner peace.</p>
                <p className='max-w-[1000px] mx-auto text-sm md:text-lg'>Hosted by the luxurious Nevins Newfield Inn, we will make you feel at home, at peace & cared for, so that you can relax, unwind, let go, replenish & rejuvenate, all whilst connecting with your inner power.</p>
            </div>
        </section>

        <section id='prices' className='flex flex-col justify-center items-center px-5 w-full scroll-mb-[2000px]'>
                
                {/* <h1 className='font-bold text-center max-md:max-w-[300px]   text-2xl  md:text-3xl mt-40  mb-10'>PRICES</h1> */}
                <h1 className='font-bold text-center max-md:max-w-[300px]   text-2xl  md:text-3xl mt-40  mb-10'>CHOOSE THE PRICE & PACKAGE THAT´S BETTER FOR YOU</h1>
                <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-center gap-5 py-7'>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg'>
                        <div>
                            <h1 className='font-bold text-2xl mb-2 text-[#623810]/85'>Basic</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Retreat, All Meals & <span className='font-normal'>No Accomodation</span></p>
                        </div>
                        <button className='mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight md:hover:scale-[1.03]'>Book for €550</button>
                    </div>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg '>
                        <div>
                            <h1 className='font-bold text-2xl mb-2 text-[#623810]/85'>Practical</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Retreat, All Meals & <span className='font-normal'>Shared Accomodation</span></p>
                        </div>
                        <button className='md:hover:scale-[1.03] mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book for €850</button>
                    </div>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg flex-col items-center '>
                        <div>
                            <h1 className='font-bold text-2xl mb-2 text-[#623810]/85'>Full</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Retreat, All Meals & <span className='font-normal'>Private Accomodation</span></p>
                        </div>  
                        <button className='md:hover:scale-[1.03] mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book for €950</button>
                    </div>
                    
                </div>

                <h1 className='font-bold text-center max-md:max-w-[300px] text-[#623810]/85  text-2xl  md:text-3xl mt-40  mb-5'>RETREAT SCHEDULE</h1>
                <p className='mb-10 md:text-xl font-normal text-center'>The schedule may vary depending on weather and day to day activities</p>
                <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-start justify-center gap-5 py-7'>
                    <div className='bg-[#f5f0ec]  p-7 rounded-lg'>
                        <div className='max-w-[350px]'>
                            <h1 className='font-bold text-2xl mb-10'>Friday</h1>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>14:00 - 15:00:</span><span className=''></span> Arrival and Check-in</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>15:00 - 16:30:</span><span className=''></span> Introductory welcome ceremony, tea & movement meditation (dancing)</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>16:30 - 17:30:</span><span className=''></span> Relaxing Yin Yoga & Sound Healing with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>17:45 - 19:00:</span><span className=''></span> Releasing and Healing session with Meera</p>
                            <p className='max-w-[550px] font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>19:30 - 20:30:</span><span className=''></span> Dinner at Nevins</p>
                        </div>
                    
                    </div>
                    <div className='bg-[#f5f0ec]  p-7 rounded-lg'>
                        <div className='max-w-[350px]'>
                            <h1 className='font-bold text-2xl mb-10'>Saturday</h1>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>7:30 - 8:30:</span><span className=''></span> Morning Hatha Yoga with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>8:30 - 9:30:</span><span className=''></span> Breakfast</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>9:30 - 11:00:</span><span className=''></span> Meditative walk on the Great Western Greenway(depending on weather)</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>11:00 - 13:00:</span><span className=''></span> Stress management and Yogic Philosophy with Meera</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>13:00 - 15:00:</span><span className=''></span> (Optional) Take a dip in the Atlantic Ocean at Mulranny beach, followed by Lunch at Nevins</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>15:30 - 17:00:</span><span className=''></span> Yogic Philosophy to Reconnect with oneself by Meera</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>17:15 - 18:15:</span><span className=''></span> Relaxing Reiki & Restorative workshop with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>18:30 - 19:30:</span><span className=''></span> Yoga Nidra with Meera</p>
                            <p className='max-w-[550px] font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>20:00 - 21:00:</span><span className=''></span> Dinner</p>
                        </div>
                    
                    </div>
                    <div className='bg-[#f5f0ec]  p-7 rounded-lg'>
                        <div className='max-w-[350px]'>
                            <h1 className='font-bold text-2xl mb-10'>Monday</h1>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>7:30 - 8:30:</span><span className=''></span> Morning Hatha Yoga with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>8:30 - 10:30:</span><span className=''></span> Breakfast followed by (optional) meditative walk around Sand Hill.</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>10:30 - 12:30:</span><span className=''></span> Q&A session & sharing circle</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>12:30 - 13:30:</span><span className=''></span> Sandwiches, canapés, refreshments & reflection</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>13:30 - 15:00:</span><span className=''></span> Final session with Meera</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>15:00 - 16:00:</span><span className=''></span> Relaxing Sound Bath with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>16:00 - 16:45:</span><span className=''></span> Self-Journaling, Scones & Tea</p>
                            <p className='max-w-[550px] font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>17:00:</span><span className=''></span> Departure</p>
                        </div>
                    
                    </div>
                    
                    
                </div>
                
        </section>


        <div className='w-full flex flex-col justify-center items-center text-center'>
        <Footer />   
        </div>

    </main>
  )
}

export default page