import hamonet_desktop from "../../medias/images/hamonet_desktop.jpg";
import kamat_desktop from "../../medias/images/kamat_desktop.jpg";
import teleworking_desktop from "../../medias/images/teleworking_desktop.jpg";
import { useTranslation } from "react-i18next";
import fylo_desktop from "../../medias/images/Fylo_desktop.jpg";
import tindog_desktop from "../../medias/images/tindog_desktop.jpg";
import social_desktop from "../../medias/images/socialproof_desktop.jpg";
import PorfolioSubComponent from "./PorfolioSubComponent";

function PortfolioComponent() {
  const { t } = useTranslation();

  const firstTitle = "Websites and mockups";
  const firstDescription =
    "Theses are projects for associations and companies as well as mockups integrated during my formation";
  const firstContent = [
    {
      imgSrc: kamat_desktop,
      websiteSrc: "https://kamat.co/",
    },
    {
      imgSrc: teleworking_desktop,
      websiteSrc: "https://teletravapp-demo.herokuapp.com/",
    },
    { imgSrc: hamonet_desktop, websiteSrc: "https://leonhamonet.fr/" },
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
