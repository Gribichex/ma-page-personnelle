import { useTranslation } from "react-i18next";

function SkillsComponent() {
  const { t } = useTranslation();
  return (
    <div className="middle-container">
      <div className="skills">
        <h2>{t("My Skills.")}</h2>
        <div className="skill-row">
          <img
            className="skill-image"
            src="images/ux.png"
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
            src="images/wireless.png"
            alt="signal"
          />
        </div>

        <div className="skill-row">
          <img className="skill-image" src="images/guitar.png" alt="guitar" />
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
