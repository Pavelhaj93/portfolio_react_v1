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
            <h2
              className="about__title heading"
              data-aos="fade-up"
              data-aos-once="true"
            >
              01.
              <span
                className="heading__span"
                data-aos="fade-up"
                data-aos-once="true"
              >
                {" "}
                About Me
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <strong>My name is Pavel Hajduch.</strong> I am a front-end web
              developer and enjoy learning new trends.
              <strong>
                {" "}
                I am developing user interfaces in JavaScript and React and I
                have a basic experience with PHP/Laravel and MySQL.
              </strong>
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
              I am open to learning new technologies and enjoy working with
              people
              <span className="about__underline">
                {" "}
                who are as passionate about all web-related as me
              </span>
              .
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
              I would like to work for clients all around the world but
              currently I am based in Prague, Czech Republic.
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
              I like travelling, nature, crossfit and snowboarding. If I do not
              develop, you can also meet me trekking in the mountains.
            </p>
            <br />
            <h4
              className="about__cta"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              Get in touch and let's do something great together.
            </h4>
            <br />
            <br />
            <a
              href="#contact"
              className="button"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
            >
              Contact me
            </a>
          </div>
          <div
            className="about__image__wrapper"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-once="true"
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
