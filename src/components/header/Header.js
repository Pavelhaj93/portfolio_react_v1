import React from 'react'

function Header() {
  return (
    <>
    <header id="header" className="header" >
        <h1 className="header__title">
        Hi, my name is  <br/>
        <a href="#about" className="header__link">Pavel Hajduch</a>.
        </h1>
        <h2 className="header__desc">I'm a Front End Web Developer</h2> 
    </header>
    </>
  )
}

export default Header;