import React from "react";
import styled from "styled-components";

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
          <h2 className="header__desc">I'm a Front-End Developer.</h2>
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

export const Main = styled.div`
   {
    padding: 0 5em;
    width: 100%;
    filter: blur(8px);
    This filter I need to apply on sideBar(true) @media (max-width: 768px) {
      & {
        padding: 0 2em;
      }
    }
  }
`;
