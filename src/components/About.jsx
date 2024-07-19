import React from 'react'
import profile from "../assets/pro.jpg"
import { FaUserAlt } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

 const About = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-20 lg:py-20'>
        <div className='w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md'>
        <img src={profile} alt="Profile"
        className='h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125'/>
        

        </div>
        <div className='w-full flex flex-col'>
            <p className='text-3xl font-bold text-black dark:text-white'> About Me</p>
            <p className='text-lg text-black dark:text-gray-400 leading-10'>
                Full-Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions.
                Through internships and freelance work, I've gained practical skills in web development, version control, and client collaboration. 
                Eager to tackle web development/design challenges to achieve lasting impacts on user experience.

            </p>
            <div className='mt-5 2xl:mt-10 flex-wrap gap-5'>
                <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    <FaUserAlt size={14}/>sruthi
                </p>

                <p className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                    < MdOutlineAlternateEmail size={14}/>garikipatisruthi9542@gmail.com
                </p>
                <a href="http://wa.me/+91 9542945442" className='flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer'>
                <BsWhatsapp size={14}/> +91 9542945442
                
                </a>


            </div>

        </div>

    </div>
  )
}
export default About
