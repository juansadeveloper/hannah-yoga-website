//DEPENDENCIES
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


//COMPONENTS


//PICTURES
import background from '../../public/footer-bg8.jpg'










function Footer() {
  return (
    <main className='w-full max-md:pb-2 md:h-[350px] max-md:mt-28 z-10 relative'>
        
        <Image src={background} alt='' fill={true} className=' object-cover z-[-5] w-full bottom-0 absolute opacity-[0.7]'/>
        <div className='text-center p-10'>
            <h1 className='text-[#623810]/85 font-light  text-[34px]'><span className='font-semibold text-[34px]'>EAGNA</span> WITH HANNAH</h1>
            <div className='flex flex-col gap-5 md:gap-5 mt-20 max-md:items-start justify-start'>
                <div className='flex max-md:flex-col max-md:items-start items-center w-full gap-5 md:gap-10 justify-center'>
                    <Link href="/yoga"><h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-[6px]'><span className='font-semibold text-[18px]'>YOGA</span> WITH HANNAH</h3></Link>
                    <Link href="/reiki"><h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-[6px]'><span className='font-semibold text-[18px]'>REIKI</span> WITH HANNAH</h3></Link>
                    <Link href="/sound-healing"><h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-[6px]'><span className='font-semibold text-[18px]'>SOUND HEALING</span> WITH HANNAH</h3></Link>
                </div>
                <div className='flex max-md:flex-col max-md:items-start items-center w-full gap-5 md:gap-10 justify-center'>
                    <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-[6px]'><span className='font-semibold text-[18px]'>FUNDRAISING</span></h3>
                    {/* <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-[6px]'><span className='font-semibold text-[18px]'>ABOUT</span> HANNAH</h3> */}
                    <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-[6px]'><span className='font-semibold text-[18px]'>UPCOMING RETREATS</span></h3>
                    {/* <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-[6px]'><span className='font-semibold text-[18px]'>CONTACT</span> HANNAH</h3> */}
                </div>  
            </div>
        </div>
        <h1 className='max-md:mx-auto max-md:mb-10 max-md:text-sm max-md:text-center max-md:mt-10 text-white/90 md:absolute md:right-0 md:mr-10 max-md:max-w-[210px] bg-black/20 px-3 py-1 rounded-md hover:text-white hover:bg-black/40 cursor-pointer'>Made by SP Studio Design</h1>  
    
    </main>
  )
}

export default Footer