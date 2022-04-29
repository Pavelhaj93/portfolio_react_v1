import React, { useState, useLayoutEffect, useEffect } from "react";
import HamburgerNav from "./HamburgerNav";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

function Navbar() {
  const [screenSize, setScreenSize] = useState([]);

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

  // Hamuberger nav logic
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
      <HamburgerNav
        screenSize={screenSize}
        sidebar={sidebar}
        showSidebar={showSidebar}
      />
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
}

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
  transition: all 1s;

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
