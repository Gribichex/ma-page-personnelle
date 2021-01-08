import { useTranslation } from "react-i18next";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function PorfolioSubComponent({ title, description, portfolioELements }) {
  const { t } = useTranslation();
  const porfolioSubComponentStyle = {
    margin: "0 50px",
    textAlign: "left",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };
  return (
    <div style={porfolioSubComponentStyle}>
      <h3>{t(title)}</h3>
      <p style={{flex:1}}>{t(description)}</p>
      <Carousel style={{flex:1}}>
        {portfolioELements.map((element,index) => (
          <div key={index}>
            <img src={element.imgSrc} alt="#" />
            <a className = "legend" href={element.websiteSrc}>Link</a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default PorfolioSubComponent;
