import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact__container">
          <h2 className="contact__title heading" data-aos="fade-up">
            04. What’s Next?
          </h2>
          <h2
            className="contact__title--underline"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get In Touch
          </h2>
          <p className="contact__text" data-aos="fade-up" data-aos-delay="400">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <a
            href="mailto:pavelhajduch93@gmail.com"
            rel="noreferrer"
            target="blank"
            
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="button">Say Hello</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
