//DEPENDENCIES
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


//COMPONENTS


//PICTURES
import background from "../../public/navbar-bg3.jpg"


//ICONS
import { IoMenuSharp } from "react-icons/io5";








function Navbar() {
  return (
    <main className='bg-transparent w-full h-[80px] flex justify-center fixed top-0 z-20'>
        
        <Image src={background} alt='' fill={true} className='object-cover z-[-5] opacity-[1]'/>
        <div className='max-w-[1580px] w-full h-full flex justify-between items-center px-5'>
            <Link href="/"><div className='text-[#623810]/85 hover:scale-[1.05] transition duration-300 font-light  text-[24px]'><span className='font-semibold text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
            <ul className=' px-5 py-3 rounded-md max-lg:hidden flex items-center gap-3 text-black/50 text-base font-medium'>
                <Link href="/yoga"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>YOGA</li></Link>
                <Link href="/reiki"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>REIKI</li></Link>
                <Link href="/sound-healing"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>SOUND HEALING</li></Link>
                <li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>FUNDRAISING</li>
                <Link href="#about"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>ABOUT</li></Link>
                <Link href="#contact"><li className='hover:text-white/85 transition duration-300  rounded px-4 py-2 cursor-pointer'>CONTACT</li></Link>
                <li className='hover:text-accent transition duration-300 bg-white/85 rounded px-4 py-2 cursor-pointer'>UPCOMING RETREATS</li>
            </ul>
            <IoMenuSharp size={30} className='hover:cursor-pointer lg:hidden'/>
        </div>  
    
    </main>
  )
}

export default Navbar