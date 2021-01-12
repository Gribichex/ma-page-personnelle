import { useTranslation } from "react-i18next";
import clock_svg from "../../medias/icons/delivery.svg";
import revision_svg from "../../medias/icons/revision.svg";
import check_svg from "../../medias/icons/check.svg";

function OfferCard({
  name,
  content,
  interest,
  delivery,
  revisions,
  assets,
  price,
}) {
  const { t } = useTranslation();

  return (
    <div className="offer-card">
      <h3 className="offer-card__name offer-card__item">{t(name)}</h3>
      <p className="offer-card__content offer-card__item">{t(content)}</p>
      <p className="offer-card__interest offer-card__item">{t(interest)}</p>
      <p className="offer-card__details offer-card__item">
        <img className="offer-card__icon " src={clock_svg} alt="clock"></img>
        {t("delivered in ") + delivery + t(" days")}
        <br />
        <img
          className="offer-card__icon"
          src={revision_svg}
          alt="revision"
        ></img>
        {revisions + t(" revisions")}
      </p>
      <p className="offer-card__item ">
        {assets.map((element) => (
          <div>
            <img className="offer-card__icon" src={check_svg} alt="check"></img>
            {element}
            <br />
          </div>
        ))}
      </p>
      <button  className="btn offer-btn offer-card__item" disabled>{price}</button >
    </div>
  );
}

export default OfferCard;
