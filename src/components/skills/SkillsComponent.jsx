import { useTranslation } from "react-i18next";
import ux_png from "../../medias/icons/ux.png"
import guitar_png from "../../medias/icons/guitar.png"
import signal_png from "../../medias/icons/wireless.png"


function SkillsComponent() {
  const { t } = useTranslation();
  return (
    <div className="middle-container">



      <div className="skills">
        <h2>{t("My Skills.")}</h2>
        <div className="skill-row">
          <img
            className="skill-image"
            src={ux_png}
            alt="front-end"
          />
          <div className="skill-text">
            <h3>{t("Front End Developement")}</h3>
            <p>
              {t(
                "I got an increasing knowledge in the field of Front-End Web developement including popular libraries/frameworks such as Bootstrap and React.js"
              )}
            </p>
          </div>
        </div>
        <div className="skill-row skill-row--reverse">
          <div className="skill-text">
            <h3>{t("Digital signal Processing")}</h3>
            <p>
              {t(
                "I have a several years experience designing and implementing state of the art sonar signal processing chains."
              )}
            </p>
          </div>
          <img
            className="skill-image"
            src={signal_png}
            alt="signal"
          />
        </div>

        <div className="skill-row">
          <img className="skill-image" src={guitar_png} alt="guitar" />
          <div className="skill-text">
            <h3>{t("Guitar harmony Enthusiast")}</h3>
            <p>
              {t(
                "I'm passionated by learning old-fashioned guitar styles, especially blues, and applying them to push further my guitar practising skills"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
