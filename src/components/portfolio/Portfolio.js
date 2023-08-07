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
            title="Hledám motory"
            description="Website about a company that sells used car engines. The website contains all information about the company, services, prices and contact and admin environment for easy editing of the website."
            tech={[
              "Next.js 13",
              "React.js",
              "Typescript",
              "Tailwind-CSS",
              "MongoDB",
              "Prisma",
              "SEO",
            ]}
            img="/img/projects/hledammotory.png"
            link="https://www.hledammotory.cz"
            linkExternal="https://www.hledammotory.cz"
            git="https://github.com/Pavelhaj93/hledamMotoryV1"
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
            link="https://www.vaszubarvhk.cz"
            linkExternal="https://www.vaszubarvhk.cz"
          />
          <PortfolioLeft
            title="Knoflix"
            description="This website was designed for my friend which has a building company."
            tech={[
              "Wordpress",
              "SEO",
              "Custom CSS",
              "Copywriting",
              "Marketing",
            ]}
            img="/img/projects/knoflix.png"
            link="https://www.knoflix.cz"
            linkExternal="https://www.knoflix.cz"
          />
           <PortfolioRight
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
            link="https://www.jpsteel.cz"
            linkExternal="https://www.jpsteel.cz"
          />
           <PortfolioLeft
            title="iHeadphones E-Shop"
            description="E-Commerce shop built in React.js and Next.js with safe payment system supported by Stripe.js containing different shipping methods, auto-tax and automatic email invoice send."
            tech={["Javascript", "React.js", "Next.js", "Stripe.js", "Sanity"]}
            img="/img/projects/iheadphones.png"
            link="https://ecommerce-react-js-next-js-stripe-js.vercel.app/"
            linkExternal="https://ecommerce-react-js-next-js-stripe-js.vercel.app/"
            git="https://github.com/Pavelhaj93/ecommerce-ReactJs_NextJs_Stripe"
          />
          <PortfolioRight
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
        </div>
      </section>
    </>
  );
}

export default Portfolio;
