import { useTranslation } from "react-i18next";
import profile_png from "../../medias/images/portrait.jpg"


function Profile() {
  const { t } = useTranslation();
  return (
    <div className="profile">
      <img
        className="portrait"
        src={profile_png}
        alt="Portrait"
      />
      <h2>{t("Hello.")}</h2>
      <p className="intro">
        {t(
          "I'm an signal processing engineer who decided to dig in web development"
        )}
      </p>
    </div>
  );
}

export default Profile;
