import { useTranslation } from "react-i18next";
import ux_svg from "../../medias/icons/ux.svg";
import backend_svg from "../../medias/icons/backend.svg";


function SkillsComponent() {
  const { t } = useTranslation();
  return (
    <div className="middle-container">
      <div className="skills">
        <h2>{t("My Skills.")}</h2>
        <h3 className="skill-stack">{t("La pile MERN, un ensemble cohérent et éprouvé pour des sites de qualité")}</h3>
        <div className="skill-row">
          <img className="skill-image" src={ux_svg} alt="front-end" />
          <div className="skill-text">
            <h3>{t("Front-End Technologies")}</h3>
            <p>
              <span className="skill-name skill-name--special ">MongoDB: </span>
              {t(
                "Langage de base de donnée non-relationnelle (facilement scalable)"
              )}
              <br />
              <span className="skill-name skill-name--special ">ExpressJS: </span>
              {t("Framework Javascript pour création de serveur web")}
              <br />
              <span className="skill-name skill-name--special ">NodeJS: </span>
              {t(
                "Environnement d’exécution permettant d’utiliser le JavaScript côté serveur"
              )}
              <br />
              <br />
              <span className="skill-name">PassportJS: </span>
              {t("Framework Javascript pour gestion d’authentification")}
              <br />
            </p>
          </div>
        </div>
        <div className="skill-row skill-row--reverse">
          <div className="skill-text">
            <h3>{t("Back-End Technologies")}</h3>
            <p>
            <span className="skill-name skill-name--special ">ReactJS: </span>
              {t(
                " Librairie populaire et moderne pour le rendu client"
              )}
              <br />
              <br />
              <span className="skill-name">ReduxJS: </span>
              {t("Gestionnaire d’état centralisé pour site web")}
              <br />
              <span className="skill-name">GatsbyJS: </span>
              {t(
                "Framework de création de sites statiques basé sur React JS"
              )}
              <br />
              <span className="skill-name">Bootstrap: </span>
              {t(
                "Framework moderne HTML/CSS/Javascript pour mise en page"
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
