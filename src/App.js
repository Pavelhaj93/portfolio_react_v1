
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
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <SocialLeft />
      <SocialRight /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
