import React from 'react'
import Image from 'next/image'
// import background from "../../public/section-background.jpg"
import background from "../../public/section-background.jpg"


function Section() {
  return (
    <main className='w-full h-screen '>
            <Image src={background} alt='background' className='object-cover h-screen z-[-5]' />
        <div className='relative'>
            <h1>What is Sound Healing?</h1>
        </div>
    </main>
  )
}

export default Section