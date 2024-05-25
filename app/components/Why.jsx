import React from 'react'

function Why() {
  return (
    <main id="" className='bg-[#F0EDEA] mt-20 md:mt-40 text-center w-full max-w-[1080px] flex flex-col items-center justify-center mx-auto p-5 bg-white/85 shadow-box rounded-lg'>

        <div className='flex flex-col items-center mt-10 md:mt-20 text-accent px-5'>
            <h3 className='text-accent font-bold text-3xl md:text-5xl mb-10 max-md:mb-20'>Why Practice with Hannah?</h3>
            <div className='flex max-md:flex-col justify-center items-center gap-10 mb-20'>
                <div className='p-5 border rounded-full md:mt-20 w-[300px] min-h-[300px] flex flex-col items-center justify-start pt-20 bg-background/20'>
                    <h3 className='mb-7 text-accent font-medium text-xl'>Expert Guidance</h3>
                    <p className='text-center text-base font-light'>Benefit from Hannah&apos;s extensive training and years of teaching experience.</p>
                </div>
                <div className='p-5 border rounded-full md:mt-20  w-[300px] min-h-[300px] flex flex-col items-center justify-start pt-20 bg-background/40'>
                    <h3 className='mb-7 text-accent font-medium text-xl'>Personalized Attention</h3>
                    <p className='text-center text-base font-light'>Whether in private or group sessions, Hannah tailors her instruction to meet your individual needs.</p>
                </div>
                <div className='p-5 border rounded-full md:mt-20 w-[300px] min-h-[300px] flex flex-col items-center justify-start pt-20 bg-background/60'>
                    <h3 className='mb-7 text-accent font-medium text-xl'>Supportive Community</h3>
                    <p className='text-center text-base font-light'>Join a welcoming and inclusive community where you can grow and thrive.</p>
                </div>
            </div>
        
        </div>
    </main>
  )
}

export default Why