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
          "Intro-title": "Hello, I'm ",
          "Intro-subtitle": "full-stack web developer",
          "Problem-to-solve":
            "You have something better to do than coding a website ?",
          Answer: "This is the right solution",
          Fast: "Fast",
          "Fast Loading and fluid interaction":
            "Fast Loading and fluid interaction",
          Responsive: "Responsive",
          "Display is adapted for every device from mobile to desktop":
            "Display is adapted for every device from mobile to desktop",
          Dynamic: "Dynamic",
          "Various possible interaction with server or other websites":
            "Various possible interaction with server or other websites",

          Offers: "Offers",
          Basic: "Basic",
          "One page only static website creation":
            "One page only static website creation",
          "Ideal solution for a quick and simple presentation of the added-value of your business":
            "Ideal solution for a quick and simple presentation of the added-value of your business",
          "delivered in ": "delivered in ",
          " days": " days",
          " revisions": " revisions",
          "1 Page": "1 Page",
          "Responsive Design": "Responsive Design",
          Standard: "Standard",
          "Static website creation": "Static website creation",
          "Ideal solution for a comprehensive showcase of any business or association":
            "Ideal solution for a comprehensive showcase of any business or association",
          "5 Pages": "5 Pages",
          Premium: "Premium",
          "Dynamic website creation": "Dynamic website creation",
          "Ideal solution for a web application handling server-stored data":
            "Ideal solution for a web application handling server-stored data",
          "10 Pages": "10 Pages",
          "Creation of related server, APIs and databases":
            "Creation of related server, APIs and databases",

          "Available skills": "Available skills",
          "The ": "The ",
          " stack, a coherent and field-proven stack pour quality websites and applications":
            " stack, a coherent and field-proven stack pour quality websites and applications",
          "Front-End Technologies": "Front-End Technologies",
          "NoSQL database language that is easily scalable":
            "NoSQL database language that is easily scalable",
          "Javascript framework used for server creation":
            "Javascript framework used for server creation",
          "Javascript runtime allowing Javascript use on server side":
            "Javascript runtime allowing Javascript use on server side",
          "Javascript framework for authentification management":
            "Javascript framework for authentification management",
          "Back-End Technologies": "Back-End Technologies",
          "Modern and popular library for client rendering":
            "Modern and popular library for client rendering",
          "Centralized state management library":
            "Centralized state management library",
          "Framework used to create optimized ReactJS static websites":
            "Framework used to create optimized ReactJS static websites",
          "Modern HTML/CSS/Javascript framework to produce optimized responsive layouts":
            "Modern HTML/CSS/Javascript framework to produce optimized responsive layouts",

          Portfolio: "Portfolio",
          "Websites and mockups": "Websites and mockups",
          "Theses are projects for associations and companies as well as mockups integrated during my formation":
            "Theses are projects for associations and companies as well as mockups integrated during my formation",

          "Get In Touch": "Get In Touch",
          "You need a website that keeps up with your business":
            "You need a website that keeps up with your business",
          "Let me do it for you !": "Let me do it for you !",
          "CONTACT ME": "CONTACT ME",
        },
      },
      fre: {
        translations: {
          "Intro-title": "Bonjour, je suis ",
          "Intro-subtitle": "Développeur web full-stack",
          "Problem-to-solve":
            "Vous avez autre chose à faire que de coder votre site web ?",
          Answer: "Optez pour une solution",
          Fast: "Rapide",
          "Fast Loading and fluid interaction":
            "Chargements rapides et interaction fluide",
          Responsive: "Responsive",
          "Display is adapted for every device from mobile to desktop":
            "Affichage adapté à n’importe quel support, mobile ou bureau",
          Dynamic: "Dynamique",
          "Various possible interaction with server or other websites":
            "Interactions avec un serveur ou d’autres sites web",
          Offers: "Offres",
          Basic: "Basique",
          "One page only static website creation":
            "Création d'une page de présentation statique",
          "Ideal solution for a quick and simple presentation of the added-value of your business":
            "Solution idéale pour une présentation simple et rapide de la plus-value de votre entreprise",
          "delivered in ": "livré en ",
          " days": " jours",
          " revisions": " revisions",
          "1 Page": "1 Page",
          "Responsive Design": "Responsive Design",
          Standard: "Standard",
          "Static website creation": "Création d'un site web statique",
          "Ideal solution for a comprehensive showcase of any business or association":
            "Solution idéale pour un site vitrine complet pour n'importe quelle petite entreprise ou association",
          "5 Pages": "5 Pages",
          Premium: "Premium",
          "Dynamic website creation": "Création d'un site web dynamique",
          "Ideal solution for a web application handling server-stored data":
            "Solution idéale pour une application web capable de gérer des données complexes ou volumineuses",
          "10 Pages": "10 Pages",
          "Creation of related server, APIs and databases":
            "Création du serveur, des APIs et bases de données associées",

          "Available skills": "Compétences disponibles",
          "The ": "La pile ",
          " stack, a coherent and field-proven stack pour quality websites and applications":
            ", un ensemble cohérent et éprouvé pour des sites de qualité",
          "Front-End Technologies": "Front-End Technologies",
          "NoSQL database language that is easily scalable":
            "Langage de base de donnée non-relationnelle (facilement scalable)",
          "Javascript framework used for server creation":
            "Framework Javascript pour création de serveur web",
          "Javascript runtime allowing Javascript use on server side":
            "Environnement d’exécution permettant d’utiliser le JavaScript côté serveur",
          "Javascript framework for authentification management":
            "Framework Javascript pour gestion d’authentification",
          "Back-End Technologies": "Back-End Technologies",
          "Modern and popular library for client rendering":
            "Librairie populaire et moderne pour le rendu client",
          "Centralized state management library":
            "Gestionnaire d’état centralisé pour site web",
          "Framework used to create optimized ReactJS static websites":
            "Framework de création de sites statiques basé sur React JS",
          "Modern HTML/CSS/Javascript framework to produce optimized responsive layouts":
            "Framework moderne HTML/CSS/Javascript pour créer une mise en page moderne et responsive",

          Portfolio: "Portfolio",
          "Websites and mockups": "Sites web et maquettes",
          "Theses are projects for associations and companies as well as mockups integrated during my formation":
            "Projets réalisés pour des associations et entreprises, maquettes intégrées pendant ma formation",
          "Get In Touch": "Prendre contact",
          "You need a website that keeps up with your business":
            "Vous avez besoin d'un site qui soit à la hauteur de votre projet",
          "Let me do it for you !": "Je peux vous aider",
          "CONTACT ME": "Me contacter",
        },
      },
    },
    fallbackLng: "en",
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
