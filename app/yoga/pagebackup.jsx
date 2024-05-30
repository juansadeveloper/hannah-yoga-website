//DEPENDENCIES
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
import FooterSection from '../components/FooterSection'



//IMAGES
import background from "../../public/section-background.jpg"
import one from "../../public/sound-healing/one.jpeg"
import two from "../../public/sound-healing/two.jpeg"
import yogaOne from "../../public/yoga/five.jpeg"
import yogaTwo from "../../public/yoga/three.jpeg"
import five from "../../public/sound-healing/five.jpeg"





function Page() {
  return (
    <main className='min-h-screen relative flex justify-center px-5'>

        <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed flex items-center justify-center px-5'>
                <div className='flex items-center justify-between  w-full max-w-[1500px]'>
                    <Link href="/"><div className='text-[#623810]/85 font-light  md:text-[24px] hover:scale-[1.05] transition duration-300'><span className='font-semibold md:text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
                    <div className='flex max-md:flex-col md:gap-5 items-center'>
                        <h1 className='text-[15px] md:text-[24px] font-bold text-[#623810]/85'> YOGA</h1>
                        <button className='px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book a session</button>
                        {/* <button className='px-3 py-2 bg-white/70 text-[#623810]  hover:bg-[#623810]/85 hover:text-white/80 rounded transition duration-300'>Book a session</button> */}
                    </div>
                </div>
        </div>

        {/* <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed top-[20px] max-w-[1200px] rounded-lg flex items-center justify-center '>
                <div className='flex items-center justify-between  w-full max-w-[900px]'>
                    <Link href="/"><div className='text-[#623810]/85 font-light  text-[24px]'><span className='font-semibold text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
                    <div className='flex gap-5 items-center'>
                        <h1 className='text-[24px] font-bold text-[#623810]/85'>SOUND HEALING</h1>
                        <button className='px-3 py-2 bg-white/70 text-[#623810]  hover:bg-[#623810]/85 hover:text-white/80 rounded transition duration-300'>Book a session</button>
                    </div>
                </div>
        </div> */}

        {/* PUEDO PROBAR UTILIZAR "FILL" CON UNA IMÁGEN MODIFICADA PARA QUE SE ADAPTE */}
        
        {/* <Image src={background} alt='background'  className='absolute top-0 object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[200px]  md:top-[550px] lg:top-[1000px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[400px] md:top-[1100px] lg:top-[2000px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[600px] md:top-[1650px] lg:top-[3000px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[800px] md:top-[2200px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[1000px] md:top-[2750px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[1200px] md:top-[3300px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[1400px] md:top-[3750px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[1600px] md:top-[3300px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[1800px] md:top-[3850px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[2000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[2200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[2400px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[2600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[2800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[3000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[3200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[3400px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[3600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[3800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[3600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[3800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[4000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[4200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[4400px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[4600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[4800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[5000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' />
        <Image src={background} alt='background'  className='absolute top-[5200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}

      
        <div className='flex flex-col justify-center items-center h-screen w-full max-w-[800px] mt-[2400px]  md:mt-[1850px] text-center'>
            <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10'>What is Yoga?</h1>
            <p className='text-[#623810]/85  font-base text-justify md:text-xl md:text-center my-20'>Yoga is a holistic practice that integrates physical postures, breathing techniques, meditation, and ethical principles to promote physical, mental, and spiritual well-being. Originating in ancient India over 5,000 years ago, yoga has evolved into various styles and forms, each emphasizing different aspects of the practice.</p>
            <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10'>Why practice Yoga?</h1>
            <p className='text-[#623810]/85  font-base text-justify md:text-xl md:text-center my-20'>Yoga is a holistic practice that integrates physical postures, breathing techniques, meditation, and ethical principles to promote physical, mental, and spiritual well-being. Originating in ancient India over 5,000 years ago, yoga has evolved into various styles and forms, each emphasizing different aspects of the practice.</p>
            <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10'>Why today?</h1>
            <p className='text-[#623810]/85  font-base text-justify md:text-xl md:text-center my-20'>Yoga is a holistic practice that integrates physical postures, breathing techniques, meditation, and ethical principles to promote physical, mental, and spiritual well-being. Originating in ancient India over 5,000 years ago, yoga has evolved into various styles and forms, each emphasizing different aspects of the practice.</p>
            

            {/* <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10 mb-20 mt-[250px]'>Which practices of Yoga Hannah offers?</h1> */}
            {/* <p className='text-[#623810]/85  font-base text-justify md:text-xl md:text-center'>During a sound healing session, participants often lie down in a comfortable position and allow the sound vibrations to wash over them. As the soothing tones envelop them, they may experience a profound sense of relaxation, clarity, and inner peace. Some people also report experiencing physical sensations, emotional releases, or insights during or after the session.</p> */}

            <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10 mb-20 mt-[250px]'>Benefits of Yoga</h1>
            {/* <p className='text-[#623810]/85 text-justify md:text-xl md:text-center font-base  mb-20'>The benefits of incorporating sound healing into yoga practice are numerous:</p> */}
            <ul className='flex  gap-5 items-center justify-center flex-wrap max-w-[700px]'>
                <li className='px-7 py-10 bg-white text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Physical Health</p></li>
                <li className='px-7 py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Mental Health</p></li>
                <li className='px-7 py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Spiritual Growth</p></li>
                {/* <li className='px-7 py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Emotional Release</p></li> */}
                {/* <li className='px-5 py-10 bg-white rounded text-[#623810] border border-[#623810]/20 font-medium text-center'><p>Stress Reduction</p></li> */}
                {/* <li className='px-5 py-10 bg-white rounded text-[#623810] border border-[#623810]/20 font-medium text-center'><p>Energetic Balance</p></li> */}
                {/* <li className='px-7 py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Enhanced Focus and Clarity</p></li> */}
                <li className='px-7 py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Spiritual Connection</p></li>
            </ul>


            <div className='text-[#623810]/85 text-xl font-base text-center my-[250px] bg-white/80 border py-7 px-5 md:p-20 rounded'>
                <h1 className='font-bold mb-5 text-xl md:text-2xl'>THINK IT THIS WAY:</h1>
                <p className='text-center md:text-xl md:text-center'>Yoga is not just a form of exercise but a comprehensive lifestyle that promotes overall well-being. Whether you seek physical fitness, mental clarity, or spiritual growth, yoga offers tools and techniques to help you achieve a balanced and fulfilling life.</p>
            </div>
            
            <div className='flex flex-col justify-center items-center mb-[200px] w-full'>
                <div className='bg-white/80 border py-7 px-5 md:p-20 rounded'>
                    <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10  md:leading-[50px] text-center'>YOGA<span className='italic font-light'>with Hannah</span></h1>
                    <p className='text-[#623810]/85  font-base text-justify md:text-xl md:text-center my-20'>Discover the transformative power of yoga with personalized guidance from Hannah. Whether you&apos;re a beginner looking to start your yoga journey or an experienced practitioner aiming to deepen your practice, Hannah offers both private and group sessions tailored to meet your individual needs.</p>
                </div>
                <div className='flex items-center mt-[100px] justify-between w-full gap-20'>
                    <Image src={yogaOne} alt='' className='rounded-full w-[400px] h-[400px] object-cover'/>
                    <Image src={yogaTwo} alt='' className='rounded-full w-[400px] h-[400px] object-cover'/>
                </div>
            </div>

            <FooterSection />
       
        </div>
       
        
    </main>
  )
}

export default Page