import React from 'react'


function Navbar() {
  return (
    <>
    <nav className="nav">
      <img src="/img/logoph.png" alt="Logo" className="nav__logo" />
      <ul className="nav__container">
        <li><a href="#about" className="nav__link"><span className="nav__number">01. </span>About me</a></li>
        <li><a href="#skills" className="nav__link"><span className="nav__number">02. </span>Skills</a></li>
        <li><a href="#portfolio" className="nav__link"><span className="nav__number">03. </span>Portfolio</a></li>
        <li><a href="#contact" className="nav__link"><span className="nav__number">04. </span>Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar