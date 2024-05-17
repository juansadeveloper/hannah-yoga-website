import React from 'react'
import Image from 'next/image'
// import background from "../../public/section-background.jpg"
import background from "../../public/section-background.jpg"

function Section() {
  return (
    <main className='w-full h-screen'>
        <div >
            <Image src={background} alt='background' objectFit='fill' className='object-cover ' />
        </div>
    </main>
  )
}

export default Section