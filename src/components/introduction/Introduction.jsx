import wave_svg from "../../medias/icons/wave.svg";
import { useTranslation } from "react-i18next";
import FR_svg from "../../medias/icons/france.svg";
import USA_svg from "../../medias/icons/united-states.svg";
import intro_background from "../../medias/images/intro.jpg";

import { Parallax } from "react-parallax";

function Introduction() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={intro_background}
        bgImageAlt="introduction"
        strength={500}
      >
        <div className="top-container">
          <h1 className="top-title">
            {t("Intro-title")}
            <h1 className="top-title">
              <span className="top-name">Julien Petitpierre</span>
              <img className="intro-logo" src={wave_svg} alt="wave" />
            </h1>
          </h1>
          <h3 className="top-subtitle">{t("Intro-subtitle")}</h3>
        </div>
      </Parallax>
      <button
        style={{ position: "absolute", top: "10px", left: "10px" }}
        onClick={() => changeLanguage("fre")}
      >
        <img src={FR_svg} alt="FR" style={{ width: "40px", height: "40px" }} />
      </button>
      <button
        style={{ position: "absolute", top: "10px", left: "80px" }}
        onClick={() => changeLanguage("en")}
      >
        <img
          src={USA_svg}
          alt="USA"
          style={{ width: "40px", height: "40px" }}
        />
      </button>
    </div>
  );
}

export default Introduction;
