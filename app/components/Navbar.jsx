import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import background from "../../public/navbar-bg.jpg"
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <main className='bg-transparent w-full h-[80px] flex justify-center fixed top-0 z-20'>
            <Image src={background} alt='' fill={true} className='object-cover z-[-5] opacity-[1]'/>
        <div className='max-w-[1580px] w-full h-full flex justify-between items-center px-5'>
            <Link href="/"><div className='text-[#623810]/85 font-light  text-[24px]'><span className='font-semibold text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
            <ul className=' px-5 py-3 rounded-md max-lg:hidden flex items-center gap-3 text-black/50 text-base font-medium'>
                <li className='hover:font-bold  rounded px-4 py-2 cursor-pointer'>YOGA</li>
                <Link href="/sound-healing"><li className='hover:font-bold  rounded px-4 py-2 cursor-pointer'>SOUND HEALING</li></Link>
                <li className='hover:font-bold  rounded px-4 py-2 cursor-pointer'>REIKI</li>
                <li className='hover:font-bold  rounded px-4 py-2 cursor-pointer'>FUNDRAISING</li>
                <li className='hover:font-bold  rounded px-4 py-2 cursor-pointer'>ABOUT</li>
                <li className='hover:font-bold  rounded px-4 py-2 cursor-pointer'>CONTACT</li>
                <li className='hover:font-bold bg-[#b2c0cb]/70 rounded px-4 py-2 cursor-pointer'>UPCOMING RETREATS</li>
            </ul>
            <IoMenuSharp size={30} className='hover:cursor-pointer lg:hidden'/>
        </div>  
    </main>
  )
}

export default Navbar