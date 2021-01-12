import { useTranslation } from "react-i18next";

function Card({ logo, title, content }) {
  const { t } = useTranslation();

  return (
    <div className="card">
      <img className="card__icon" src={logo} alt="icon" />
      <div className="card__text">
        <h4 className="card__title">{t(title)}</h4>
        <p className="card__description">{t(content)}</p>
      </div>
    </div>
  );
}

export default Card;
