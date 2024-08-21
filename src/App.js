import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import LoginRegister from "./components/LoginRegister";
import ForgotPassword from './components/ForgotPassword';
import Welcome from './components/Welcome';
import UpdatePassword from './components/UpdatePassword';




function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className={`w-full h-full min-h-[100vh] ${darkMode ? 'dark' : ''}`}>
        <Routes>
          {/* Route for Login/Register */}
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/update-password" element={<UpdatePassword />}/>
          
         
        
          
          
          <Route path="/" element={
            <div className='w-full h-full min-h-[100vh]'>
              <div className='dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]'>
                <Navbar 
                  darkMode={darkMode}
                  isOpen={isOpen}
                  toggleMenu={toggleMenu}
                  toggleTheme={toggleTheme}
                />
                <Header />
              </div>
            </div>
          }/>
          <Route path="/about" element={
            <>
              <Navbar 
                darkMode={darkMode}
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                toggleTheme={toggleTheme}
              />
              <About />
            </>
          } />
          <Route path="/skills" element={
            <>
              <Navbar 
                darkMode={darkMode}
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                toggleTheme={toggleTheme}
              />
              <Skills />
            </>
          } />
          <Route path="/experience" element={
            <>
              <Navbar 
                darkMode={darkMode}
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                toggleTheme={toggleTheme}
              />
              <Experience />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Navbar 
                darkMode={darkMode}
                isOpen={isOpen}
                toggleMenu={toggleMenu}
                toggleTheme={toggleTheme}
              />
              <Projects />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;











