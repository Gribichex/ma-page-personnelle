import hamonet_desktop from "../../medias/images/hamonet_desktop.png";

import teleworking_desktop from "../../medias/images/teleworking_desktop.png";
import { useTranslation } from "react-i18next";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function PortfolioComponent() {
  const { t } = useTranslation();

  return (
    <div className="portfolio">
      <h2>{t("My Portfolio.")}</h2>
      <Carousel>
        <div>
          <img src={hamonet_desktop} alt="hamonet_desktop" />
          <p className="legend" style={{ backgroundColor: "cadetblue" }}>
            <a
              style={{ color: "white", fontSize: "2rem" }}
              href="https://leonhamonet.netlify.app/"
            >
              {t(
                "Website dedicated to the famous painter of French brittany coast"
              )}
            </a>
          </p>
        </div>
        <div>
          <img src={teleworking_desktop} alt="teleworking_desktop" />
          <p className="legend" style={{ backgroundColor: "cadetblue" }}>
            <a
              style={{ color: "white", fontSize: "2rem" }}
              href="https://teletravail-demo.herokuapp.com/"
            >
              {t("Teleworking and holiday managing app for my colleagues")}{" "}
            </a>
          </p>
        </div>
      </Carousel>
      {/**  <div className="portfolio">
        <h2>{t("My Portfolio.")}</h2>

        <div className="portfolio-row">
          <div className="portfolio-text">
            <h3>{t("Leon Hamonet Assocation website")}</h3>
            <p>
              {t(
                "Website dedicated to the famous painter of French brittany coast"
              )}
            </p>
          </div>
          <div className="portfolio-img-row">
            <img
              className="portfolio-image"
              src={hamonet_mobile}
              alt="hamonet_mobile"
            />
            <img
              className="portfolio-image"
              src={hamonet_desktop}
              alt="hamonet_desktop"
            />
          </div>
        </div>

        <div className="portfolio-row">
          <div className="portfolio-text">
            <h3>{t("Teleworking app")}</h3>
            <p>
              {t(
                "Teleworking and holiday managing app for my colleagues"
              )}
            </p>
          </div>
          <div className="portfolio-img-row">
            <img
              className="portfolio-image"
              src={teleworking_mobile}
              alt="teleworking_mobile"
            />
            <img
              className="portfolio-image"
              src={teleworking_desktop}
              alt="teleworking_desktop"
            />
          </div>
        </div>


      </div>*/}
    </div>
  );
}

export default PortfolioComponent;
