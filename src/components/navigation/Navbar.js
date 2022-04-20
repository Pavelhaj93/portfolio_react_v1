import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="nav">
      <img src="/img/logoph.png" alt="Logo" className="nav__logo" />
      <ul className="nav__container">
        <li><a href="#header" className="nav__link">Home</a></li>
        <li><a href="#skills" className="nav__link">About me</a></li>
        <li><a href="#portfolio" className="nav__link">Skills</a></li>
        <li><a href="#about" className="nav__link">Portfolio</a></li>
        <li><a href="#contact" className="nav__link">Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar