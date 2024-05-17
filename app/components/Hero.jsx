import React from 'react'
import Image from 'next/image'
// import background from "../../public/background.jpeg"
// import background from "../../public/background2.jpeg"
import mainpic from "../../public/background3.jpeg"
// import background from "../../public/background4.jpeg"
import background from "../../public/section-background.jpg"



function Hero() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <Image src={background} alt='background' fill={true} className='object-cover z-[-5]' />
        <div className='relative flex justify-center'>
          <Image src={mainpic} alt='hero-image'  className=' object-cover w-[880px] h-[550px] border-[5px] mt-32'></Image>
          {/* <p className='max-w-[800px] text-center text-2xl font-semibold bg-white/20 rounded p-10'>Remember when the power of love overcomes the love of power, the world will know peace.<br></br> This starts within. This begins with you.</p> */}
          <p className='absolute bottom-7 text-center text-xl italic text-[#E6E3E3] rounded p-10'>EMBRACE A BETTER LIFE THROUGH YOGA PRACTICE.</p>
          <p className='absolute bottom-0 text-center text-xl italic text-[#E6E3E3] rounded p-10'>EMBRACE A BETTER YOU.</p>
        </div>
    </div>
  )
}

export default Hero