//DEPENDENCIES
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
import Footer from '../components/Footer'

//IMAGES
import background from "../../public/section-background.jpg"
import one from "../../public/reiki/one.jpg"
import two from "../../public/reiki/two.jpg"
import three from "../../public/sound-healing/tree.jpeg"
import four from "../../public/sound-healing/four.jpeg"
import five from "../../public/sound-healing/five.jpeg"







function Page() {
  return (
    <main className='min-h-screen relative flex justify-center '>

        {/* <Navbar /> */}

        <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed flex items-center justify-center px-5'>
                <div className='flex items-center justify-between  w-full max-w-[1500px]'>
                    <Link href="/"><div className='text-[#623810]/85 font-light  md:text-[24px] hover:scale-[1.05] transition duration-300'><span className='font-semibold md:text-[24px]'>REIKI</span> WITH HANNAH</div></Link>
                    <div className='flex max-md:flex-col md:gap-5 items-center'>
                        {/* <h1 className='text-[15px] md:text-[24px] font-bold text-[#623810]/85'>REIKI</h1> */}
                        <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I want to book a reiki session&app_absent=0"><button className='px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book a session</button></Link>
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


        {/* <Image src={background} alt='background'  className='absolute top-0 object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[200px]  md:top-[550px] lg:top-[1000px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[400px] md:top-[1100px] lg:top-[2000px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[600px] md:top-[1650px] lg:top-[2800px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[800px] md:top-[2200px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[1000px] md:top-[2750px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[1200px] md:top-[3300px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[1400px] md:top-[3750px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[1600px] md:top-[3300px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[1800px] md:top-[3850px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[2000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[2200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[2400px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[2600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[2800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[3000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[3200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[3400px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[3600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[3800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[3600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[3800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[4000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[4200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[4400px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[4600px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[4800px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[5000px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}
        {/* <Image src={background} alt='background'  className='absolute top-[5200px] md:top-[4350px] lg:top-[3900px] object-cover z-[-15] ' /> */}

      
        <div className='flex flex-col justify-center items-center h-screen w-full mt-[1650px]  md:mt-[1350px] text-center'>
            <h1 className='text-accent max-w-[1000px] text-2xl md:text-5xl font-bold z-10'>What is Reiki?</h1>
            <p className=' max-w-[1000px]  font-base text-justify md:text-xl md:text-center mt-10 mb-20 md:my-20 px-5'>Reiki is a Japanese healing technique that involves the transfer of universal energy through the practitioner&apos;s palms to the recipient. It&apos;s based on the idea that an unseen &quot;life force energy&quot; flows through us and is what causes us to be alive. If one&apos;s &quot;life force energy&quot; is low, then we are more likely to get sick or feel stress, and if it&apos;s high, we are more capable of being happy and healthy.</p>
            <div className='flex max-md:flex-col gap-5 px-5'>
                <Image src={one} alt='' className='md:w-[450px] md:h-[450px] w-full h-[350px] object-cover border-[6px] border-white shadow-box'></Image>
                <Image src={two} alt='' className='md:w-[450px] md:h-[450px] w-full h-[350px]] object-cover border-[6px] border-white shadow-box'></Image>
            </div>

            <h1 className='text-accent px-5 text-xl md:text-5xl font-bold z-10 mb-10 md:mb-20 mt-[100px] md:mt-[150px]'>What happen in a Reiki session?</h1>
            <p className='max-w-[1000px] font-base text-justify md:text-xl md:text-center px-5'>During a Reiki session, the practitioner places their hands lightly on or just above the recipient&apos;s body, allowing the energy to flow where it is needed most. This gentle touch promotes relaxation, reduces stress, and supports the body&apos;s natural healing processes.</p>

            <h1 className='text-accent text-2xl md:text-5xl font-bold z-10 mb-10 mt-[100px] md:mt-[150px]'>Which benefits do I get by this practice?</h1>
            <p className=' text-justify md:text-xl md:text-center font-base  mb-20 px-5'>The benefits of incorporating sound healing into yoga practice are numerous:</p>
            <ul className='flex  gap-5 items-center justify-center flex-wrap max-w-[700px]'>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Energy Balancing</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Stress Reduction</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Physical Healing</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Emotional Healing</p></li>
                {/* <li className='px-5 py-10 bg-white rounded text-[#623810] border border-[#623810]/20 font-medium text-center'><p>Stress Reduction</p></li> */}
                {/* <li className='px-5 py-10 bg-white rounded text-[#623810] border border-[#623810]/20 font-medium text-center'><p>Energetic Balance</p></li> */}
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Enhanced Meditation</p></li>
                <li className='px-5 py-5 md:px-7  md:py-10 bg-white  text-[#623810]/85 border border-[#623810]/20 font-medium text-center rounded-full max-md:min-w-[272px]'><p>Spiritual Connection</p></li>
            </ul>


            <div className=' text-xl font-base text-center mt-[30px] mb-[100px] bg-white/80 max-w-[1000px] py-7 px-5 md:p-20 rounded'>
                <h1 className='text-accent font-bold mb-5 text-xl max-md:mt-10 md:text-2xl'>CONSIDER THIS</h1>
                <p className='text-center text-lg md:text-xl md:text-center'>Reiki can be a powerful complement to sound healing and yoga practice, as it helps to balance the body&apos;s energy centers, promote emotional and physical well-being, and deepen the connection to one&apos;s inner self. </p>
            </div>


            <div className='border py-7 px-5 md:p-20 rounded w-full max-w-[1000px] bg-[#f5f0ec]'>
                    <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10  md:leading-[50px] text-center'>REIKI<span className='italic font-light'> with Hannah</span></h1>
                    {/* <p className='text-[#623810]/85  font-base text-justify md:text-xl md:text-center my-20'>Discover the transformative power of yoga with personalized guidance from Hannah. Whether you&apos;re a beginner looking to start your yoga journey or an experienced practitioner aiming to deepen your practice, Hannah offers both private and group sessions tailored to meet your individual needs.</p> */}
            </div>
            {/* <h1 className='text-[#623810]/85 text-2xl md:text-5xl font-bold z-10 mb-20 md:leading-[70px] text-center'>Trained by the best instructors at <span className='italic font-light'> Academy of Sound Healing</span> <br></br>in India.</h1> */}

            {/* <h1 className='italic font-light text-[#623810]/85 text-5xl'>Trained by the best instructors at <span className=' font-bold z-10 mb-20'>Academy of Sound Healing</span> in India.</h1> */}

            {/* <div className='flex justify-center gap-5'>
                <Image src={three} alt='' className='md:w-[300px] md:h-[500px] object-cover w-full h-[350px]'></Image>
                <Image src={four} alt='' className='w-[300px] h-[500px] object-cover'></Image>
                <Image src={five} alt='' className='md:w-[300px] md:h-[500px] object-cover w-full h-[350px]'></Image>
            </div> */}
            
            <div className='flex flex-col gap-5 justify-center items-center mt-32 mb-16 md:mt-[150px] md:mb-[150px]'>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I want to book a reiki session&app_absent=0"><button className='px-7 py-5 bg-[#623810]/85 hover:bg-[#623810]/95 hover:text-white/90 rounded text-white  font-medium min-w-[300px] transition duration-300'>Book a Reiki Session</button></Link>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I would like to talk with you about reiki sessions&app_absent=0"><button className='px-7 py-5 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium min-w-[300px] transition duration-300'>Talk with Hannah</button></Link>
            </div>
            


            <div className='w-full flex flex-col justify-center items-center text-center'>
                <Footer />   
            </div>
        
        </div>
        
        
    </main>
  )
}

export default Page