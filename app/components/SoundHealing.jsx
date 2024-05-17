import React from 'react'
import background from "../../public/section-background.jpg"
import Image from 'next/image'

function SoundHealing() {
  return (
    <main className='flex justify-center items-center h-screen relative'>
        <Image src={background} alt='background' fill={true} className='object-cover z-[-5]' />
        <div>
            <h1 className='text-[#623810]/85 text-5xl font-bold'>What is Sound Healing?</h1>
        </div>
    </main>
  )
}

export default SoundHealing