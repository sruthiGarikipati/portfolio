import React from 'react';
import shopImage from '../assets/Shop.jpg';
import aI from '../assets/ai.jpg';





const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Store',
      description: 'An online store built with React and Redux for a seamless shopping experience.',
      image: shopImage,  // Use the imported shop image
      demoLink: 'https://example.com/ecommerce-demo',  // Example demo link
    },
    {
      title: 'Securing Data with AI',
      description: 'Using AI to enhance data security.',
      image: aI,  // Use the imported AI image
      demoLink: 'https://example.com/ai-demo',  // Example demo link
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <div id='projects' className='pt-20 dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] text-white py-12 w-full'>
        <div className='text-center mb-8'>
          <h4 className='text-3xl font-bold text-black dark:text-white mb-14'>
            Projects
          </h4>
        </div>
        <div className='flex flex-wrap justify-center'>
          {projects.map((project, index) => (
            <div key={index} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden m-4 max-w-xs'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h5 className='text-2xl font-bold text-black dark:text-white mb-2'>{project.title}</h5>
                <p className='text-sm text-gray-700 dark:text-gray-300 mb-4'>{project.description}</p>
                <a href={project.demoLink} target='_blank' rel='noopener noreferrer' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'>
                  View Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stylish Message Section */}
      <section className='bg-white dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] text-black dark:text-white py-12 text-center'>
        <h2 className='text-3xl font-extrabold mb-4'>
          🚀 Keep Innovating and Achieving! 🚀
        </h2>
        <p className='text-lg font-medium leading-relaxed mb-6'>
          Every project is a step towards greatness. Continue exploring, creating, and pushing the boundaries of what's possible. The journey is as important as the destination!
        </p>
        <a href='#about' className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'>
          Get in Touch
        </a>
      </section>

      {/* Fo
      oter */}
      <footer className='bg-white dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e] text-black dark:text-white py-8'>
        <div className='container mx-auto text-center'>
          <p>&copy; {new Date().getFullYear()} Sruthi Garikipati. All rights reserved.</p>
          <div className='mt-4'>
            <a href='mailto:example@example.com' className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mx-2'>Contact</a>
            <a href='https://www.linkedin.com/in/example' className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mx-2'>LinkedIn</a>
           
          </div>
          <div className='mt-4'>
            <a href='/privacy-policy' className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mx-2'>Privacy Policy</a>
            <a href='/terms-of-service' className='text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mx-2'>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;












