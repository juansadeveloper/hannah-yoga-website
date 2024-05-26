"use client"
//DEPENDENCIES
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


//COMPONENTS


//PICTURES
import background from "../../public/navbar-bg8.jpg"
// import background from "../../public/navbar-bg4.jpg"
// import background from "../../public/navbar-bg5.jpg"


//ICONS
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";








function Navbar() {

  const [nav, setNav] = useState(false)
  function toggleNav() {
      setNav(!nav)
  }


  return (
    <main className='bg-transparent w-full h-[80px] flex justify-center fixed top-0 z-20'>
        
        <Image src={background} alt='' fill={true} className='object-cover z-[-5] opacity-[1]'/>
        <div className='max-w-[1580px] w-full h-full flex justify-between items-center px-5'>
            <Link href="/"><div className='text-[#623810]/85 hover:scale-[1.05] transition duration-300 font-light  text-[24px]'><span className='font-semibold text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
            <ul className=' px-5 py-3 rounded-md max-lg:hidden flex items-center gap-3 text-black/50 text-base font-medium'>
                <li className='hover:text-accent transition duration-300 bg-white/85 rounded px-4 py-2 cursor-pointer'>UPCOMING RETREATS</li>
                <Link href="/yoga"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>YOGA</li></Link>
                <Link href="/reiki"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>REIKI</li></Link>
                <Link href="/sound-healing"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>SOUND HEALING</li></Link>
                <li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>FUNDRAISING</li>
                <Link href="#about"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>ABOUT</li></Link>
                <Link href="#contact"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>CONTACT</li></Link>
            </ul>
            {/* <IoMenuSharp size={30} className='hover:cursor-pointer lg:hidden'/> */}
        {nav ? <AiOutlineClose size={30} className='mlg:hidden cursor-pointer text-accent z-10' onClick={toggleNav}/> : <IoMenuSharp size={30} className='md:hidden cursor-pointer text-accent' onClick={toggleNav} />}
        {nav ? 
            <ul className='lg:hidden absolute top-0 left-0 flex flex-col w-full z-0 bg-gradient-to-b from-[#EADDD4] to-[#F1EDEA]' onClick={toggleNav}>
                <div className='justify-center items-center flex flex-col h-screen pb-20  text-accent text-xl px-5'>
                  <Link href="/yoga"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-1 cursor-pointer'>YOGA</li></Link>
                  <Link href="/reiki"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-1 cursor-pointer'>REIKI</li></Link>
                  <Link href="/sound-healing"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-1 cursor-pointer'>SOUND HEALING</li></Link>
                  <li className='hover:text-white/85 transition duration-300  rounded px-4 py-1 cursor-pointer'>FUNDRAISING</li>
                  <Link href="#about"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-1 cursor-pointer'>ABOUT</li></Link>
                  <Link href="#contact"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-1 cursor-pointer'>CONTACT</li></Link>
                  <li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>UPCOMING RETREATS</li>
                  <div className='w-full h-[3px] bg-white my-7'></div>
                  <div>
                    <p className='text-justify  text-accent font-medium text-xl mb-5'>Connect with Hannah</p>
                    <div  className='flex justify-center items-center gap-5 '>
                      <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I´m interested+in+your+yoga´s+services&app_absent=0"><FaWhatsapp size={30} className='text-accent'/></Link>
                      <MdOutlineEmail size={30} className='text-accent hover:scale-[1.05]  cursor-pointer transition duration-300'/>
                      <Link href="https://www.instagram.com/eagnawithhannah/"><AiOutlineInstagram size={30} className='text-accent hover:scale-[1.05]  cursor-pointer transition duration-300'/></Link>
                    </div> 
                  </div>
                  <div className='w-full h-[3px] bg-white my-7'></div>
                  <Link href="/"><div className='mt-10 text-[#623810]/85 hover:scale-[1.05] transition duration-300 font-light  text-[24px]'><span className='font-semibold text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
                  {/* <p className='mt-20'>#TRANSFORM YOUR LIFE WITH YOGA.</p> */}
                  <p className='mt-3 font-light'>#YOGA IS OUR BEST CHOICE.</p>
                </div>
            </ul>
            : ""}
        </div>  
    
    </main>
  )
}

export default Navbar