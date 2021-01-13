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
          "Real Websites": "Real Websites",
          "Theses are real projects for associations and colleagues. These projects involves modern Front-End technologies (React.js,Gastby.js,GraphQL) as well as some Back-end modules and concepts (Express.js,Passport.js,MongoDB databases, RESTful APIs conception)":
            "Theses are real projects for associations and colleagues. These projects involves modern Front-End technologies (React.js,Gastby.js,GraphQL) as well as some Back-end modules and concepts (Express.js,Passport.js,MongoDB databases, RESTful APIs conception)",
          "Draft Integration": "Draft Integration",
          "Theses are various Front-End trainings I use to realized during my formation and skills assessments using frontendmentor.io":
            "Theses are various Front-End trainings I use to realized during my formation and skills assessments using frontendmentor.io",
          "Get In Touch": "Get In Touch",
          "You're a passionate like me ?":
            "You have something better to do than coding yourself ?",
          "You like to code websites while playing a guitar serenade to your love ? Let's play together !":
            "Need help ?",
          "CONTACT ME": "Mail me",
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
          "Real Websites": "Sites web actifs",
          "Theses are real projects for associations and colleagues. These projects involves modern Front-End technologies (React.js,Gastby.js,GraphQL) as well as some Back-end modules and concepts (Express.js,Passport.js,MongoDB databases, RESTful APIs conception)":
            "Ces sont de vrais projets pour une assocation et des collègues impliquant des technologies Front-End modernes(React.js,Gastby.js,GraphQL) ainsi que des modules et concepts back-end (Express.js,Passport.js,MongoDB databases, RESTful APIs conception)",
          "Draft Integration": "Draft Integration",
          "Theses are various Front-End trainings I use to realized during my formation and skills assessments using frontendmentor.io":
            "Réalisation de l'intégration de maquettes durant ma formation et exercices pratiqués sur le site frontendmentor.io",
          "Get In Touch": "Prendre contact",
          "You're a passionate like me ?":
            "Vous avez autre chose à faire que de corriger les bugs ou coder votre site web ?",
          "You like to code websites while playing a guitar serenade to your love ? Let's play together !":
            "Besoin d'un coup de main ? ",
          "CONTACT ME": "Me contacter",
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
