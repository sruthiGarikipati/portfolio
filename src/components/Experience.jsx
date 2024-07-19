

import React from 'react'

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Intern',
      company: 'Kodnest-EduTech',
      duration: 'Aug 2023 - Feb 2024',
      description: 'Completed a comprehensive Full Stack Development Course at KODNEST Bangalore,which covers frontend and backend technologies,frameworks,and programming languages.'
    },
    {
      role: 'SDE Intern',
      company: 'Akcepted',
      duration: 'July 2024 - present',
      description: 'Assisted in creating responsive web pages, enhancing website functionality, and optimizing performance. Gaining Experience in different Methodol0gies'
    }
  ];

  return (
    <div id='experience' className='pt-20 dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] text-white py-12 w-full'>
      <div className='text-center mb-8'>
        <h4 className='text-3xl font-bold text-black dark:text-white mb-14'>
          Experience
        </h4>
      </div>
      <div className='grid gap-8 md:grid-cols-2 max-w-[1200px] mx-auto'>
        {experiences.map((exp, index) => (
          <div key={index} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
            <h5 className='text-2xl font-bold text-black dark:text-white mb-2'>{exp.role}</h5>
            <h6 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-1'>{exp.company}</h6>
            <p className='text-md text-gray-600 dark:text-gray-400 mb-3'>{exp.duration}</p>
            <p className='text-md text-gray-700 dark:text-gray-200'>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
