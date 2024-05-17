//DEPENDENCIES
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//IMAGES
import background from '../../public/footer-bg.jpg'

function Footer() {
  return (
    <main className='w-full h-[350px] z-10 relative'>
        
        <Image src={background} alt='' fill={true} className='object-cover z-[-5] bottom-0 absolute opacity-[0.7]'/>
        <div className='text-center p-10'>
            <h1 className='text-[#623810]/85 font-light  text-[34px]'><span className='font-semibold text-[34px]'>EAGNA</span> WITH HANNAH</h1>
            <div className='flex flex-col gap-5 mt-20 '>
                <div className='flex items-center w-full gap-10 justify-center'>
                    <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[18px]'>YOGA</span> WITH HANNAH</h3>
                    <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[18px]'>REIKI</span> WITH HANNAH</h3>
                    <Link href="/sound-healing"><h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[18px]'>SOUND HEALING</span> WITH HANNAH</h3></Link>
                </div>
                <div className='flex items-center w-full gap-10 justify-center'>
                    <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[18px]'>ABOUT</span> HANNAH</h3>
                    <h3 className='text-[#623810]/85 font-light  text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[18px]'>CONTACT</span> HANNAH</h3>
                </div>  
            </div>
        </div>
        <h1 className='text-white/90 absolute right-0 mr-10 bg-black/20 px-3 py-1 rounded-md hover:text-white hover:bg-black/40 cursor-pointer'>Made by SP Studio Desing</h1>  
    </main>
  )
}

export default Footer