import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';


function Contact() {
  return (
    <main className='px-5'>
    <div id="contact" className='bg-[#F0EDEA] scroll-mt-[130px] md:scroll-mt-[180px] text-center w-full max-w-[1080px] flex flex-col items-center justify-center mx-auto p-10 pb-20 rounded-lg bg-white/85 shadow-box mt-20 md:mt-40  md:mb-[200px]'>
        
        <h1 className='text-accent font-semibold text-2xl md:text-5xl my-10 md:mt-10 md:mb-20 uppercase'>Contact Hannah</h1>
        <p className='text-justify mb-3 text-accent font-medium text-lg md:text-xl'>She’d love to hear from you!</p> 
        <p className=' mb-20 max-w-[800px] max-md:text-base font-light'>Whether you have questions about her yoga sessions, want to book a class, or simply want to connect, please use the information below to get in touch with Hannah.</p>
        {/* <p className='text-justify mb-3 text-accent font-medium text-xl mt-10'>Contact Information</p> */}
        <div className='flex flex-col items-start gap-5'>
            <div  className='flex justify-center items-center gap-5 hover:scale-[1.05]  cursor-pointer transition duration-300'>
                <Link target="_blank" href="https://api.whatsapp.com/send?phone=353877622193&text=Hello+Hannah,+ I´m interested+in+your+yoga´s+services&app_absent=0"><FaWhatsapp size={30} className='text-accent'/></Link>
                <p className=''>+353877622193</p>
            </div> 
            <div  className='flex justify-center items-center gap-5 hover:scale-[1.05]  cursor-pointer transition duration-300'>
                <MdOutlineEmail size={30} className='text-accent'/>
                <p className=''>eagnawithhannah@gmail.com</p>
            </div> 
            {/* <p className='text-justify mb-3 text-accent font-medium text-xl mt-10'>Connect on Social Media</p> */}
            <div className='flex justify-start items-center gap-5 hover:scale-[1.05]  cursor-pointer transition duration-300'>
                <Link href="https://www.instagram.com/eagnawithhannah/"><AiOutlineInstagram size={30} className='text-accent'/></Link>
                <Link href="https://www.instagram.com/eagnawithhannah/"><p className=''>@eagnawithhannah</p></Link>
            </div>
        </div>
        <div className='flex flex-col items-center mt-20 w-full'>
            <p className='text-justify mb-3 text-accent font-medium text-lg md:text-xl'>Get in touch</p> 
            <p className=' mb-20 max-md:text-base font-light'>Alternatively you can fill out the form below, and Hannah will get back to you as soon as possible.</p>
            <div className=''>
                {/* <form  action="https://google.com" ref={form} onSubmit={sendEmail}>
                     */}
                <form className='flex flex-col gap-5 w-full'>
                    <input  type='text' placeholder='Name'  name="user_name" className='py-3 px-5 border rounded bg-white border-accent/30 focus:outline-none  text-accent text-sm focus:border-accent leading-tight'/>
                    <input type='email' placeholder='Email'  name="user_email" className='py-3 px-5 border rounded bg-white border-accent/30 focus:outline-none  text-accent text-sm focus:border-accent leading-tight'/>
                    <input type='number' placeholder='Phone number (optional)' data-aos='flip-up' className='py-3 px-5 border rounded focus:outline-none bg-white border-accent/30  text-accent text-sm focus:border-accent leading-tight'/>
                    <textarea   cols='30' placeholder='Message' rows='10'  name='message'className='py-3 px-5 border rounded focus:outline-none bg-white border-accent/30 resize-none  text-accent text-sm focus:border-accent leading-tight'></textarea>
                    <button  type="submit" value="Send" className='py-3 px-5 font-medium  bg-[#EADDD4]/50 text-accent rounded hover:bg-[#EADDD4]'>Send Message</button>
                </form>
            </div>
            <div className='flex flex-col items-center max-md:mt-10'>
                <p className='text-accent text-left mt-10 font-medium mb-3'>Don´t hesitate to reach out!</p>
                <p className='font-light'>I look forward to helping you on your yoga journey.</p>
                <p className='text-accent font-medium mt-3 text-xl'>Namaste, Hannah</p>
            </div>
        </div>
    </div>
    </main>
  )
}

export default Contact