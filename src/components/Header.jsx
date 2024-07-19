
import React from 'react';
import Profile from '../assets/picc.jpg';

const Header = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row px-4 md:px-6 gap-8 py-10 items-center justify-center">
      <div className="flex flex-col mb-10 lg:mb-0 lg:w-1/2">
        <span className="text-base font-bold text-orange-700">FULL-STACK DEVELOPER</span>
        <div className="flex gap-2 items-center my-3">
          <h1 className="text-gray-800 dark:text-neutral-100 text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
            I'm a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold px-3 py-1 text-center">Software</p>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
          Developer
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-black dark:text-gray-100 mt-3 md:mt-5">
          My Name is Sruthi Garikipati, a tech graduate with a passion for web development and design.
        </p>
        <div className="mt-5 md:mt-8 flex gap-5 md:gap-8">
          <a
            href="https://drive.google.com/open?id=14hq9nC_16TeW8GX-qtF4jtzXLdvhbvtG&usp=drive_fs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-700 text-base md:text-lg text-white font-semibold rounded-md py-2 px-4 md:py-3 md:px-5"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border border-gray-600 dark:border-gray-200 relative flex items-center justify-center overflow-hidden">
          <img src={Profile} alt="Profile" className="w-auto h-full absolute top-0 left-0 right-0 bottom-0 m-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;



