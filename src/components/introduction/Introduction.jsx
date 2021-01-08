import video from "../../medias/videos/frehel.mp4";
import thumb from "../../medias/videos/apercu.jpg";
import wave_svg from "../../medias/icons/wave.svg";
import { useTranslation } from "react-i18next";
import FR_svg from "../../medias/icons/france.svg"
import USA_svg from "../../medias/icons/united-states.svg"
function Introduction() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div id="videowrapper" className="top-container">
      <div id="fullScreenDiv">
        <video poster={thumb} autoPlay id="video" src={video} loop muted></video>
        <div id="videoMessage" className="styling">
          <button
            style={{ position: "absolute", top: "10px", left: "40px"}}
            onClick={() => changeLanguage("fre")}
          >
            <img src={FR_svg} alt="FR" style={{width:"10px", height:"10px"}}/>
          </button>
          <button
            style={{ position: "absolute", top: "10px", left: "10px"}}
            onClick={() => changeLanguage("en")}
          >
             <img src={USA_svg} alt="USA" style={{width:"10px", height:"10px"}}/>
          </button>
          <h1 className="top-title">
            {t("I'm Julien")}
            <img className="intro-logo" src={wave_svg} alt="wave" />
          </h1>
          <h3 className="top-subtitle">
            {t("an R&D engineer and a web-developpment enthousiast.")}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
