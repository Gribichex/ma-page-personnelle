import hamonet_desktop from "../../medias/images/hamonet_desktop.png";
import teleworking_desktop from "../../medias/images/teleworking_desktop.png";
import { useTranslation } from "react-i18next";
import fylo_desktop from "../../medias/images/Fylo_desktop.png";
import tindog_desktop from "../../medias/images/tindog_desktop.png";
import social_desktop from "../../medias/images/socialproof_desktop.png";
import PorfolioSubComponent from "./PorfolioSubComponent";

function PortfolioComponent() {
  const { t } = useTranslation();

  const firstTitle = "Websites and mockups";
  const firstDescription =
  "Theses are projects for associations and companies as well as mockups integrated during my formation";  const firstContent = [
    { imgSrc: hamonet_desktop, websiteSrc: "https://leonhamonet.netlify.app/" },
    {
      imgSrc: teleworking_desktop,
      websiteSrc: "https://teletravail-demo.herokuapp.com/",
    },
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
      <h2>{t("Portfolio")}</h2>

        <PorfolioSubComponent
          title={firstTitle}
          description={firstDescription}
          portfolioELements={firstContent}
        />

      </div>

  );
}

export default PortfolioComponent;
