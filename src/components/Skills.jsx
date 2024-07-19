import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import java from '../assets/java.png'
import mysql from '../assets/sql.png'


  const Skills = () => {
    const softSkills = [
      { name: 'Time Management', percentage: 80 },
      { name: 'Communication', percentage: 90 },
      { name: 'Teamwork', percentage: 85 },
      { name: 'Problem Solving', percentage: 75 },
      { name: 'Adaptability', percentage: 70 },
    ];
  
    return (
      <div id='skills' className='pt-20 dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] text-white py-12 max-w-[1200px] mx-auto'>
        <div className='text-center mb-8'>
          <h4 className='text-3xl font-bold text-black dark:text-white mb-14'>
            Technical Skills
          </h4>
        </div>
  
        <div className='grid grid-cols-3 gap-8 place-items-center md:flex md:justify-between md:items-center'>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={html} alt='HTML' />
            <p className='mt-2 text-black dark:text-white'>HTML</p>
          </div>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={css} alt='CSS' />
            <p className='mt-2 text-black dark:text-white'>CSS</p>
          </div>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={javascript} alt='JavaScript' />
            <p className='mt-2 text-black dark:text-white'>JavaScript</p>
          </div>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={react} alt='React' />
            <p className='mt-2 text-black dark:text-white'>React</p>
          </div>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={tailwind} alt='Tailwind CSS' />
            <p className='mt-2 text-black dark:text-white'>Tailwind CSS</p>
          </div>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={java} alt='Java' />
            <p className='mt-2 text-black dark:text-white'>Java</p>
          </div>
          <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={mysql} alt='MySQL' />
            <p className='mt-2 text-black dark:text-white'>MySQL</p>
          </div>
        </div>
  
        <div className='mt-24'>
          <h4 className='text-3xl font-bold text-black dark:text-white mb-8 text-center'>
            Soft Skills
          </h4>
          <div className='flex flex-col gap-4'>
            {softSkills.map((skill, index) => (
              <div key={index} className='w-full flex items-center'>
                <span className='w-1/4 text-left text-black dark:text-white'>{skill.name}</span>
                <div className='w-1/2 bg-gray-300 dark:bg-gray-700 rounded-full h-1.5 relative'>
                  <div
                    className='bg-blue-600 h-1.5 rounded-full dark:bg-blue-400'
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <span className='w-1/6 text-right ml-2 text-black dark:text-white'>{skill.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;


