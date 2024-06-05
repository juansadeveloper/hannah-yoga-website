import React from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'

function page() {
  return (
    <main className='h-screen'>

        <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed top-0 flex items-center justify-center px-5'>
            <div className='flex items-center justify-between  w-full max-w-[1500px]'>
                <Link href="/"><div className='text-[#623810]/85 font-light text-[18px]  md:text-[24px] hover:scale-[1.05] transition duration-300'><span className='font-semibold text-[18px] md:text-[24px]'>FUNDRAISING</span> WITH HANNAH</div></Link>
                <div className='flex max-md:flex-col md:gap-5 items-center'>
                    {/* <h1 className='text-[15px] md:text-[24px] font-bold text-[#623810]/85'> YOGA</h1> */}
                    <Link href="/#contact"><button className='px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>CONTACT</button></Link>
                </div>
            </div>
        </div>


        <div className='min-h-[62vh] flex flex-col justify-center md:items-center max-md:mt-32 px-5 text-left'>
            <h1 className='text-accent text-5xl font-bold'>FUNDRAISING</h1>
            <p className='mt-10 md:text-2xl font-light'>At the moment we don´t have any upcoming event.</p>
            <p className='md:text-2xl font-light'>For more information please contact Hannah.</p>

        </div>

        <Footer />

    </main>
  )
}

export default page