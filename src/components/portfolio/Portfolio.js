import PortfolioLeft from "./PortfolioLeft";
import PortfolioRight from "./PortfolioRight";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 500, once: false });
  }, []);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="portfolio__container">
          <h3 className="portfolio__title heading" data-aos="fade-up">
            03.<span className="heading__span"> Some things I've built</span>
          </h3>
          <PortfolioLeft
            title="JP Steel Structures"
            description="Website about a company that manufactures and at the same time assembles steel structures. It also contains a contact form through which you can contact the business owner with a possible request"
            tech={[
              "Wordpress",
              "SEO",
              "Custom CSS",
              "Copywriting",
              "Marketing",
            ]}
            img="/img/projects/jpsteelpicture.png"
            link="http://www.jpsteel.cz"
            linkExternal="http://www.jpsteel.cz"
          />
          <PortfolioRight
            title="Váš Zubař v HK"
            description="Website about a dental clinic, which contains all information about services, prices and contact. The website was designed together with all the professional text and basic digital marketing with SEO optimization was also provided."
            tech={[
              "Wordpress",
              "SEO",
              "Custom CSS",
              "Copywriting",
              "Marketing",
            ]}
            img="/img/projects/vaszubarpicture.png"
            link="http://www.vaszubarvhk.cz"
            linkExternal="http://www.vaszubarvhk.cz"
          />
          <PortfolioLeft
            title="Looking For You"
            description="This platform was designed to connect players, organizations and other specialized people from the gaming industry in a simple and effective form of registration in our database and subsequent display in our search engine."
            tech={[
              "Javascript",
              "React",
              "PHP",
              "Laravel",
              "MySQL",
              "Aos",
              "Styled Components",
            ]}
            img="/img/projects/lfypicture.png"
            link="https://github.com/Pavelhaj93/Laravel-React-LFY-project"
            git="https://github.com/Pavelhaj93/Laravel-React-LFY-project"
          />
          <PortfolioRight
            title="iHeadphones E-Shop"
            description="E-Commerce shop built in React.js and Next.js with safe payment system supported by Stripe.js containing different shipping methods, auto-tax and automatic email invoice send."
            tech={["Javascript", "React.js", "Next.js", "Stripe.js", "Sanity"]}
            img="/img/projects/iheadphones.png"
            link="https://ecommerce-react-js-next-js-stripe-js.vercel.app/"
            linkExternal="https://ecommerce-react-js-next-js-stripe-js.vercel.app/"
            git="https://github.com/Pavelhaj93/Laravel-React-LFY-project"
          />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
