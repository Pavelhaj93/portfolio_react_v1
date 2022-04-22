import React, { useState, useLayoutEffect } from 'react'
import PortfolioLeft from './PortfolioLeft'
import PortfolioRight from './PortfolioRight'

function Portfolio() {

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="portfolio__container">
          <h3 className="portfolio__title heading">03.<span className="heading__span"> Some things I've built</span></h3>
          <PortfolioLeft title="Looking For You" description="This platform was designed to connect players, organizations and other specialized people from the gaming industry in a simple and effective form of registration in our database and subsequent display in our search engine." tech={["Javascript", "React", "PHP", "Laravel", "MySQL", "Aos", "Styled Components"]} img="/img/projects/lfypicture.png" link="http://lfy.codeboot.cz" git="https://github.com/Pavelhaj93/Laravel-React-LFY-project" />
          <PortfolioRight title="Váš Zubař v HK" description="Website about a dental clinic, which contains all information about services, prices and contact. The website was designed together with all the professional text and basic digital marketing with SEO optimization was also provided." tech={["Wordpress", "SEO", "Custom CSS", "Copywriting", "Marketing"]} img="/img/projects/vaszubarpicture.png" link="http://www.vaszubarvhk.cz" />
          <PortfolioLeft title="JP Steel Structures" description="Website about a company that manufactures and at the same time assembles steel structures. It also contains a contact form through which you can contact the business owner with a possible request" tech={["Wordpress", "SEO", "Custom CSS", "Copywriting", "Marketing"]} img="/img/projects/jpsteelpicture.png" link="http://www.jpsteel.cz" />
        </div>
      </section>
    </>
  )
}

export default Portfolio