import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact-me">
      <h2>{t("Get In Touch")}</h2>
      <h3>{t("You need a website that keeps up with your business")}</h3>
      <p>
        {t(
          "Let me do it for you !"
        )}
      </p>
      <a className="btn btn--contact" href="mailto:gribichex@hotmail.com">
        {t("CONTACT ME")}
      </a>
    </div>
  );
}



export default Contact;
