// Se hai già il toggle tema, lascialo così.
// Rimuovi eventuale codice toggle lingua.

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    themeToggle.textContent = "☀️ Tema Chiaro";
  } else {
    themeToggle.textContent = "🌙 Tema Scuro";
  }
});

// Caricamento preferenza tema da localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark"){
    body.classList.add("dark");
    themeToggle.textContent = "☀️ Tema Chiaro";
  } else {
    themeToggle.textContent = "🌙 Tema Scuro";
  }
});
