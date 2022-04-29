import React, { useState, useEffect, useLayoutEffect } from "react";
import { ReactComponent as External } from "../../assets/external.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

function PortfolioLeft({ title, link, description, tech, img, git }) {
  const [screenSize, setScreenSize] = useState([]);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => setScreenSize([window.innerWidth]));

    setScreenSize([window.innerWidth]);

    return () =>
      window.removeEventListener("resize", () =>
        setScreenSize([window.innerWidth])
      );
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <PortfolioContainerLeft img={img}>
        <div
          className={screenSize[0] > 828 ? "portfolio__wrapper--img" : "hidden"}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
          data-aos-once="true"  
        >
          <a href={link} alt={title} target="_blank" rel="noreferrer">
            <img src={img} alt={title} className="project__img" />
          </a>
        </div>
        <div
          className="project__content"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-anchor-placement="bottom"
          data-aos-once="true"
        >
          <p className="project__overline">Featured Project</p>
          <h3 className="project__title">
            <a href={link} rel="noreferrer" target="_blank">
              {title}
            </a>
          </h3>
          <div className="project__description">
            <p>{description}</p>
          </div>
          <ul className="project__tech--list">
            {tech.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <div className="project__links">
            <a href={link} className="social__link">
              <External height="20px" />
            </a>
            {git && (
              <a href={git} className="social__link">
                <GitHub height="20px" />
              </a>
            )}
          </div>
        </div>
      </PortfolioContainerLeft>
    </>
  );
}

export default PortfolioLeft;

const PortfolioContainerLeft = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;
  margin-bottom: 10em;
  max-width: 1000px;

  @media (max-width: 828px) {
    & {
      padding: 5%;
      margin-bottom: 5em;
    }
  }

  &:after {
    @media (max-width: 828px) {
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
        background-image: url(${(props) => props.img});
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 1;
        border-radius: var(--border-radius);
      }
    }
  }

  .portfolio__wrapper--img {
    grid-column: 1 / 6;
    grid-row: 1 / -1;
    position: relative;
    width: auto;

    &:hover {
      z-index: 3;
    }
  }

  .project__img {
    border-radius: var(--border-radius);
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
    grid-column: 6 / -1;
    grid-row: 1;
    text-align: right;
    z-index: 2;
    border-radius: var(--border-radius);

    @media (max-width: 828px) {
      & {
        grid-column: 1 / -1;
        width: 100%;
        text-align: left;
      }
    }

    @media (min-width: 950px) and (max-width: 1080px) {
      grid-column: 5 / -1;
    }

    @media (min-width: 828px) and (max-width: 950px) {
      grid-column: 4 / -1;
    }

    .project__overline {
      color: var(--greenish-color);
      margin-bottom: 1em;
    }

    .project__title a {
      color: var(--lightestslate-color);
      text-decoration: none;
      font-size: 1.5em;
      padding-bottom: 2em;

      &:hover {
        color: var(--greenish-color);
      }
    }

    .project__description {
      height: 50%;
      background-color: var(--lightnavy-color);
      border-radius: var(--border-radius);
      color: var(--lightslate-color);
      padding: 1.5em;
      margin-bottom: 1em;
      margin-top: 1em;

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
      justify-content: flex-end;
      text-decoration: none;
      list-style-type: none;
      flex-wrap: wrap;
      margin-bottom: 1em;

      @media (max-width: 768px) {
        & {
          justify-content: flex-start;
        }
      }

      li {
        padding-left: 1em;
        white-space: nowrap;

        @media (max-width: 768px) {
          & {
            padding-left: 0;
            padding-right: 1em;
          }
        }
      }
    }

    .project__links {
      display: flex;
      justify-content: flex-end;

      @media (max-width: 768px) {
        & {
          justify-content: flex-start;
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
  }
`;
