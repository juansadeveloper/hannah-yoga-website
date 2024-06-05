"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"

import background from "../../public/section-background.jpg"
import one from "../../public/about/one.jpg"
import two from "../../public/about/two.jpg"
import three from "../../public/about/three.jpg"



function About() {

    const [toggleOne, setToggleOne] = useState(false)
    const [toggleTwo, setToggleTwo] = useState(false)
    const [toggleThree, setToggleThree] = useState(false)
    const [toggleFour, setToggleFour] = useState(false)

    function switchToggleOne(){
     setToggleOne(!toggleOne)
     setToggleTwo(false)
     setToggleThree(false)
     setToggleFour(false)
    }
    function switchToggleTwo(){
     setToggleOne(false)
     setToggleTwo(!toggleTwo)
     setToggleThree(false)
     setToggleFour(false)
    }
    function switchToggleThree(){
     setToggleOne(false)
     setToggleTwo(false)
     setToggleThree(!toggleThree)
     setToggleFour(false)
    }
    function switchToggleFour(){
     setToggleOne(false)
     setToggleTwo(false)
     setToggleThree(false)
     setToggleFour(!toggleFour)
    }

  


  return (
<main className='px-5'>
    <div>
        <div id="about" className='bg-[#F0EDEA] px-5 mt-20 md:mt-40 scroll-mt-[130px] md:scroll-mt-[200px] text-center w-full max-w-[1080px] flex flex-col justify-center mx-auto p-5 md:p-10 bg-white/85  rounded-lg  '>
    
    
            {/* <Image src={background} alt='background' fill={true} className='object-cover z-[-5]' /> */}
            <h1 className='text-accent font-semibold text-2xl md:text-5xl mt-10 md:my-10 uppercase'>About Hannah</h1>
    
            <div className='flex flex-col-reverse md:flex-col '>
                <p className='md:text-center mt-10 text-justify text-base md:text-lg'>Hannah is a dedicated and compassionate yoga teacher with over a decade of experience in guiding individuals on their yoga journey. Her teaching philosophy centers around the belief that yoga is for everyone, regardless of age, fitness level, or experience. Hannah&apos;s approach is holistic, combining physical postures, breathing techniques, and mindfulness practices to create a well-rounded and enriching yoga experience.</p>
                <div className='flex max-md:flex-col-reverse items-center justify-between gap-5 mt-10 md:mt-20'>
                    <Image src={one} alt='' className='object-cover w-[300px] h-[300px] border-[6px] border-white shadow-box'/>
                    <Image src={two} alt='' className='object-cover w-[300px] h-[300px] border-[6px] border-white shadow-box'/>
                    <Image src={three} alt='' className='object-cover w-[300px] h-[300px] border-[6px] border-white shadow-box'/>
                </div>
            </div>
    
    
            
    
    
        </div>

        <div className='bg-[#F0EDEA] px-5 mt-20 md:mt-40 scroll-mt-[130px] md:scroll-mt-[200px] text-center w-full max-w-[1080px] flex flex-col justify-center mx-auto p-5 md:p-10 bg-white/85  rounded-lg shadow-box  '>
        <div className='text-[#623810]/85 text-2xl md:text-5xl font-light my-10 '><span className='font-semibold text-2xl md:text-5xl'>EAGNA</span> WITH HANNAH</div>
        <div className='md:mt-10 flex flex-col items-center justify-center md:gap-3'>
                <div className='flex gap-3 items-center md:md:justify-center   cursor-pointer w-full  rounded-md py-3 text-center' onClick={switchToggleOne} >
                    {toggleOne ? 
                    <h3 className='transition duration-100 cursor-pointer text-accent font-medium text-lg md:text-xl uppercase ' >Background and Training </h3>
                    : <h3 className='transition duration-100 cursor-pointer hover:text-accent font-normal text-lg md:text-xl uppercase ' >Background and Training </h3>}
                    {toggleOne ? <IoIosArrowUp size={20} className='text-accent'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
                </div>
    
                <p className={toggleOne ? "text-justify italic font-light" : "text-justify hidden"}>Hannah&apos;s journey with yoga began over 15 years ago, and she has since trained with some of the  most respected teachers in the field. She is a certified yoga instructor with advanced training in various styles,   including Hatha, Vinyasa, and Restorative Yoga. Her extensive training ensures that she brings a wealth of knowledge and  expertise to her classes.</p>
                <div className='flex gap-3 items-center md:justify-center  cursor-pointer w-full rounded-md py-3  text-center' onClick={switchToggleTwo}>
                    {toggleTwo ? <h3 className='transition duration-100 cursor-pointer text-accent font-medium text-lg md:text-xl uppercase'>Teaching Style</h3> 
                    : <h3 className='transition duration-100 cursor-pointer hover:text-accent font-normal text-lg md:text-xl uppercase'>Teaching Style</h3>}
                    
                    {toggleTwo ? <IoIosArrowUp size={20} className='text-accent'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
                </div>
    
                <p className={toggleTwo ? "text-justify italic font-light" : "text-justify hidden"}>Hannah&apos;s teaching style is warm, inclusive, and adaptable. She excels at creating a welcoming   environment where students feel supported and encouraged. Her classes are thoughtfully designed to meet the needs of each     individual, whether they are new to yoga or experienced practitioners. Hannah emphasizes alignment, breath awareness, and   mindful movement, ensuring that her students practice safely and effectively.</p>
                <div className='flex gap-3 items-center md:justify-center  cursor-pointer w-full rounded-md py-3  text-center' onClick={switchToggleThree}>
                    {toggleThree ? <h3 className='transition duration-100 cursor-pointer text-accent font-medium text-lg md:text-xl uppercase'>Personal Philosophy</h3> 
                    : <h3 className='transition duration-100 cursor-pointer hover:text-accent font-normal text-lg md:text-xl uppercase'>Personal Philosophy</h3>}
                    
                    {toggleThree ? <IoIosArrowUp size={20} className='text-accent'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
                </div>
                <p className={toggleThree ? "text-justify italic font-light" : "text-justify hidden"}>Hannah believes that yoga is more than just a physical practice; it is a journey of     self-discovery and personal growth. She is passionate about helping her students find balance, inner peace, and a deeper    connection to themselves. Her teachings encourage mindfulness, self-compassion, and a positive outlook on life.</p>
    
                <div className='flex gap-3 items-center md:justify-center cursor-pointer w-full  rounded-md py-3 text-center' onClick={switchToggleFour}>
                    {toggleFour ? <h3 className='transition duration-100 cursor-pointer text-accent font-medium text-lg md:text-xl uppercase'>Community & Connection</h3> 
                    : <h3 className='transition duration-100 cursor-pointer hover:text-accent font-normal text-lg md:text-xl uppercase'>Community & Connection</h3>}
                    
                    {toggleFour ? <IoIosArrowUp size={20} className='text-accent'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
                </div>
                <p className={toggleFour ? "text-justify italic font-light" : "text-justify hidden"}>In addition to teaching, Hannah is committed to building a strong sense of community among her  students. She fosters an environment where everyone feels connected and supported, both on and off the mat. Through  workshops, retreats, and group classes, Hannah creates opportunities for her students to deepen their practice and form  lasting connections.</p>
            </div>
        </div>
    </div>
    </main>
  )
}

export default About