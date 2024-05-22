//DEPENDENCIES
import React from 'react'
import Image from 'next/image'

//ICONS
import { IoIosArrowDown } from "react-icons/io"

//PICTURES
import mainpic from "../../public/background3.jpeg"
import background from "../../public/section-bg4.jpg"
import About from './About' 
import Contact from './Contact'
import Why from './Why'
import Join from './Join'
import Link from 'next/link'
// import background from "../../public/background.jpeg"
// import background from "../../public/background2.jpeg"
// import background from "../../public/background4.jpeg"









function Hero() {
  return (
    <div className='relative flex flex-col justify-center items-center min-h-screen'>
        
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute top-0' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute top-[1000px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute top-[2000px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute top-[3000px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute top-[3300px]' />
        <div className='relative flex justify-center mt-20'>
          <Image src={mainpic} alt='hero-image'  className=' object-cover max-w-[1080px] h-[550px] border-[10px] shadow-box border-white mt-32'></Image>
          {/* <p className='max-w-[800px] text-center text-2xl font-semibold bg-white/20 rounded p-10'>Remember when the power of love overcomes the love of power, the world will know peace.<br></br> This starts within. This begins with you.</p> */}
          <p className='absolute bottom-7 text-center text-xl italic text-[#E6E3E3] rounded p-10'>EMBRACE A BETTER LIFE THROUGH YOGA PRACTICE.</p>
          <p className='absolute bottom-0 text-center text-xl italic text-[#E6E3E3] rounded p-10'>EMBRACE A BETTER YOU.</p>
        </div>
        <Link href="#about"><IoIosArrowDown size={47} className='text-accent/50 mt-14 py-3 px-2 bg-white border rounded-full hover:border-accent/50 hover:text-accent transition duration-300'/></Link>
        <About />
        <Join />
        <Why />
        <Contact />
    
    </div>
  )
}

export default Hero