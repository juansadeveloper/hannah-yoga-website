//DEPENDENCIES
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
// import FooterSection from '../components/FooterSection'
import Footer from '../components/Footer'



//IMAGES
import background from "../../public/section-background.jpg"
import one from "../../public/sound-healing/one.jpeg"
import two from "../../public/sound-healing/two.jpeg"
import yogaOne from "../../public/yoga/five.jpeg"
import yogaTwo from "../../public/yoga/three.jpeg"
import five from "../../public/sound-healing/five.jpeg"

import photo1 from "../../public/background2.jpeg"
// import photo2 from "../../public/yoga/six.jpeg"
import photo2 from "../../public/yoga/yoga5.jpg"
import photo3 from "../../public/yoga/seven.jpeg"
import photo4 from "../../public/yoga/three.jpeg"
import photo5 from "../../public/yoga/five1.jpg"





function Page() {
  return (
    <main className='flex flex-col items-center justify-center'>

        <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed top-0 flex items-center justify-center px-5'>
            <div className='flex items-center justify-between  w-full max-w-[1500px]'>
                <Link href="/"><div className='text-[#623810]/85 font-light  md:text-[24px] hover:scale-[1.05] transition duration-300 text-[18px]'><span className='font-semibold text-[18px] md:text-[24px]'>YOGA</span> WITH HANNAH</div></Link>
                <div className='flex max-md:flex-col md:gap-5 items-center'>
                    {/* <h1 className='text-[15px] md:text-[24px] font-bold text-[#623810]/85'> YOGA</h1> */}
                    <button className='px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book a session</button>
                </div>
            </div>
        </div>

        <section className='min-h-screen flex flex-col justify-center items-center pt-5 px-5 '> 
            <div className='mx-auto my-auto h-full md:max-h-[700px] mt-[135px] w-full grid grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-5 max-w-[1240px]'>
                <div className='col-span-1 row-span-1 bg-[#f5f0ec] p-7 rounded-lg'>
                    <h2 className='text-3xl font-bold mb-7'>What is Yoga?</h2>
                    <p className='font-extralight'>Yoga is a holistic practice that integrates physical postures, breathing  techniques, meditation, and ethical principles to promote physical,  mental, and spiritual well-being. Originating in ancient India over  5,000 years ago, yoga has evolved into various styles and forms, each  emphasizing different aspects of the practice.</p>
                </div>
                <Image src={photo1} alt='yoga-pic' className='md:col-span-2 row-span-1 object-cover w-full h-full rounded-lg'/>
                <Image src={photo2} alt='yoga-pic' className=' md:col-span-2 max-md:row-start-4 row-span-1 object-cover w-full h-full rounded-lg'/>
                <div className='col-span-1 row-span-1 bg-[#f5f0ec] p-7 rounded-lg'>
                    <h2 className='text-3xl font-bold mb-7'>Why practice Yoga?</h2>
                    <p className='font-extralight'>Yoga is a holistic practice that integrates physical postures, breathing  techniques, meditation, and ethical principles to promote physical,  mental, and spiritual well-being. Originating in ancient India over  5,000 years ago, yoga has evolved into various styles and forms, each  emphasizing different aspects of the practice.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mx-auto my-auto h-full md:max-h-[700px] gap-5 max-w-[1240px] mt-5'>
                <Image src={photo3} alt='yoga-pic' className='col-span-1 rounded-lg object-cover w-full h-full max-md:h-[300px] order-2'/>
                <div className='md:col-span-2 bg-[#f5f0ec] p-7 rounded-lg order-1'>
                    <h2 className='text-3xl font-bold mb-3 text-accent'>Why with Hannah?</h2>
                    <p className='text-lg font-light mb-7'>Read what her practitioners are saying:</p>
                    <div className='flex flex-col md:flex-row items-center gap-5'>
                        <p className='font-extralight bg-white/80 p-5 text-sm rounded'>“I wanted to thank you and express my appreciation to your yesterday&apos;s class. Your energy is really amazing. There is so much beauty that you can share -it is unbelievable. I sincerely wish you all the best in your new « trusting it -path» 🙏”</p>
                        <p className='font-extralight bg-white/80 p-5 text-sm rounded'>“I had such a great experience during our 1-1 yoga class! You brought so much care, compassion and fun to the session. Really enjoyed that it was tailored to my needs as it improved my practice loads giving me insight into how poses can be adjusted to suit my body.”</p>
                    </div>
                </div>
            </div>
        </section>
                {/* <div className='h-[30vh] flex flex-col justify-center items-center bg-white/80 border py-7 px-5 md:p-20 rounded w-full   md:max-w-[1240px] mt-20'>
                    <h1 className='text-[#623810]/85  text-2xl md:text-5xl font-bold z-10  md:leading-[50px] text-center'>YOGA<span className='italic font-light'> with Hannah</span></h1>
                    <p className='text-[#623810]/85   font-base text-justify md:text-xl md:text-center mt-5 md:mt-10'>Discover the transformative power of yoga with personalized guidance from Hannah. Whether you&apos;re a beginner looking to start your yoga journey or an experienced practitioner aiming to deepen your practice, Hannah offers both private and group sessions tailored to meet your individual needs.</p>
                </div> */}
        {/* <section className='flex justify-center items-center '></section> */}
        {/* <div className='bg-[#f5f0ec] w-full max-w-[1240px] py-7 flex justify-center items-center rounded-lg my-14'></div> */}
        <section className='min-h-screen flex flex-col justify-center items-center max-md:px-5'>
            <h1 className='font-bold text-3xl mt-40  max-md:text-center text-accent'>BOOK A YOGA CLASS TODAY</h1>
                    <p className='   font-light text-justify md:text-xl md:text-center  mt-10 mb-5 md:mb-10 md:max-w-[1240px]'>Discover the transformative power of yoga with personalized guidance from Hannah. Whether you&apos;re a beginner looking to start your yoga journey or an experienced practitioner aiming to deepen your practice, Hannah offers both private and group sessions tailored to meet your individual needs.</p>
            <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-center gap-10 py-7'>
                <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg  cursor-pointer transition duration-500 shadow hover:bg-[#ede3dd] '>
                    <div>
                        <h1 className='font-bold text-3xl mb-10 text-accent'>Individual Classes</h1>
                        <p className='max-w-[500px] mb-5 font-extralight '>Elevate your yoga journey with private classes tailored exclusively to you or your group. Receive individualized instruction and support from Hannah to deepen your practice and achieve your wellness goals.</p>
                    </div>
                    <Image src={photo4} alt='yoga-pic' className='object-cover w-full h-full max-w-[500px] max-h-[315px] max-md:h-[275px] rounded'/>
                    <button className=' mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book Private Class</button>
                    <button className='mt-5 ml-1 px-2 py-1 md:px-3 md:py-2 bg-transparent rounded   hover:underline font-light text-accent transition duration-300 max-md:tracking-tight'>Get more info</button>
                </div>
                <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg  cursor-pointer transition duration-500 shadow hover:bg-[#ede3dd]'>
                    <div>
                        <h1 className='font-bold text-3xl mb-10 text-accent'>Group Classes</h1>
                        <p className='max-w-[500px] mb-5 font-extralight '>With a variety of styles and levels, each class is designed to inspire and empower practitioners of all backgrounds. Whether you&apos;re a beginner or an experienced yogi, you&apos;ll find a class that meets your needs.</p>
                    </div>
                    <Image src={photo5} alt='yoga-pic' className='object-cover w-full h-full max-w-[500px] max-h-[315px] max-md:h-[275px] rounded'/>
                        <button className='mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book Group Class</button>
                        <button className='mt-5 ml-1 px-2 py-1 md:px-3 md:py-2 bg-transparent rounded   hover:underline font-light text-accent transition duration-300 max-md:tracking-tight'>Get more info</button>
                </div>
            </div>
        </section>
        <section className='flex flex-col justify-center items-center px-5 w-full'>
                <h1 className='font-bold text-center max-md:max-w-[300px]  text-2xl  md:text-3xl mt-40  mb-10 text-accent'>CHOOSE THE TYPE OF YOGA THAT YOU PREFER</h1>
                <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-center gap-8 py-7'>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-md flex-col items-center  cursor-pointer transition duration-500 shadow  max-md:hover:border  max-md:hover:shadow-xl md:hover:scale-[1.03]'>
                        <div>
                            <h1 className='font-bold text-2xl mb-10 text-accent'>Hatha Yoga</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Hatha yoga classes typically include a combination of asanas (physical  postures) and pranayama (breathwork), with an emphasis on relaxation and  stress reduction. The practice aims to create a sense of harmony and  unity within the body, mind, and spirit.</p>
                        </div>  
                        <button className='mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book Hatha Session</button>
                    </div>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-md  cursor-pointer transition duration-500 shadow  max-md:hover:border  max-md:hover:shadow-xl md:hover:scale-[1.03]'>
                        <div>
                            <h1 className='font-bold text-2xl mb-10 text-accent'>Vinyasa Yoga</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>A dynamic style of yoga that synchronizes movement with  breath. In Vinyasa practice, poses flow seamlessly from one to another,  creating a continuous, fluid sequence. Each movement is coordinated, resulting in a rhythmic and meditative  practice.</p>
                        </div>
                        <button className='mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book Vinyasa Session</button>
                    </div>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-md cursor-pointer transition duration-500 shadow  max-md:hover:border  max-md:hover:shadow-xl md:hover:scale-[1.03]'>
                        <div>
                            <h1 className='font-bold text-2xl mb-10 text-accent'>Restorative Yoga</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Restorative yoga is a gentle and nurturing style focused on relaxation  and deep rest. In a restorative yoga practice, props like bolsters,  blankets, and blocks are used to support the body in passive poses held  for extended periods, often up to 20 minutes or more. </p>
                        </div>
                        <button className='mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book restorative session</button>
                    </div>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-md  cursor-pointer transition duration-500 shadow  max-md:hover:border  max-md:hover:shadow-xl md:hover:scale-[1.03]'>
                        <div>
                            <h1 className='font-bold text-2xl mb-10 text-accent'>Ying Yoga</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>In Yin practice, poses are held for longer durations, typically ranging  from one to five minutes or more, allowing for a gentle, sustained  stretch. Yin focuses on relaxation  and surrendering into each posture, encouraging practitioners to cultivate mindfulness.</p>
                        </div>
                        <button className='mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book Ying Session</button>
                    </div>
                </div>
                <div className=' mt-[150px] mb-5 md:mb-20 bg-white/80  py-5 px-5 md:p-10 rounded max-w-[1240px]'>
                <h1 className='text-accent font-bold mb-5 text-xl md:text-2xl text-center'>THINK IT THIS WAY:</h1>
                <p className=' font-light text-justify md:text-xl md:text-center '>Yoga is not just a form of exercise but a comprehensive lifestyle that promotes overall well-being. Whether you seek physical fitness, mental clarity, or spiritual growth, yoga offers tools and techniques to help you achieve a balanced and fulfilling life.</p>
            </div>
        </section>
            {/* <h1 className='text-[#623810]/85 font-bold text-xl md:text-2xl text-center mb-14 '>Main benefits of practicing Yoga</h1>
            <ul className='flex  gap-5 items-center justify-center flex-wrap max-w-[700px] '>
                <li className='px-5 py-7  bg-white text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Physical Health</p></li>
                <li className='px-5 py-7 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Mental Health</p></li>
                <li className='px-5 py-7  bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Spiritual Growth</p></li>
                <li className='px-5 py-7  bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Spiritual Connection</p></li>
            </ul> */}
            <div className='flex flex-col gap-5 justify-center items-center md:mt-[70px] mb-[70px] md:mb-[200px]'>
                <button className='px-7 py-5  bg-accent hover:bg-[#623810]/95 hover:text-white/90 rounded text-white  font-medium min-w-[300px] transition duration-300'>Talk with Hannah</button>
                {/* <button className='px-7 py-5 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium min-w-[300px] transition duration-300'>Talk with Hannah</button> */}
            </div>
      
        <div className='w-full flex flex-col justify-center items-center text-center'>
        <Footer />   
        </div>
       
        
    </main>
  )
}

export default Page