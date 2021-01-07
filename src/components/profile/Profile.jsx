import { useTranslation } from "react-i18next";
function Profile() {
  const { t } = useTranslation();
  return (
    <div className="profile container-fluid">
      <img
        className="portrait d-block mx-auto"
        src="images/portrait.png"
        alt="Portrait"
      />
      <h2 className="text-center">{t("Hello.")}</h2>
      <p className="intro text-center">
        {t(
          "I'm an signal processing engineer who decided to dig in web development"
        )}
      </p>
    </div>
  );
}

export default Profile;
