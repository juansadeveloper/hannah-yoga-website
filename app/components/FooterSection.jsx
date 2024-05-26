//IMPORT DEPENDENCIES
import Link from 'next/link'
import React from 'react'













function FooterSection() {
  return (
    <main className='h-[550px] md:h-[350px] z-10 relative bg-gradient-to-r from-[#ede3dd] via-[#faf7f5] to-[#ede3dd] w-screen '>
        
        
        <div className='text-center p-10 h-[350px] relative'>
            <h1 className='text-[#623810]/85 font-light text-[24px] md:text-[34px]'><span className='font-semibold text-[24px] md:text-[34px]'>EAGNA</span> WITH HANNAH</h1>
            <div className='flex flex-col justify-center items-center gap-5 mt-16 md:mt-20 '>
                <div className='flex max-md:flex-col md:items-center items-start w-full md:gap-10 justify-center'>
                    <Link href="/yoga"><h3 className='text-[#623810]/85 font-light text-[14px] md:text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[14px] md:text-[18px]'>YOGA</span> WITH HANNAH</h3></Link>
                    <Link href="reiki"><h3 className='text-[#623810]/85 font-light text-[14px] md:text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[14px] md:text-[18px]'>REIKI</span> WITH HANNAH</h3></Link>
                    <Link href="sound-healing"><h3 className='text-[#623810]/85 font-light text-[14px] md:text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[14px] md:text-[18px]'>SOUND HEALING</span> WITH HANNAH</h3></Link>
                </div>
                <div className='flex max-md:flex-col md:items-center items-start w-full md:gap-10 justify-center'>
                    <Link href="/#about"><h3 className='text-[#623810]/85 font-light text-[14px] md:text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[14px] md:text-[18px]'>ABOUT</span> HANNAH</h3></Link>
                    <Link href="/#contact"><h3 className='text-[#623810]/85 font-light text-[14px] md:text-[18px] hover:cursor-pointer hover: transition-all duration-500 hover:-translate-y-1'><span className='font-semibold text-[14px] md:text-[18px]'>CONTACT</span> HANNAH</h3></Link>
                </div>  
            </div>
        </div>
        <h1 className='max-md:text-xs text-white/90 absolute right-0 bottom-0 mb-6 md:mb-8 mr-6 md:mr-10 bg-black/20 px-3 py-1 rounded-md hover:text-white hover:bg-black/40 cursor-pointer'>Made by SP Studio Design</h1>  
    
    </main>
  )
}

export default FooterSection