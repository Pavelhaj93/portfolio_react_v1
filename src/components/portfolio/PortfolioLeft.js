import React from 'react'
import { ReactComponent as External } from '../../assets/external.svg';

function PortfolioLeft({title, description, tech}) {
  return (
    <>
      <div className="portfolio__left">
        <img src="/img/projects/vaszubarpicture.png" height="350px" alt="vaszubar" className="project__img" />
        <div className="project__content">
          <p className="project__overline">Featured Project</p>
          <h3 className="project__title">
            <a href="http://www.vaszubarvhk.cz">{title}</a>
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
            <a href="https://www.github.com/Pavelhaj93" className="social__link">
              <External height="20px"/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioLeft