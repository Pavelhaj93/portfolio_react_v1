import React, { useState, useLayoutEffect, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";

import { useStateContext } from "../../context/StateContext";

const Navbar = () => {
  const { sidebar, showSidebar } = useStateContext()
  const [screenSize, setScreenSize] = useState([]);
  const [isOpen, setOpen] = useState(false);

  // Window screenSize effect
  useLayoutEffect(() => {
    window.addEventListener("resize", () => setScreenSize([window.innerWidth]));

    setScreenSize([window.innerWidth]);

    return () =>
      window.removeEventListener("resize", () =>
        setScreenSize([window.innerWidth])
      );
  }, []);

  // Aos animations
  useEffect(() => {
    Aos.init({ startEvent: "DOMContentLoaded", duration: 300 });
  }, []);


  return (
    <>
      <nav className="nav">
        <img src="/img/newlogo.png" alt="Logo" className="nav__logo" />
        <ul className="nav__container">
          <li>
            <a
              href="#about"
              className={screenSize >= 800 ? "nav__link" : "hidden"}
            >
              <span className="nav__number">01. </span>About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={screenSize >= 800 ? "nav__link" : "hidden"}
            >
              <span className="nav__number">02. </span>Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={screenSize >= 800 ? "nav__link" : "hidden"}
            >
              <span className="nav__number">03. </span>Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={screenSize >= 800 ? "nav__link" : "hidden"}
            >
              <span className="nav__number">04. </span>Contact
            </a>
          </li>
        </ul>
      </nav>
      {screenSize <= 800 && (
        <>
          <HamburgerContainer onClick={showSidebar}>
            <Hamburger
              color="var(--greenish-color)"
              toggled={isOpen}
              toggle={setOpen}
            />
          </HamburgerContainer>
        </>
      )}

      <Sidebar sidebar={sidebar}>
        <ul className="nav__sidebar__container">
          <li>
            <a
              href="#about"
              className="nav__sidebar__link"
              onClick={showSidebar}
            >
              <span className="nav__number">01. </span>About me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="nav__sidebar__link"
              onClick={showSidebar}
            >
              <span className="nav__number">02. </span>Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="nav__sidebar__link"
              onClick={showSidebar}
            >
              <span className="nav__number">03. </span>Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav__sidebar__link"
              onClick={showSidebar}
            >
              <span className="nav__number">04. </span>Contact
            </a>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default Navbar;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-170%")};
  width: 70%;
  height: 100vh;
  z-index: 5;
  background-color: var(--lightnavy-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s cubic-bezier(0.645,0.045,0.355,1);

  .nav__sidebar__container {
    display: ${({ sidebar }) => (sidebar ? "flex" : "none")};
    flex-direction: column;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    height: 30%;
  }

  .nav__sidebar__link {
    font-size: 1.5em;
    text-decoration: none;
    color: var(--lightestslate-color);
  }
`;

const HamburgerContainer = styled.div`
   {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 100;
  }
`;

