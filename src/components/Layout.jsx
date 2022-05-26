import React from "react";

import AboutMe from "./aboutme/AboutMe";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import { useStateContext } from "../context/StateContext";

const Layout = () => {
    const { sidebar } = useStateContext()

  return (
    <>
      <div className={sidebar ? "blur" : "App"}>
          <Header />
          <AboutMe />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
      </div>
    </>
  );
};

export default Layout;
