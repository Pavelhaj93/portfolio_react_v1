import React from 'react'
import PortfolioLeft from './PortfolioLeft'
import PortfolioRight from './PortfolioRight'

function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <PortfolioLeft title="Váš Zubař v HK" description="Website about dental care center containing all the services including price list and contact info. Website was created with copywriting of all the texts, SEO optimalized and basic digital marketing were implemented." tech={["Wordpress", "SEO", "Custom CSS", "Copywriting"]} />
        <PortfolioRight title="Váš Zubař v HK" description="Website about dental care center containing all the services including price list and contact info. Website was created with copywriting of all the texts, SEO optimalized and basic digital marketing were implemented." tech={["Wordpress", "SEO", "Custom CSS", "Copywriting"]} />
      </section>
    </>
  )
}

export default Portfolio