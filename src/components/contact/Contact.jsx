import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact-me">
      <h2>{t("Get In Touch")}</h2>
      <h3>{t("You're a passionate like me ?")}</h3>
      <p>
        {t(
          "You like to code websites while playing a guitar serenade to your love ? Let's play together !"
        )}
      </p>
      <a className="btn" href="mailto:petitpierre.julien@gmail.com">
        {t("CONTACT ME")}
      </a>
    </div>
  );
}

export default Contact;
