import React from 'react'
import { ReactComponent as External } from '../../assets/external.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';

function PortfolioRight({title, link, description, tech, img, git}) {
  return (
    <>
      <div className="portfolio__right">
        <div className="project__content">
          <p className="project__overline">Featured Project</p>
          <h3 className="project__title">
            <a href={link}>{title}</a>
          </h3>
          <div className="project__description">
            <p>{description}</p>
          </div>
          <ul className="project__tech--list">
              {tech.map((item) => {
                return (
                  <li>{item}</li>
                )
              })
            }
          </ul>
          <div className="project__links">
            <a href={link} className="social__link">
              <External height="20px"/>
            </a>
            {git && <a href={git} className="social__link">
                <GitHub height="20px" />
            </a>}
          </div>
        </div>
        <img src={img} height="350px" alt="vaszubar" className="project__img" />
      </div>
    </>
  )
}

export default PortfolioRight