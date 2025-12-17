const translations = {
  it: {
    name: "Valentino Ginolfi",
    role: "Junior Data Analyst",
    navAbout: "Chi sono",
    navCertificates: "Certificati",
    navContact: "Contatti",
    aboutTitle: "Chi sono",
    aboutText:
      "Ciao! Mi chiamo Valentino, sono un Junior Data Analyst con una forte passione per trasformare dati in idee concrete. Lavoro con Python, SQL, Tableau e partecipo attivamente a progetti su Kaggle. Il mio obiettivo? Creare valore con dati chiari, visualizzazioni efficaci e storie che contano.",
    certificatesTitle: "Certificati",
    cert1Title: "Google Data Analytics Certificate",
    cert1Text: "Ho completato il corso base di Google Data Analytics.",
    cert2Title: "Google Advanced Data Analytics Certificate",
    cert2Text: "Ho completato il corso avanzato di Google Data Analytics.",
    cert3Title: "Microsoft Power BI Data Analyst Certificate",
    cert3Text: "Ho completato il corso in Microsoft Power BI Data Analyst.",
    contactTitle: "Contatti",
    contactText: "Collegati con me:",
  },

  en: {
    name: "Valentino Ginolfi",
    role: "Junior Data Analyst",
    navAbout: "About",
    navCertificates: "Certificates",
    navContact: "Contact",
    aboutTitle: "About",
    aboutText:
      "Hi! My name is Valentino, I’m a Junior Data Analyst with a strong passion for turning data into actionable insights. I work with Python, SQL, Tableau, and actively participate in Kaggle projects. My goal? Create value through clear data, effective visualizations, and stories that matter.",
    certificatesTitle: "Certificates",
    cert1Title: "Google Data Analytics Certificate",
    cert1Text: "I completed the Google Data Analytics foundational course.",
    cert2Title: "Google Advanced Data Analytics Certificate",
    cert2Text: "I completed the advanced Google Data Analytics course.",
    cert3Title: "Microsoft Power BI Data Analyst Certificate",
    cert3Text: "I completed the Microsoft Power BI Data Analyst course.",
    contactTitle: "Contact",
    contactText: "Connect with me:",
  },

  es: {
    name: "Valentino Ginolfi",
    role: "Junior Data Analyst",
    navAbout: "Sobre mí",
    navCertificates: "Certificados",
    navContact: "Contacto",
    aboutTitle: "Sobre mí",
    aboutText:
      "¡Hola! Me llamo Valentino, soy Junior Data Analyst con una gran pasión por transformar datos en ideas concretas. Trabajo con Python, SQL y Tableau, y participo activamente en proyectos en Kaggle. ¿Mi objetivo? Crear valor con datos claros, visualizaciones eficaces e historias que importan.",
    certificatesTitle: "Certificados",
    cert1Title: "Google Data Analytics Certificate",
    cert1Text: "He completado el curso básico de Google Data Analytics.",
    cert2Title: "Google Advanced Data Analytics Certificate",
    cert2Text: "He completado el curso avanzado de Google Data Analytics.",
    cert3Title: "Microsoft Power BI Data Analyst Certificate",
    cert3Text: "He completado el curso de Microsoft Power BI Data Analyst.",
    contactTitle: "Contacto",
    contactText: "Conecta conmigo:",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
   if (dict[key] !== undefined) {
  el.textContent = dict[key];
}

  });

  localStorage.setItem("lang", lang);
}

