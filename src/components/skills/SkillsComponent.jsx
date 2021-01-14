import { useTranslation } from "react-i18next";
import ux_svg from "../../medias/icons/ux.svg";
import backend_svg from "../../medias/icons/backend.svg";


function SkillsComponent() {
  const { t } = useTranslation();
  return (
    <div className="middle-container">
      <div className="skills">
        <h2 className="solution-answer">{t("Available skills")}</h2>
        <h3 className="skill-stack">{t("The ")}<span className="skill-name--special">MERN</span>{t(" stack, a coherent and field-proven stack pour quality websites and applications")}</h3>
        <div className="skill-row">
          <img className="skill-image" src={ux_svg} alt="front-end" />
          <div className="skill-text">
            <h3>{t("Back-End Technologies")}</h3>
            <p>
              <span className="skill-name skill-name--special ">MongoDB: </span>
              {t(
                "NoSQL database language that is easily scalable"
              )}
              <br />
              <span className="skill-name skill-name--special ">ExpressJS: </span>
              {t("Javascript framework used for server creation")}
              <br />
              <span className="skill-name skill-name--special ">NodeJS: </span>
              {t(
                "Javascript runtime allowing Javascript use on server side"
              )}
              <br />
              <br />
              <span className="skill-name">PassportJS: </span>
              {t("Javascript framework for authentification management")}
              <br />
            </p>
          </div>
        </div>
        <div className="skill-row skill-row--reverse">
          <div className="skill-text">
            <h3>{t("Front-End Technologies")}</h3>
            <p>
            <span className="skill-name skill-name--special ">ReactJS: </span>
              {t(
                "Modern and popular library for client rendering"
              )}
              <br />
              <br />
              <span className="skill-name">ReduxJS: </span>
              {t("Centralized state management library")}
              <br />
              <span className="skill-name">GatsbyJS: </span>
              {t(
                "Framework used to create optimized ReactJS static websites"
              )}
              <br />
              <span className="skill-name">Bootstrap: </span>
              {t(
                "Modern HTML/CSS/Javascript framework to produce optimized responsive layouts"
              )}
              <br />
            </p>
          </div>
          <img className="skill-image" src={backend_svg} alt="backend_svg" />
        </div>
      </div>
    </div>
  );
}



export default SkillsComponent;
