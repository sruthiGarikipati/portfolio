import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { MdOutlineNightlight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className='px-0 2xl:px-40'>
      <div className='w-full flex items-center justify-between py-4 px-10'>
        <Link to="/" className='text-2xl font-bold text-blue-500 cursor-pointer'>PORTFOLIO</Link>
        <ul className='hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200'>
          <li className='cursor-pointer hover:text-blue-500'>
            <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer hover:text-blue-500'>
            <Link to="/about">About</Link>
          </li>
          <li className='cursor-pointer hover:text-blue-500'>
            <Link to="/skills">Skills</Link>
          </li>
          <li className='cursor-pointer hover:text-blue-500'>
            <Link to="/experience">Experience</Link>
          </li>
          <li className='cursor-pointer hover:text-blue-500'>
            <Link to="/projects">Projects</Link>
          </li>
          <li className='cursor-pointer hover:text-blue-500'>
            <Link to="/login">Signup & Login</Link>
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
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/skills" onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/experience" onClick={toggleMenu}>
            Experience
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            Signup & Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;










