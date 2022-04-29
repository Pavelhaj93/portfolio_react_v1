import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="contact__container">
          <h2 className="contact__title heading">04. What’s Next?</h2>
          <h2 className="contact__title--underline">Get In Touch</h2>
          <p className="contact__text">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <a
            href="mailto:pavelhajduch93@gmail.com"
            rel="noreferrer"
            target="blank"
            className="button"
          >
            Say Hello
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
