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
    <main id="about" className='bg-[#F0EDEA] mt-20 md:mt-40 scroll-mt-[200px] text-center w-full max-w-[1080px] flex flex-col justify-center mx-auto p-5 md:p-10 bg-white/85 border-[1.5px] border-[#4a4036]/20  text-accent rounded  '>


        {/* <Image src={background} alt='background' fill={true} className='object-cover z-[-5]' /> */}
        <h1 className='text-accent font-bold text-3xl md:text-5xl mt-10 md:mt-20 md:mb-20'>About Hannah</h1>

        <div className='flex flex-col-reverse md:flex-col '>
            <p className='md:text-center max-md:mt-20 text-justify text-base md:text-lg'>Hannah is a dedicated and compassionate yoga teacher with over a decade of experience in guiding individuals on their yoga journey. Her teaching philosophy centers around the belief that yoga is for everyone, regardless of age, fitness level, or experience. Hannah&apos;s approach is holistic, combining physical postures, breathing techniques, and mindfulness practices to create a well-rounded and enriching yoga experience.</p>
            <div className='flex max-md:flex-col items-center justify-between gap-5 mt-20'>
                <Image src={one} alt='' className='object-cover w-[300px] h-[300px] '/>
                <Image src={two} alt='' className='object-cover w-[300px] h-[300px] '/>
                <Image src={three} alt='' className='object-cover w-[300px] h-[300px] '/>
            </div>
        </div>


        <div className='mt-20 flex flex-col items-start gap-3'>
            <div className='flex gap-3 items-center   cursor-pointer' onClick={switchToggleOne} >
                <h3 className='text-accent font-medium text-lg md:text-xl ' >Background and Training </h3>
                {toggleOne ? <IoIosArrowUp size={20} className='text-accent/20'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
            </div>

            <p className={toggleOne ? "text-justify italic font-light" : "text-justify hidden"}>Hannah&apos;s journey with yoga began over 15 years ago, and she has since trained with some of the  most respected teachers in the field. She is a certified yoga instructor with advanced training in various styles,   including Hatha, Vinyasa, and Restorative Yoga. Her extensive training ensures that she brings a wealth of knowledge and  expertise to her classes.</p>
            <div className='flex gap-3 items-center  cursor-pointer' onClick={switchToggleTwo}>
                <h3 className='text-accent font-medium text-lg md:text-xl'>Teaching Style</h3>
                {toggleTwo ? <IoIosArrowUp size={20} className='text-accent/20'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
            </div>

            <p className={toggleTwo ? "text-justify italic font-light" : "text-justify hidden"}>Hannah&apos;s teaching style is warm, inclusive, and adaptable. She excels at creating a welcoming   environment where students feel supported and encouraged. Her classes are thoughtfully designed to meet the needs of each     individual, whether they are new to yoga or experienced practitioners. Hannah emphasizes alignment, breath awareness, and   mindful movement, ensuring that her students practice safely and effectively.</p>
            <div className='flex gap-3 items-center  cursor-pointer' onClick={switchToggleThree}>
                <h3 className='text-accent font-medium text-lg md:text-xl'>Personal Philosophy</h3>
                {toggleThree ? <IoIosArrowUp size={20} className='text-accent/20'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
            </div>
            <p className={toggleThree ? "text-justify italic font-light" : "text-justify hidden"}>Hannah believes that yoga is more than just a physical practice; it is a journey of     self-discovery and personal growth. She is passionate about helping her students find balance, inner peace, and a deeper    connection to themselves. Her teachings encourage mindfulness, self-compassion, and a positive outlook on life.</p>

            <div className='flex gap-3 items-center cursor-pointer' onClick={switchToggleFour}>
                <h3 className='text-accent font-medium text-lg md:text-xl'>Community & Connection</h3>
                {toggleFour ? <IoIosArrowUp size={20} className='text-accent/20'/> : <IoIosArrowDown size={20} className='text-accent/50'/>}
            </div>
            <p className={toggleFour ? "text-justify italic font-light" : "text-justify hidden"}>In addition to teaching, Hannah is committed to building a strong sense of community among her  students. She fosters an environment where everyone feels connected and supported, both on and off the mat. Through  workshops, retreats, and group classes, Hannah creates opportunities for her students to deepen their practice and form  lasting connections.</p>
        </div>


    </main>
  )
}

export default About