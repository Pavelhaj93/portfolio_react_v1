import React, { useState, useLayoutEffect, useEffect  } from 'react'
import HamburgerNav from './HamburgerNav';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Navbar() {

  const [screenSize, setScreenSize] = useState([])

    // Window screenSize effect
    useLayoutEffect(() => {
    
        window.addEventListener('resize', () => setScreenSize([window.innerWidth]));
    
        setScreenSize([window.innerWidth])
    
        return () => window.removeEventListener('resize', () => setScreenSize([window.innerWidth]));
    
    }, []);

  const [burgerStatus, setBurgerStatus] = useState(false);

  // Aos animations
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])


  return (
    <>
    <nav className="nav">
      <img src="/img/logoph.png" alt="Logo" className="nav__logo" />
      <ul className="nav__container">
        <li><a href="#about" className={screenSize >= 800 ? "nav__link" : "hidden"} data-aos="slide-down"><span className="nav__number">01. </span>About me</a></li>
        <li><a href="#skills" className={screenSize >= 800 ? "nav__link" : "hidden"} data-aos="fade-up"><span className="nav__number">02. </span>Skills</a></li>
        <li><a href="#portfolio" className={screenSize >= 800 ? "nav__link" : "hidden"}><span className="nav__number">03. </span>Portfolio</a></li>
        <li><a href="#contact" className={screenSize >= 800 ? "nav__link" : "hidden"}><span className="nav__number">04. </span>Contact</a></li>
        <li><HamburgerNav show={burgerStatus}/></li>
      </ul>
      
    </nav> 
    
    </>
  )
}

export default Navbar