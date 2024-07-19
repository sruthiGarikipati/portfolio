import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { MdOutlineNightlight } from 'react-icons/md';
import{AiOutlineClose} from 'react-icons/ai';


const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
    return (
      <div className='px-0 2xl:px-40'>
        <div className='w-full flex items-center justify-between py-4 px-10'>
          <a href="/" className='text-2xl font-bold text-blue-500 cursor-pointer'>PORTFOLIO</a>
          <ul className='hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200'>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href="#home">Home</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href="#about">About</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href="#skills">Skills</a>
            </li>
            
            <li className='cursor-pointer hover:text-blue-500'>
              <a href="#experience">Experiences</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href="#projects">Projects</a>
            </li>


          </ul>
          <div className='flex items-center'>
            <button onClick={toggleTheme} className='p-2'>
              {darkMode ? (
                <FiSun size={24} color="white" />
              ) : (
                <MdOutlineNightlight size={24} color="gray" />
              )}
            </button>
            <button onClick={toggleMenu} className='md:hidden p-2'>
              {isOpen ? (
                <AiOutlineClose size={26} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <BiMenu size={26} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`} id='mobile-menu'>
          <div className="flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200">
            <a href="#home" onClick={toggleMenu} className='cursor-pointer'>
              Home
            </a>
            <a href="#about" onClick={toggleMenu} className='cursor-pointer'>
              About
            </a>
            <a href="#skills" onClick={toggleMenu} className='cursor-pointer'>
              Skills
            </a>
            <a href="#projects" onClick={toggleMenu} className='cursor-pointer'>
              Projects
            </a>
            <a href="#experience" onClick={toggleMenu} className='cursor-pointer'>
              Experience
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;