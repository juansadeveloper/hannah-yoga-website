//DEPENDENCIES
import React from 'react'
import Image from 'next/image'

//ICONS
import { IoIosArrowDown } from "react-icons/io"

//PICTURES
import mainpic from "../../public/background5.jpeg"
import background from "../../public/file.jpg"
// import mainpic from "../../public/background3.jpeg"
// import background from "../../public/section-bg4.jpg"
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
    <div className='relative flex flex-col justify-center items-center h-screen px-5'>
        
        <Image src={background} alt='background' fill={true}  className='object-cover z-[-5] absolute top-0' />
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

        <div className=' flex flex-col  justify-start md:items-center mt-20 '>
            {/* <Image src={mainpic} alt='hero-image'  className=' object-cover w-[980px] h-[450px] md:h-[550px] border-[10px] shadow-box border-white mt-20 md:mt-32'></Image> */}
            {/* <p className='max-w-[800px] text-center text-2xl font-semibold bg-white/20 rounded p-10'>Remember when the power of love overcomes the love of power, the world will know peace.<br></br> This starts within. This begins with you.</p> */}
            <div className='p-5 rounded-lg mt-[450px] md:mt-[700px] flex max-md:flex-col items-center md:gap-3 md:mb-10'>
              <p className=' text-center text-lg md:text-3xl font-light italic text-white/85 rounded '>EMBRACE A BETTER LIFE THROUGH YOGA PRACTICE.</p>
              <p className=' text-center text-lg md:text-3xl font-light italic text-white/85 /85rounded '>EMBRACE A BETTER YOU.</p>
              {/* <p className=' text-center text-lg md:text-3xl font-bold italic text-[#E6E3E3] rounded '>EMBRACE A BETTER YOU.</p> */}
            </div>
              {/* <Link href="#about"><IoIosArrowDown size={47} className='ml-5 max-md:hidden  text-accent/50 py-3 px-2 bg-white border rounded-full hover:border-accent/50 hover:text-accent transition duration-300'/></Link> */}
        </div>
        {/* <About />
        <Join />
        <Why />
        <Quote />
        <Contact /> */}
    
    </div>
  )
}

export default Hero