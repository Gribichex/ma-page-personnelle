import hamonet_desktop from "../../medias/images/hamonet_desktop.png";
import teleworking_desktop from "../../medias/images/teleworking_desktop.png";
import { useTranslation } from "react-i18next";
import fylo_desktop from "../../medias/images/Fylo_desktop.png";
import tindog_desktop from "../../medias/images/tindog_desktop.png";
import social_desktop from "../../medias/images/socialproof_desktop.png";
import PorfolioSubComponent from "./PorfolioSubComponent";

function PortfolioComponent() {
  const { t } = useTranslation();

  const firstTitle = "Real Websites";
  const firstDescription =
  "Theses are real projects for associations and colleagues. These projects involves modern Front-End technologies (React.js,Gastby.js,GraphQL) as well as some Back-end modules and concepts (Express.js,Passport.js,MongoDB databases, RESTful APIs conception)";  const firstContent = [
    { imgSrc: hamonet_desktop, websiteSrc: "https://leonhamonet.netlify.app/" },
    {
      imgSrc: teleworking_desktop,
      websiteSrc: "https://teletravail-demo.herokuapp.com/",
    },
  ];

  const secondTitle = "Draft Integration";
  const secondDescription =
    "Theses are various Front-End trainings I use to realized during my formation and skills assessments using frontendmentor.io";
  const secondContent = [
    {
      imgSrc: tindog_desktop,
      websiteSrc: "https://gribichex.github.io/TinDog/",
    },
    {
      imgSrc: social_desktop,
      websiteSrc: "https://gribichex.github.io/social-proof-section-challenge/",
    },
    {
      imgSrc: fylo_desktop,
      websiteSrc:
        "https://gribichex.github.io/fylo-dark-theme-landing-page-master/",
    },
  ];

  return (
    <div className="portfolio">
      <h2>{t("My Portfolio.")}</h2>
      <div className="carouselGrid">
        <PorfolioSubComponent
          title={firstTitle}
          description={firstDescription}
          portfolioELements={firstContent}
        />
        <PorfolioSubComponent
          title={secondTitle}
          description={secondDescription}
          portfolioELements={secondContent}
        />
      </div>
    </div>
  );
}

export default PortfolioComponent;
