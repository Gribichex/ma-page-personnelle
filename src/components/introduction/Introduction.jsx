import video from "../../medias/videos/VID_20210107_125754.mp4";
import wave_svg from "../../medias/icons/wave.svg"
import { useTranslation } from 'react-i18next';

function Introduction() {
  const { t} = useTranslation();
  return (
    
      <div id="videowrapper" className="top-container">
        <div id="fullScreenDiv">
          <video autoPlay id="video" src={video} loop muted ></video>
          <div id="videoMessage" className="styling">
            <h1 className="top-title">{t("I'm Julien")}<img className="intro-logo" src={wave_svg} alt="wave" /></h1>
            <h2 className="top-subtitle">
            {t("an R&D engineer and a web-developpment enthousiast.")}
            </h2>
          </div>
        </div>
      </div>
   
  );
}

export default Introduction;
