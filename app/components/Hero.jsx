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
import Quote from './Quote'
// import background from "../../public/background.jpeg"
// import background from "../../public/background2.jpeg"
// import background from "../../public/background4.jpeg"









function Hero() {
  return (
    <div className='relative flex flex-col justify-center items-center min-h-screen px-5'>
        
        {/* <Image src={background} alt='background'  className='object-cover z-[-5] absolute top-0' /> */}
        {/* <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[300px] md:top-[500px]  lg:top-[1000px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[600px] md:top-[] lg:top-[2000px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[900px] md:top-[] lg:top-[3000px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[1200px] md:top-[] lg:top-[3278px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[1500px] md:top-[] ' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[1800px] md:top-[] ' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[2100px] md:top-[]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[2400px] md:top-[]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[2700px] md:top-[]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[3000px] md:top-[]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[3300px] md:top-[]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[3600px] md:top-[]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[3900px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[4200px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[4500px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[4800px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[5100px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[5400px]' />
        <Image src={background} alt='background'  className='object-cover z-[-5] absolute max-md:top-[5650px]' /> */}

        <div className='relative flex justify-center mt-20 '>
          <Image src={mainpic} alt='hero-image'  className=' object-cover w-[980px] h-[450px] md:h-[550px] border-[10px] shadow-box border-white mt-20 md:mt-32'></Image>
          {/* <p className='max-w-[800px] text-center text-2xl font-semibold bg-white/20 rounded p-10'>Remember when the power of love overcomes the love of power, the world will know peace.<br></br> This starts within. This begins with you.</p> */}
          <p className='absolute bottom-7 text-center text-lg md:text-xl italic text-[#E6E3E3] rounded p-5 md:p-10'>EMBRACE A BETTER LIFE THROUGH YOGA PRACTICE.</p>
          <p className='absolute bottom-0 text-center text-lg md:text-xl italic text-[#E6E3E3] rounded p-5 md:p-10'>EMBRACE A BETTER YOU.</p>
        </div>
        <Link href="#about"><IoIosArrowDown size={47} className='max-md:hidden text-accent/50 mt-14 py-3 px-2 bg-white border rounded-full hover:border-accent/50 hover:text-accent transition duration-300'/></Link>
        <About />
        <Join />
        <Why />
        <Quote />
        <Contact />
    
    </div>
  )
}

export default Hero