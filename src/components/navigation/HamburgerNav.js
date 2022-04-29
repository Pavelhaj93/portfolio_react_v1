import React from "react";
import styled from "styled-components";

function HamburgerNav({ screenSize, sidebar, showSidebar }) {
  return (
    <>
      <div
        className={screenSize[0] <= 800 ? "hamburger__wrapper" : "hidden"}
        onClick={() => showSidebar()}
      >
        <HambIcon sidebar={sidebar}></HambIcon>
      </div>
    </>
  );
}

export default HamburgerNav;

const HambIcon = styled.div`
  width: 30px;
  height: 1px;
  background-color: var(--greenish-color);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 107, 47, .2);
  z-index: 20;
  transition-delay: ${({ sidebar }) => (sidebar ? `0.12s` : `0s`)};
  // transform: rotate(${({ sidebar }) => (sidebar ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${({ sidebar }) =>
      sidebar ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  

  &::before {
    content: "";
    position: absolute;
    width: 40px;
    bottom: 15px;
    left: 10px;
    height: 1px;
    background-color: var(--greenish-color);
    border: 5px;
    box-shadow: 0 2px 5px rgba(255, 107, 47, .2);
    transition: all .5s ease-in-out;
    transform: translateY(-16px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    top: 15px;
    left: 30px;
    height: 1px;
    background-color: var(--greenish-color);
    border: 5px;
    box-shadow: 0 2px 5px rgba(255, 107, 47, .2);
    transition: all .5s ease-in-out;
    transform: translateY(16px);
  }

  &::before {
    // width: ${({ sidebar }) => (sidebar ? `50%` : `80%`)};
    // bottom: ${({ sidebar }) => (sidebar ? `15px` : `-10px`)};
    // // left: ${({ sidebar }) => (sidebar ? `10px` : `-15px`)};
    // opacity: ${({ sidebar }) => (sidebar ? 1 : 0)};
    // transition: all 0.5s ease-in-out;
  }

  // &::after {
    // width: ${({ sidebar }) => (sidebar ? `50%` : `80%`)};
  //   top: ${({ sidebar }) => (sidebar ? `0` : `30px`)};
  //   left: ${({ sidebar }) => (sidebar ? `-10px` : `30px`)};
    // transform: rotate(${({ sidebar }) => (sidebar ? `-135deg` : `-0`)});
  //   // transition: ${({ menuOpen }) =>
    menuOpen ? "var(--ham-after-active)" : "var(--ham-after)"};
  }


`;
