//DEPENDENCIES
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
import Footer from '../components/Footer'

//IMAGES
import background from "../../public/section-background.jpg"
import one from "../../public/sound-healing/one.jpeg"
import two from "../../public/sound-healing/two.jpg"
import three from "../../public/sound-healing/tree.jpeg"
import four from "../../public/sound-healing/four.jpeg"
import five from "../../public/sound-healing/five.jpeg"





function SoundHealing() {
  return (
    <main className='min-h-screen relative flex justify-center '>

        {/* <Navbar /> */}

        <div className='w-full h-[80px] bg-[#F4E9E0] z-20 fixed flex flex-col items-center justify-center px-5'>
                <div className='flex items-center justify-between  w-full max-w-[1500px]'>
                    {/* <Link href="/"><div className='text-[#623810]/85 font-light  md:text-[24px] hover:scale-[1.05] transition duration-300 max-md:hidden'><span className='font-semibold md:text-[24px]'>EAGNA</span> WITH HANNAH</div></Link> */}
                    <div className='flex flex-col items-start md:flex-row md:gap-3 hover:scale-[1.05] transition duration-300'>
                        <Link href="/"><div className='text-[#623810]/85 font-light text-[16px]  md:text-[24px]  '><span className='text-[16px] font-semibold md:text-[24px]'>EAGNA </span> WITH HANNAH </div></Link>
                    </div>
                    <div className='flex max-md:flex-col md:gap-5 items-center md:min-w-[450px]'>
                        <h1 className='max-md:hidden text-[15px] md:text-[24px] font-bold text-[#623810]/85 w-full'>SOUND HEALING</h1>
                        <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I want to book a sound healing session&app_absent=0" className='text-center w-full px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight '><button >Book a session</button></Link>
                        {/* <button className='px-3 py-2 bg-white/70 text-[#623810]  hover:bg-[#623810]/85 hover:text-white/80 rounded transition duration-300'>Book a session</button> */}
                    </div>
                </div>
        </div>
        <Link href="/"><div className='text-accent md:hidden fixed top-0 mt-[80px] text-center bg-[#F4E9E0] shadow-xl z-20 border-t-2 border-white w-full py-3 font-light text-[16px]  md:text-[24px]  '><span className='text-[16px] font-semibold md:text-[24px]'>SOUND HEALING</span></div></Link>

        {/* <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed top-[20px] max-w-[1200px] rounded-lg flex items-center justify-center '>
                <div className='flex items-center justify-between  w-full max-w-[900px]'>
                <Link href="/"><div className='text-[#623810]/85 font-light  text-[24px]'><span className='font-semibold text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
                <div className='flex gap-5 items-center'>
                <h1 className='text-[24px] font-bold text-[#623810]/85'>SOUND HEALING</h1>
                <button className='px-3 py-2 bg-white/70 text-[#623810]  hover:bg-[#623810]/85 hover:text-white/80 rounded transition duration-300'>Book a session</button>
                </div>
                </div>
            </div> */}


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

      
        <div className='flex flex-col justify-center items-center h-screen w-full  mt-[2150px]  md:mt-[1900px] text-center'>
            
            <section className='max-w-[1000px] px-5'>
                <h1 className='text-accent text-2xl md:text-5xl font-bold z-10'>What is Sound Healing?</h1>
                <p className='  font-base text-justify md:text-xl md:text-center my-10 md:my-20'>Sound healing is a therapeutic practice using vibrations from instruments like singing bowls and tuning forks to promote relaxation and healing. These vibrations resonate with the body, releasing tension and balancing the nervous system. Sound Healing can complement yoga practice by enhancing relaxation and mindfulness.</p>
            <div className='flex max-md:flex-col items-center gap-5 max-md:mt-14'>
                <Image src={one} alt='' className='md:w-[450px] md:h-[450px] w-[300px] h-[300px] object-cover rounded-full border-[6px] border-white shadow-box'></Image>
                <Image src={two} alt='' className='md:w-[450px] md:h-[450px]  w-[300px] h-[300px] object-cover rounded-full border-[6px] border-white shadow-box'></Image>
            </div>
                <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10 mb-10 md:mb-20 mt-[70px] md:mt-[150px]'>What happen in a Sound Healing session?</h1>
                <p className='font-base text-justify md:text-xl md:text-center'>During a sound healing session, participants often lie down in a comfortable position and allow the sound vibrations to wash over them. As the soothing tones envelop them, they may experience a profound sense of relaxation, clarity, and inner peace. Some people also report experiencing physical sensations, emotional releases, or insights during or after the session.</p>
            </section>


            <h1 className='text-accent  max-w-[1080px] text-2xl md:text-5xl font-bold z-10 mb-10 mt-[70px] md:mt-[100px]'>Which benefits do I get by this practice?</h1>
            <p className='px-5 text-justify md:text-xl md:text-center font-base mb-10 md:mb-20'>The benefits of incorporating sound healing into yoga practice are numerous:</p>
            <ul className='flex  gap-5 items-center justify-center flex-wrap max-w-[700px]'>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Deep Relaxation</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Enhanced Meditation</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Physical Healing</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Emotional Release</p></li>
                {/* <li className='px-5 py-10 bg-white rounded text-[#623810] border border-[#623810]/20 font-medium text-center'><p>Stress Reduction</p></li> */}
                {/* <li className='px-5 py-10 bg-white rounded text-[#623810] border border-[#623810]/20 font-medium text-center'><p>Energetic Balance</p></li> */}
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Enhanced Focus and Clarity</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Spiritual Connection</p></li>
            </ul>


            <div className=' max-w-[1000px] text-xl font-base text-center my-[100px] bg-white/80  py-7 px-5 md:p-20 rounded'>
                <h1 className='text-accent font-bold mb-5 text-xl md:text-2xl'>REMEMBER</h1>
                <p className='text-center md:text-xl md:text-center'>By integrating sound healing into yoga practice, you can experience a more profound and holistic approach to well-being, nurturing harmony and balance in body, mind, and spirit.</p>
            </div>

            <div className='border py-7 px-5 md:p-20 rounded w-full bg-[#f5f0ec]'>
                    <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10  md:leading-[50px] text-center'>SOUND HEALING<span className='italic font-light'> with Hannah</span></h1>
                    {/* <p className='text-[#623810]/85  font-base text-justify md:text-xl md:text-center my-20'>Discover the transformative power of yoga with personalized guidance from Hannah. Whether you&apos;re a beginner looking to start your yoga journey or an experienced practitioner aiming to deepen your practice, Hannah offers both private and group sessions tailored to meet your individual needs.</p> */}
            </div>

            <h1 className='text-accent max-w-[1000px] text-xl md:text-5xl font-bold z-10 mb-20 md:leading-[70px] text-center mt-20 md:mt-40'>Trained by the best instructors at <span className='italic font-light'> Academy of Sound Healing</span> <br></br>in India.</h1>

            {/* <h1 className='italic font-light text-[#623810]/85 text-5xl'>Trained by the best instructors at <span className=' font-bold z-10 mb-20'>Academy of Sound Healing</span> in India.</h1> */}

            <div className='flex flex-col md:flex-row justify-center gap-5 px-5'>
                <Image src={three} alt='' className='md:w-[300px] md:h-[500px] object-cover w-full h-[350px] border-[6px] border-white shadow-box'></Image>
                {/* <Image src={four} alt='' className='w-[300px] h-[500px] object-cover'></Image> */}
                <Image src={five} alt='' className='md:w-[300px] md:h-[500px] object-cover w-full h-[350px] border-[6px] border-white shadow-box'></Image>
            </div>
            
            <div className='flex flex-col gap-5 justify-center items-center mt-[120px] mb-[100px] md:mb-[200px]'>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I want to book a sound healing session&app_absent=0"><button className='px-7 py-5 bg-accent hover:bg-[#623810]/95 hover:text-white/90 rounded text-white  font-medium min-w-[300px] transition duration-300'>Book a Sound Healing Session</button></Link>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I would like to talk about sound healing sessions&app_absent=0"><button className='px-7 py-5 bg-white rounded text-accent border border-[#623810]/20 hover:border-[#623810]/50 font-medium min-w-[300px] transition duration-300'>Talk with Hannah</button></Link>
            </div>

            <div className='w-full flex flex-col justify-center items-center text-center'>
                <Footer />   
            </div>
        </div>

        
        
        
    </main>
  )
}

export default SoundHealing