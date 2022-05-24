import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const skills = [
    {
      name: "HTML",
      path: "/img/html.png",
      delay: "200"
    },
    {
      name: "CSS",
      path: "/img/css.png",
      delay: "400"
    },
    {
      name: "Javascript",
      path: "/img/javascript.png",
      delay: "100"
    },
    {
      name: "React.js",
      path: "/img/react.png",
      delay: "300"
    },
    {
      name: "Typescript",
      path: "/img/typescript.png",
      delay: "600"
    },
    {
      name: "Git",
      path: "/img/git.png",
      delay: "500"
    },
    {
      name: "PHP",
      path: "/img/php.png",
      delay: "600"
    },
    {
      name: "Laravel",
      path: "/img/laravel.png",
      delay: "200"
    },
    {
      name: "MySQL",
      path: "/img/mysql.png",
      delay: "300"
    },
    {
      name: "Sass",
      path: "/img/sass.png",
      delay: "100"
    },
    {
      name: "Next.js",
      path: "/img/nextjs.png",
      delay: "100"
    },
    {
      name: "Sanity",
      path: "/img/sanity.png",
      delay: "500"
    },
    {
      name: "Stripe",
      path: "/img/stripe.png",
      delay: "300"
    },
    {
      name: "Figma",
      path: "/img/figma.png",
      delay: "400"
    },
    {
      name: "Photoshop",
      path: "/img/photoshop.png",
      delay: "100"
    },
    {
      name: "Wordpress",
      path: "/img/wordpress.png",
      delay: "400"
    },
    {
      name: "npm",
      path: "/img/npm.png",
      delay: "250"
    },
    {
      name: "SEO",
      path: "/img/seo.png",
      delay: "600"
    },
  ];

  return (

    <>
      <section id="skills" className="skills">
        <h2
          className="skills__title heading"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          02.<span className="heading__span"> Tech Skills</span>
        </h2>
        <div className="skills__container">
          {skills.map((skill) => {
            return (
              <div
                className="skill"
                data-aosd-anchor-placement="bottom-bottom"
                data-aos="fade-up"
                data-aos-delay={skill.delay}
              >
                <h4 className="skill__title">{skill.name}</h4>
                <img src={skill.path} alt={skill.name} className="skill__img" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Skills;
