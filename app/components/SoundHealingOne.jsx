import React from 'react'
import Image from 'next/image'

import background from "../../public/section-background.jpg"

function SoundHealingOne() {
  return (
    <main>
        <Image src={background} alt='background' fill={true} className='object-cover z-[-15]' />
        <div className='flex flex-col justify-center items-center h-screen w-full max-w-[800px] mt-[400px]'>
            
            <h1 className='text-[#623810]/85 text-5xl font-bold z-10 mb-10 mt-20'>What happen in a Sound Healing session?</h1>
            <p className='text-[#623810]/85 text-xl font-base text-center'>During a sound healing session, participants often lie down in a comfortable position and allow the sound vibrations to wash over them. As the soothing tones envelop them, they may experience a profound sense of relaxation, clarity, and inner peace. Some people also report experiencing physical sensations, emotional releases, or insights during or after the session.</p>
            
        </div>
    </main>
  )
}

export default SoundHealingOne