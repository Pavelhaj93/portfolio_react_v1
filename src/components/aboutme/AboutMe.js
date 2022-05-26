import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  
  return (
    <>
      <section id="about" className="about">
        <div className="about__container">
          <div className="about__desc">
            <h2 className="about__title heading" data-aos="fade-up">
              01.
              <span className="heading__span" data-aos="fade-up">
                {" "}
                About Me
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              <strong>My name is Pavel Hajduch.</strong> I am a front-end web
              developer and enjoy learning new trends.<br></br>
              <strong>
                {" "}
                <br></br>I develope user interfaces in React.js and Next.js and
                I also have a basic experience with PHP/Laravel and MySQL
                databases.
              </strong>
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="200">
              I am open to learning new technologies and enjoy working with
              people
              <span className="about__underline">
                {" "}
                who are as passionate about all web-related as me
              </span>
              .
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="300">
              I would like to work for clients all around the world but
              currently I am based in Prague, Czech Republic.
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="400">
              I like travelling, nature, crossfit and snowboarding. If I do not
              develope, you can also meet me trekking in the mountains.
            </p>
            <br />
            <h4 className="about__cta" data-aos="fade-up" data-aos-delay="100">
              Get in touch and let's do something great together.
            </h4>
            <br />
            <br />
            <a href="#contact" data-aos="fade-up" data-aos-delay="600">
              <button className="button">Contact me</button>
            </a>
          </div>
          <div
            className="about__image__wrapper"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              src="/img/profilepicture.JPG"
              alt="aboutimage"
              className="about__image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
