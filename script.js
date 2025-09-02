const translations = {
  it: {
    name: "Valentino Ginolfi",
    role: "Junior Data Analyst",
    navAbout: "Chi sono",
    navCertificates: "Certificati",
    navContact: "Contatti",
    aboutTitle: "Chi sono",
    aboutText: "Ciao! Mi chiamo Valentino, sono un Junior Data Analyst con una forte passione per trasformare dati in idee concrete. Lavoro con Python, SQL, Tableau e partecipo attivamente a progetti su Kaggle. Il mio obiettivo? Creare valore con dati chiari, visualizzazioni efficaci e storie che contano.",
    certificatesTitle: "Certificati",
    cert1Title: "Google Data Analytics Certificate",
    cert1Text: "Ho completato il corso base di Google Data Analytics.",
    cert2Title: "Google Advanced Data Analytics Certificate",
    cert2Text: "Ho completato il corso avanzato di Google Data Analytics.",
    contactTitle: "Contatti",
    contactText: "Collegati con me:"
  },
  en: {
    name: "Valentino Ginolfi",
    role: "Junior Data Analyst",
    navAbout: "About Me",
    navCertificates: "Certificates",
    navContact: "Contact",
    aboutTitle: "About Me",
    aboutText: "Hi! I'm Valentino, a Junior Data Analyst passionate about turning data into actionable insights. I work with Python, SQL, Tableau and actively contribute to Kaggle projects. My goal? Creating value with clear data, effective visualizations, and meaningful stories.",
    certificatesTitle: "Certificates",
    cert1Title: "Google Data Analytics Certificate",
    cert1Text: "I completed the foundational Google Data Analytics course.",
    cert2Title: "Google Advanced Data Analytics Certificate",
    cert2Text: "I completed the advanced Google Data Analytics course.",
    contactTitle: "Contact",
    contactText: "Connect with me:"
  },
  es: {
    name: "Valentino Ginolfi",
    role: "Junior Data Analyst",
    navAbout: "Quién soy",
    navCertificates: "Certificados",
    navContact: "Contacto",
    aboutTitle: "Quién soy",
    aboutText: "¡Hola! Soy Valentino, un Junior Data Analyst apasionado por convertir datos en ideas concretas. Trabajo con Python, SQL, Tableau y participo activamente en proyectos de Kaggle. ¿Mi objetivo? Crear valor con datos claros, visualizaciones efectivas e historias que importan.",
    certificatesTitle: "Certificados",
    cert1Title: "Certificado Google Data Analytics",
    cert1Text: "He completado el curso básico de Google Data Analytics.",
    cert2Title: "Certificado Avanzado Google Data Analytics",
    cert2Text: "He completado el curso avanzado de Google Data Analytics.",
    contactTitle: "Contacto",
    contactText: "Conéctate conmigo:"
  }
};

// Funzione per cambiare lingua e salvare in localStorage
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("selectedLanguage", lang);
}

// All'apertura della pagina, applica la lingua salvata
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "it";
  setLanguage(savedLang);
});
