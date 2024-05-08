import React from 'react'

function Navbar() {
  return (
    <main className='bg-[#EADDD4] w-full h-[80px] flex justify-center'>
        <div className='max-w-[1280px] w-full h-full flex justify-between items-center'>
            <div className='text-[#623810] font-medium text-xl'><span className='font-bold'>EAGNA</span> WITH HANNAH</div>
            <ul className='flex items-center gap-7 text-[#623810] font-medium'>
                <li className='hover:font-bold cursor-pointer'>CONTACT</li>
                <li className='hover:font-bold cursor-pointer'>ABOUT</li>
                <li className='hover:font-bold cursor-pointer'>YOGA</li>
                <li className='hover:font-bold cursor-pointer'>REIKI</li>
                <li className='hover:font-bold cursor-pointer'>SOUND HEALING</li>
                <li className='hover:font-bold cursor-pointer'>FUNDRAISING</li>
                <li className='hover:font-bold cursor-pointer'>UPCOMING RETREATS</li>
            </ul>
        </div>
    </main>
  )
}

export default Navbar