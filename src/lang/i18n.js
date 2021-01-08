import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "I'm Julien": "Fréhel Web Coding",
          "Hello.": "Welcome !",
          "an R&D engineer and a web-developpment enthousiast.":
            "A business that does not hesitate to soak for you !",
          "I'm an signal processing engineer who decided to dig in web development":
            "I'm an signal processing engineer who decided to dig in web development",
          "My Skills.": "My Skills.",
          "Digital signal Processing": "Digital signal Processing",
          "I have a several years experience designing and implementing state of the art sonar signal processing chains.":
            "I have a several years experience designing and implementing state of the art sonar signal processing chains.",
          "Front End Developement": "Front-End Developement",
          "I got an increasing knowledge in the field of Front-End Web developement including popular libraries/frameworks such as Bootstrap and React.js":
            "I got an increasing knowledge in the field of Front-End Web developement including popular libraries/frameworks such as Bootstrap and React.js",
          "Guitar harmony Enthusiast": "Guitar harmony Enthusiast",
          "I'm passionated by learning old-fashioned guitar styles, especially blues, and applying them to push further my guitar practising skills":
            "I'm passionated by learning old-fashioned guitar styles, especially blues, and applying them to push further my guitar practising skills",
          "My Portfolio.": "My Portfolio.",
          "Leon Hamonet Assocation website": "Leon Hamonet Assocation website",
          "Website dedicated to the famous painter of French brittany coast":
            "Website dedicated to the famous painter of French brittany coast",
          "Teleworking and holiday managing app for my colleagues":
            "Teleworking and holiday managing app for my colleagues",
          "Get In Touch": "Get In Touch",
          "You're a passionate like me ?": "You're a passionate like me ?",
          "You like to code websites while playing a guitar serenade to your love ? Let's play together !":
            "You like to code websites while playing a guitar serenade to your love ? Let's play together !",
          "CONTACT ME": "CONTACT ME",
        },
      },
      fre: {
        translations: {
          "I'm Julien": "Fréhel Web Coding",
          "Hello.": "Bienvenue !",
          "an R&D engineer and a web-developpment enthousiast.":
            "Une micro-entreprise web qui n'a pas peur de se mouiller pour vous !",
          "I'm an signal processing engineer who decided to dig in web development":
            "Je suis un ingénieur en traitement du signal qui a décidé de s'amuser avec le développement Web",
          "My Skills.": "Mes compétences.",
          "Digital signal Processing": "Traitement du signal",
          "I have a several years experience designing and implementing state of the art sonar signal processing chains.":
            "J'ai plusieurs années d'experience dans la conception et l'implémentation de chaine de traitement sonar de pointe",
          "Front End Developement": "Developpement Front-End ",
          "I got an increasing knowledge in the field of Front-End Web developement including popular libraries/frameworks such as Bootstrap and React.js":
            "J'ai une connaissance croissante dans le domaine du développement Web Front-end notamment dans les librairies/frameworks populaires comme Bootstrap et React.js",
          "Guitar harmony Enthusiast": "Appétit pour la bonne musique",
          "I'm passionated by learning old-fashioned guitar styles, especially blues, and applying them to push further my guitar practising skills":
            "Je suis actuellement passionné par l'apprentissage de la guitare et notamment de vieux styles de musique comme le blues",
            "My Portfolio.": "Mon Portfolio.",
          "Leon Hamonet Assocation website": "Le site de l'association Leon Hamonet",
          "Website dedicated to the famous painter of French brittany coast":
            "Website dédié au fameux peintre de la côte d'émeraude qui a su peindre avec délicatesse les cotes colorées d'Erquy",
            "Teleworking app":"Teletrav-app",
          "Teleworking and holiday managing app for my colleagues":
            "Application de gestion de tele-travail et de prise de congé pour mes collègues",
          "Get In Touch": "Prendre contact",
          "You're a passionate like me ?":
            "Vous êtes un touche à tout comme moi ?",
          "You like to code websites while playing a guitar serenade to your love ? Let's play together !":
            "Vous avez besoin d'un coup de main ? ",
          "CONTACT ME": "CONTACTEZ-MOI",
        },
      },
    },
    fallbackLng: "fre",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },

    react: {
      wait: true,
    },
  });

export default i18n;
