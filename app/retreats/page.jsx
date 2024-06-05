import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import background from "../../public/retreat/1.jpeg"
import Footer from '../components/Footer'

import photo1 from '../../public/retreat/2.jpeg'
import photo2 from '../../public/retreat/4.jpeg'
import photo3 from '../../public/retreat/5.jpeg'
import meera from '../../public/retreat/meera.jpg'
import hannah from '../../public/retreat/hannah.jpg'

function page() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>


        <div className='w-full h-[80px] bg-[#EADDD4] z-20 fixed top-0 flex items-center justify-center px-5'>
            <div className='flex items-center justify-between  w-full max-w-[1500px]'>
                <Link href="/"><div className='text-[#623810]/85 font-light  md:text-[24px] hover:scale-[1.05] transition duration-300'><span className='font-semibold md:text-[24px]'>EAGNA</span> WITH HANNAH</div></Link>
                <div className='flex max-md:flex-col md:gap-5 items-center'>
                    {/* <h1 className='text-[15px] md:text-[24px] font-bold text-[#623810]/85'> YOGA</h1> */}
                    <h3 className='text-[#623810]/85 max-md:hidden'><span className='font-bold'>Next retreat:</span> 11th to 13th October 2024</h3>
                    <Link href="#prices"><button className='px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book Now</button></Link>
                </div>
            </div>
        </div>

        <section className='relative w-full h-screen flex items-center justify-center'>
            <Image src={background} alt='background'  className='w-full h-full object-cover z-[-5]'/>
            <div className='absolute mt-[180px]  md:mt-[230px] w-full max-w-[350px] bg-white/70  lg:max-w-[1280px] mb-40 flex flex-col gap-5  py-10 md:py-14 px-5 rounded'>
                <h1 className='md:font-light text-xl md:text-5xl text-center'>Retreat In Newport County Mayo, Ireland <br></br>October 11th to 13th</h1>
                <div className='flex flex-col md:flex-row items-center gap-3 mx-auto mt-10'>
                <h1 className='font-bold text-2xl md:text-5xl  text-center md:mt-20 '>UNWIND,  </h1>
                <h1 className='font-bold text-2xl md:text-5xl  text-center md:mt-20 '>RECONNECT & </h1>
                <h1 className='font-bold text-2xl md:text-5xl  text-center md:mt-20 '>FIND INNER PEACE.</h1>
                </div>
                <h1 className='text-lg md:text-3xl text-center mb-5 font-light'>Give yourself a chance to relax because you deserve it.</h1>
                <Link href="#info" className='mx-auto'><button className='md:hover:scale-[1.03] mx-auto max-w-[300px] mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Read More</button></Link>
                {/* <p className='max-w-[1000px] mx-auto text-sm md:text-lg'>A weekend of well-being and reconnecting with nature in the serene countryside of Tiernaur, Nevins Newfield Inn, County Mayo, Ireland. This special weekend retreat offers a chance to reconnect with yourself & discover your inner light. Through yoga, meditation & mindfulness practices, you will learn tools to stay grounded & peaceful in a busy world.</p>
                <p className='max-w-[1000px] mx-auto text-sm md:text-lg'>We will take you on a journey of deep relaxation and spiritual guidance, whilst surrounded by the beautiful vast ocean, mountains & nature that County Mayo has to offer. The core concept of the retreat is to let go of unnecessary burdens & stress so that you connect with your inner power. Once connected, you gain a deeper understanding and clarity to find inner peace.</p>
                <p className='max-w-[1000px] mx-auto text-sm md:text-lg'>Hosted by the luxurious Nevins Newfield Inn, we will make you feel at home, at peace & cared for, so that you can relax, unwind, let go, replenish & rejuvenate, all whilst connecting with your inner power.</p> */}
            </div>
        </section>

                <div id='info' className=' scroll-mt-[20px] md:h-screen flex flex-col justify-center items-center pt-[100px] md:pb-[80px] px-5'>
                    <p className='max-w-[1000px] mx-auto text-sm md:text-xl mb-7 px-2'><span className='font-semibold'>A weekend of well-being and reconnecting with nature</span> in the serene countryside of Tiernaur, Nevins Newfield Inn, County Mayo, Ireland. This special weekend retreat offers a chance to reconnect with yourself & discover your inner light. Through yoga, meditation & mindfulness practices, you will learn tools to stay grounded & peaceful in a busy world.</p>
                    <p className='max-w-[1000px] mx-auto text-sm md:text-xl mb-7 px-2'><span className='font-semibold'>We will take you on a journey of deep relaxation and spiritual guidance</span>, whilst surrounded by the beautiful vast ocean, mountains & nature that County Mayo has to offer. The core concept of the retreat is to let go of unnecessary burdens & stress so that you connect with your inner power. Once connected, you gain a deeper understanding and clarity to find inner peace.</p>
                    <p className='max-w-[1000px] mx-auto text-sm md:text-xl px-2'><span className='font-semibold'>Hosted by the luxurious Nevins Newfield Inn</span>, we will make you feel at home, at peace & cared for, so that you can relax, unwind, let go, replenish & rejuvenate, all whilst connecting with your inner power.</p>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-10 max-w-[1280px]'>
                        <Image src={photo3} alt='photo' className='object-cover max-w-[350px] max-h-[350px] border-4 shadow-lg border-white'/>
                        <Image src={photo2} alt='photo' className='object-cover max-w-[350px] max-h-[280px] border-4 shadow-lg border-white'/>
                        <Image src={photo1} alt='photo' className='object-cover  max-w-[350px] max-h-[350px] border-4 shadow-lg border-white'/>
                    </div>
                </div>
        <section id='prices' className='flex flex-col justify-center items-center px-5 w-full scroll-mb-[2000px]'>
                {/* <h1 className='font-bold text-center max-md:max-w-[300px]   text-2xl  md:text-3xl mt-40  mb-10'>PRICES</h1> */}
                <h1 className='font-light text-center max-md:max-w-[350px]   text-2xl  md:text-3xl mt-40  mb-5 text-[#623810]/85'>CHOOSE <span className='font-light'>THE PRICE & PACKAGE</span> THAT&apos;S BETTER FOR YOU</h1>
                <p className='mb-10 md:text-xl font-normal text-center italic'>Early Bird Discount €150 if booked before 11th August 2024.</p>
                <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-center gap-8 py-7'>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg w-full max-w-[400px]'>
                        <div>
                            <h1 className='font-bold text-2xl mb-2 text-[#623810]/85'>Basic</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Retreat, All Meals & <span className='font-normal'>No Accomodation</span></p>
                        </div>
                        <button className='mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight md:hover:scale-[1.03]'>Book for €550</button>
                    </div>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg w-full max-w-[400px]'>
                        <div>
                            <h1 className='font-bold text-2xl mb-2 text-[#623810]/85'>Practical</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Retreat, All Meals & <span className='font-normal'>Shared Accomodation</span></p>
                        </div>
                        <button className='md:hover:scale-[1.03] mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book for €850</button>
                    </div>
                    <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg flex-col items-center w-full max-w-[400px]'>
                        <div>
                            <h1 className='font-bold text-2xl mb-2 text-[#623810]/85'>Full</h1>
                            <p className='max-w-[550px] mb-5 font-extralight'>Retreat, All Meals & <span className='font-normal'>Private Accomodation</span></p>
                        </div>  
                        <button className='md:hover:scale-[1.03] mt-5 px-2 py-1 md:px-3 md:py-2 bg-white rounded text-[#623810]/85 border border-[#623810]/20 hover:border-[#623810]/50 font-medium transition duration-300 max-md:tracking-tight'>Book for €950</button>
                    </div>
                    
                </div>

                <h1 className='font-light text-center max-md:max-w-[300px] text-[#623810]/85  text-2xl  md:text-3xl mt-40  mb-5'>RETREAT SCHEDULE</h1>
                <p className='mb-10 md:text-xl font-normal text-center italic'>The schedule may vary depending on weather and day to day activities</p>
                <div className='w-full max-w-[1240px] flex flex-col md:flex-row items-start justify-center gap-8 py-7'>
                    <div className='bg-[#f5f0ec]  p-7 rounded-lg'>
                        <div className='max-w-[350px]'>
                            <h1 className='font-bold text-2xl mb-10 text-[#623810]/85'>Friday</h1>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>14:00 - 15:00:</span><span className=''></span> Arrival and Check-in</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>15:00 - 16:30:</span><span className=''></span> Introductory welcome ceremony, tea & movement meditation (dancing)</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>16:30 - 17:30:</span><span className=''></span> Relaxing Yin Yoga & Sound Healing with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>17:45 - 19:00:</span><span className=''></span> Releasing and Healing session with Meera</p>
                            <p className='max-w-[550px] font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>19:30 - 20:30:</span><span className=''></span> Dinner at Nevins</p>
                        </div>
                    
                    </div>
                    <div className='bg-[#f5f0ec]  p-7 rounded-lg'>
                        <div className='max-w-[350px]'>
                            <h1 className='font-bold text-2xl mb-10 text-[#623810]/85'>Saturday</h1>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>7:30 - 8:30:</span><span className=''></span> Morning Hatha Yoga with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>8:30 - 9:30:</span><span className=''></span> Breakfast</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>9:30 - 11:00:</span><span className=''></span> Meditative walk on the Great Western Greenway(depending on weather)</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>11:00 - 13:00:</span><span className=''></span> Stress management and Yogic Philosophy with Meera</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>13:00 - 15:00:</span><span className=''></span> (Optional) Take a dip in the Atlantic Ocean at Mulranny beach, followed by Lunch at Nevins</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>15:30 - 17:00:</span><span className=''></span> Yogic Philosophy to Reconnect with oneself by Meera</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>17:15 - 18:15:</span><span className=''></span> Relaxing Reiki & Restorative workshop with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>18:30 - 19:30:</span><span className=''></span> Yoga Nidra with Meera</p>
                            <p className='max-w-[550px] font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>20:00 - 21:00:</span><span className=''></span> Dinner</p>
                        </div>
                    
                    </div>
                    <div className='bg-[#f5f0ec]  p-7 rounded-lg'>
                        <div className='max-w-[350px]'>
                            <h1 className='font-bold text-2xl mb-10 text-[#623810]/85'>Monday</h1>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>7:30 - 8:30:</span><span className=''></span> Morning Hatha Yoga with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>8:30 - 10:30:</span><span className=''></span> Breakfast followed by (optional) meditative walk around Sand Hill.</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>10:30 - 12:30:</span><span className=''></span> Q&A session & sharing circle</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>12:30 - 13:30:</span><span className=''></span> Sandwiches, canapés, refreshments & reflection</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>13:30 - 15:00:</span><span className=''></span> Final session with Meera</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>15:00 - 16:00:</span><span className=''></span> Relaxing Sound Bath with Hannah</p>
                            <p className='max-w-[550px] mb-5 font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>16:00 - 16:45:</span><span className=''></span> Self-Journaling, Scones & Tea</p>
                            <p className='max-w-[550px] font-extralight bg-white/70 rounded py-3 px-3'><span className='font-medium'>17:00:</span><span className=''></span> Departure</p>
                        </div>
                    
                    </div>
                    
                    
                </div>
                
        </section>
        <section className='max-w-[1200px] w-full'>
            <h1 className='font-bold text-center mx-auto max-md:max-w-[350px] text-[#623810]/85  text-2xl  md:text-3xl mt-40  mb-5'><span className='font-light'>EXPERIENCED GUIDANCE <span className='max-md:hidden'>-</span></span> MEET THE TEAM</h1>
                {/* <p className='mb-10 md:text-xl font-normal text-center'>The schedule may vary depending on weather and day to day activities</p> */}
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start mt-20 md:mt-40 w-full max-w-[1280px]'>
                <div>
                    <h1 className='text-center  mb-14 font-bold text-3xl text-[#623810]/85'>Meera</h1>
                <Image src={meera} alt='meera-pic' className='object-cover max-w-[300px] max-h-[300px] md:max-w-[450px] md:max-h-[450px] rounded-full'/>
                </div>
                <div className='max-w-[600px] text-justify text-[16px] md:text-lg max-md:mt-16 max-md:px-5'>
                    <p className='mb-5'><span className='font-semibold'>We are honored to welcome Meera, a radiant soul all the way from India, to guide us through this transformative weekend retreat.</span></p> 
                    <p>As the owner of Diya Yoga, a revered yoga teacher training school in Goa, India, Meera brings with her a wealth of knowledge and experience in the ancient art of yoga. Meera will generously share her vast expertise, offering enlightening yogic philosophy classes, yoga nidra sessions, and profound meditations. Her teachings are designed to help you restore mental clarity, rejuvenate your physical, mental, emotional, and spiritual well-being, and cultivate a lasting sense of calmness and inner peace.</p>
                    <p className='mb-5'>Meera&apos;s warm-hearted presence and compassionate guidance will create a nurturing and supportive environment for your journey of self-discovery and inner transformation.</p>
                    <p className='mb-5'>Meera&apos;s journey has been deeply rooted in spirituality since her early years. Raised in the Osho International Ashram in Pune, she delved into both ancient Indian philosophy and modern therapeutic techniques, fostering a profound understanding of these diverse traditions. This foundational knowledge shaped her into a skilled practitioner of yoga, meditation, and various therapeutic modalities.</p>
                    <p className='mb-5'>From Yoga Nidra and Chakra Healing to Dream Dialogue and trauma healing, Meera&apos;s expansive toolkit enables her to guide others toward enhanced well-being & transformative experiences. Over the past two decades, she has shared her wisdom and supported individuals in India, Europe, Israel, and Australia in their quest for peace and personal growth through yoga and therapeutic meditation.</p>
                    <p className='mb-5'>Passionate about enriching others&apos; yoga and meditation experiences, Meera brings a wealth of expertise, including extensive time spent at the OSHO Meditation Resort. By seamlessly blending ancient Indian practices with modern therapeutic techniques, she facilitates transformative experiences for her students.</p>
                    <p>Through retreats, courses, and one-on-one sessions, Meera has empowered countless individuals to deepen their yoga practice, cultivate heightened self-awareness, and uncover an abundant reservoir of love and inner peace.</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center md:items-start mt-40'>
                <div className='max-w-[600px] text-justify text-[16px] md:text-lg max-md:mt-16 max-md:px-5'>
                    <p className='mb-5'><span className='font-semibold'>Hannah Nevin, founder of Eagna, a holistic pursuit focusing on Yoga, Reiki & Sound Healing.</span></p> <p>Hannah has solo traveled the world on a journey of self discovery, transformation & holistic healing. Hannah has trained and teaches at Diya Yoga in Goa, India, Hannah’s classes are perfect to restore balance in your physical, mental, emotional & energetic health. Hannah merges together techniques from multiple traditions, creating a harmonious blend of asana, pranayama, mantras, mudras, meditation, yogic philosophy, advanced anatomy & alignment in her classes. She will guide you through invigorating Hatha morning practice, along with bringing you on deeply relaxing journeys through yin & restorative yoga. She will compliment these practices using reiki, an energetic healing modality, along with sound healing to create a comforting, profound & tranquil experience. Emerge from these transformative experiences feeling rejuvenated, balanced, and aligned as you nurture your body, mind & soul.</p>
                    <p className='mb-5'>Hannah embraces yoga as a way of life, not only through asanas, but through her way of living, leading her to become a dedicated teacher & practitioner. Through her dedication to helping others connect with & heal themselves, Hannah uplifts those who cross her path.</p>
                    <p className='mb-5'>A budding entrepreneur, Hannah is present to listen, to hold space & be there for you before, during & after the weekend ensuring your optimum comfort, feelings of safety, security & peace during this special weekend</p>
                </div>  
                <div>
                    <h1 className='text-center mb-14 font-bold text-3xl text-[#623810]/85'>Hannah</h1>
                <Image src={hannah} alt='meera-pic' className='object-cover max-w-[300px] max-h-[300px] md:max-w-[450px] md:max-h-[450px] rounded-full '/>
                </div>
            </div>

        </section>

       
        <section className='max-w-[1000px] w-full max-md:px-5 max-md:text-justify'>
            <h1 className='font-light mx-auto  text-center max-md:max-w-[350px] text-[#623810]/85  text-2xl  md:text-3xl mt-40 md:mt-[250px]  mb-5'>ACCOMODATION & DINNER</h1>
            <p className='mb-5 mt-20  md:text-xl'><span className='font-semibold'>We will be hosted by the award-winning, Nevins Newfield Inn, who proudly assert themselves as the: “Home of Hospitality.” </span></p><p className='md:text-xl mb-5'>The hotel is set amid beautiful Irish nature overlooking the amazing islands of Clew Bay & Croagh Patrick, whilst the Great Western Greenway & the Nephin Mountains sit peacefully behind the premises. Nevins ensure to go above and beyond, regarding the standard of food & beverages they provide using only fresh & locally sourced produce.</p>
            <p className='mb-5 md:text-xl'>Nevin’s has recently renovated, luxurious bedrooms that feature en suites, double & single beds, televisions with satellite channels, tea & coffee facilities, free WIFI internet access, hairdryers, iron, iron boards & complimentary toiletries. Their guest bedrooms have been designed for ultimate comfort and relaxation.</p>
            <p className='mb-5 md:text-xl'>Nevins ensures to provide you a relaxing & revitalizing experience throughout your stay, making you feel at home every step of the way.</p>
        </section>
        
        
        <section className='max-w-[1280px] w-full flex flex-col items-center px-5'>
            <h1 className='font-light text-center max-md:max-w-[300px] text-[#623810]/85  text-2xl  md:text-3xl mt-40  mb-5'>BONUS OFFERS</h1>
            <div className='bg-[#f5f0ec] gap-5 p-7 rounded-lg w-full max-w-[1000px] mt-10 italic md:text-xl'>
                <p className='mb-5'>✅ Discounted Massage Therapy with Specialist Pat Hoban.</p>
                <p className='mb-5'>✅  Bikes available to rent to cycle the Great Western Greenway.</p>
                <p className='mb-5'>✅  Visit the amazing Achill Island or town of Westport which is voted “Best Place to live in Ireland.”</p>
                <p className='mb-5'>✅  Discounted admission for Mulranny Park Inn’s gym, pool & sauna.</p>
                <p className=''>✅  Private Reiki or Sound Healing sessions with Hannah.</p>
            </div>
            
            <div className='max-w-[1000px] text-justify md:text-left pb-14 mx-auto'>
            <h1 className='font-light text-center max-md:max-w-[350px] text-[#623810]/85  text-2xl  md:text-3xl mt-40  mb-5'>EXTRA BOOKING</h1>
            <p className='mt-10 md:text-xl'>If you would like to extend your trip, either before or after the retreat, please reach out to avail of a discounted accommodation package at Nevins Newfield Inn.</p>
            <p className='mt-5 md:text-xl'>For reservations and/or questions about the weekend, please email hannahnevin@gmail.com or book through this <Link href="#" className='underline font-semibold'>link.</Link></p>
            
            </div>
            
        </section>


        <section className='max-w-[1000px] w-full flex flex-col items-center '>
        <h1 className='font-light text-center max-md:max-w-[300px] text-[#623810]/85  text-2xl  md:text-3xl mt-20 md:mt-36  mb-5'>LOCATION</h1>
        {/* <p className='font-light text-center max-md:max-w-[300px] text-[#623810]/85  text-2xl  md:text-3xl mb-5'>Find us in google maps</p> */}
            <div className='flex justify-center items-center my-10 md:h-[600px] w-full max-md:px-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.5758093875834!2d-9.692228123015141!3d53.90374313287146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485970d08065b9ff%3A0xbc43da9cd1e6e9b2!2sNevin&#39;s%20Newfield%20Inn!5e0!3m2!1sen!2snl!4v1717489969380!5m2!1sen!2snl" 
                // width="600" 
                // height="450" 
                className='w-full  h-[300px] lg:h-full'
                style={{border: "0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p className='max-md:px-5 mt-20 text-center font-light text-xl  md:text-[30px] leading-relaxed tracking-tight'>We look forward to welcoming you on your journey to inner peace, where every moment promises to rejuvenate your body, mind, and spirit.<br></br> <span className='font-bold text-accent'>Join us</span> <span className='font-bold text-accent'>in County Mayo, Ireland </span><span className='font-bold text-accent'>for an unforgettable retreat experience</span> filled with tranquility, connection, and self-discovery.</p>
            <button className='mb-20 mt-20 md:mb-40 px-7 py-5 bg-accent hover:bg-[#623810]/95 hover:text-white/90 rounded text-white  font-medium min-w-[300px] transition duration-300'>Join The Retreat</button>
        </section>




        <div className='w-full flex flex-col justify-center items-center text-center'>
        <Footer />   
        </div>

    </main>
  )
}

export default page