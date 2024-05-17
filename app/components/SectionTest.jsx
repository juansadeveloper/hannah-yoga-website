import React from 'react'
import Image from 'next/image'
// import background from "../../public/background.jpeg"
// import background from "../../public/background2.jpeg"
import mainpic from "../../public/background3.jpeg"
// import background from "../../public/background4.jpeg"
import background from "../../public/section-background.jpg"

import Navbar from "../components/Navbar"

function Hero() {
  return (
    <div className='flex justify-center items-center h-screen'>
        {/* <Navbar /> */}
        <Image src={background} alt='background' fill={true} className='object-cover h-screen z-[-5]' />
        <div className='relative flex justify-center'>
          
          <p className='absolute bottom-7 text-center text-xl italic text-[#E6E3E3] rounded p-10'>EMBRACE A BETTER LIFE THROUGH YOGA PRACTICE.</p>
          <p className='absolute bottom-0 text-center text-xl italic text-[#E6E3E3] rounded p-10'>EMBRACE A BETTER YOU.</p>
        </div>
    </div>
  )
}

export default Hero