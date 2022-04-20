import React from 'react'

function AboutMe() {
  return (
    <>
        <section id="about" className="about">
           
            <div className="about__desc"> 
                <h2 className="heading">About me</h2> 
                <p>
                <strong>My name is Pavel Hajduch.</strong> I am a front-end web
                developer and enjoy learning new trends.
                <strong> I am developing user interfaces in JavaScript and React and I have a basic experience with PHP/Laravel and MySQL.</strong>
                </p>
                <br />
                <p>
                I am open to learning new technologies and enjoy working with people
                <span className="about__underline"> who are as passionate about all web-related as me</span>.
                </p><br />
                <p>
                I would like to work for clients all around the world but currently I am
                based in Prague, Czech Republic.
                </p><br />
                <p>
                I like travelling, nature, crossfit and snowboarding. If I do not develop, you can
                also meet me trekking in the mountains.
                </p><br />
                <h4 className="about__cta">
                Get in touch and let's do something great together.
                </h4><br /><br />
                <a href="#contact" className="button">Contact me</a>
            </div>
            <div className="about__image__wrapper">
                <img 
                    src="/img/profilepicture.jpg"
                    alt="aboutimage"
                    className="about__image"
                />
            </div>
           
        </section>
    </>
  )
}

export default AboutMe