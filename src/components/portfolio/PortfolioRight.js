import React, { useState, useLayoutEffect } from 'react'
import { ReactComponent as External } from '../../assets/external.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import styled from 'styled-components';

function PortfolioRight({title, link, description, tech, img, git}) {

  const [screenSize, setScreenSize] = useState([])

  useLayoutEffect(() => {
  
      window.addEventListener('resize', () => setScreenSize([window.innerWidth]));
  
      setScreenSize([window.innerWidth])
  
      return () => window.removeEventListener('resize', () => setScreenSize([window.innerWidth]));
  
  }, []);

  return (
    <>
      <PortfolioContainerRight img={img}>
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
        <div className={screenSize[0] > 769 ? "portfolio__wrapper--img" : "hidden"}> 
            <img src={img} height="350px" alt="vaszubar" className="project__img" />
        </div>
      </PortfolioContainerRight>
    </>
  )
}

export default PortfolioRight

const PortfolioContainerRight = styled.div`

  display: flex;
  margin: 0 auto 10em auto;
  width: 90%;
  justify-content: center;
  align-items: center;
  position: relative;

    @media (max-width: 768px) {
      & {
        padding: 5%;        
    }
  }

  &:after {

    @media (max-width: 768px) {
      & {
        content: "";
        display: block;
        position: absolute;
        margin: 0 auto;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background-image: url(${props => props.img});
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 5;
      }
    }
  }

  .portfolio__wrapper--img:hover {
      z-index: 3;
  }

  .project__img {
      border-radius: $border-radius;
      filter: grayscale(1);

      @media (max-width: 1200px) {
        & {
          opacity: 0.7;
        }
      }

      @media (max-width: 1000px) {
        & {
          opacity: 0.3;
        }
      }

      &:hover {
          filter: grayscale(0);
          z-index: 3;
      }
  }

  .project__content {
      height: 350px;
      margin-right: -10em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;
      z-index: 2;

      @media (max-width: 1200px) {
        & {
          margin-right: -15em;
        }
      }

      @media (max-width: 1000px) {
        & {
          margin-right: -20em;
        }
      }

      @media (max-width: 768px) {
          & {
              width: 100%;
              text-align: right;
              margin-right: 0;
          }
      }

      .project__overline {
          color: var(--greenish-color);
      }

      .project__title a {
          color: var(--lightestslate-color);
          text-decoration: none;
          font-size: 1.5em;

          &:hover {
              color: var(--greenish-color);
          }
      }

      .project__description {
          height: 50%;
          background-color: var(--lightnavy-color);
          border-radius: $border-radius;
          color: var(--lightslate-color);
          padding: 1.5em;

          @media (max-width: 768px) {
              & {
                  background-color: transparent;
                  padding: 0;
              }
          }
          
      }
  
      .project__tech--list {
          color: var(--lightslate-color);
          display: flex;
          justify-content: flex-start;
          text-decoration: none;
          list-style-type: none;
          flex-wrap: wrap;

          @media (max-width: 768px) {
              & {
                  justify-content: flex-end;
              }
          }
      
          li {
              padding-right: 1em;
              white-space: nowrap;

              @media (max-width: 768px) {
                  & {
                      padding-left: 1em;
                      padding-right: 0;
                  }
              }
          }
      }

      .project__links {
          display: flex;
          justify-content: flex-start;

          @media (max-width: 768px) {
              & {
                  justify-content: flex-end;
              }
          }
      }
  }
}

svg {
  fill: var(--lightslate-color);
  width: 20px;
  margin: 5px;

  &:hover {
      fill: var(--greenish-color);    
  }
}`