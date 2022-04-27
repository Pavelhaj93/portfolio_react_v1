
import Navbar from "./components/navigation/Navbar";
import Header from "./components/header/Header";
import SocialLeft from "./components/social/SocialLeft";
import SocialRight from "./components/social/SocialRight";
import AboutMe from "./components/aboutme/AboutMe";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    <div className="social">
      <Navbar />
      <SocialLeft />
      <SocialRight /> 
    </div>
    </>
    
  );
}

export default App;
