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
    },
    {
      name: "CSS",
      path: "/img/css.png",
    },
    {
      name: "Javascript",
      path: "/img/javascript.png",
    },
    {
      name: "React.js",
      path: "/img/react.png",
    },
    {
      name: "Typescript",
      path: "/img/typescript.png",
    },
    {
      name: "Git",
      path: "/img/git.png",
    },
    {
      name: "PHP",
      path: "/img/php.png",
    },
    {
      name: "Laravel",
      path: "/img/laravel.png",
    },
    {
      name: "MySQL",
      path: "/img/mysql.png",
    },
    {
      name: "Sass",
      path: "/img/sass.png",
    },
  ];

  return (
    <>
      <section id="skills" className="skills">
        <h2
          className="skills__title heading"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          02.<span className="heading__span"> Tech Skills</span>
        </h2>
        <div className="skills__container">
          {skills.map((skill) => {
            return (
              <div className="skill" data-aosd-anchor-placement="top-bottom" data-aos="fade-up" data-aos-once="true">
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
