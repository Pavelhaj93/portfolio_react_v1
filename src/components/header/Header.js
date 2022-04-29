import React from "react";

function Header() {
  return (
    <>
      <header id="header" className="header">
        <div className="header__container">
          <h1 className="header__title">
            Hi, my name is <br />
            <a href="#about" className="header__link">
              Pavel Hajduch.
            </a>
          </h1>
          <h2 className="header__desc">I'm a Front End Web Developer.</h2>
          <p className="header__text">
            I specialize in designing and building digital experiences.
            Currently, I'm focused on building accessible, gaming oriented
            platform connecting people.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
