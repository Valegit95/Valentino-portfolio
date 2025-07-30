const langToggle = document.getElementById("lang-toggle");
const itaTexts = document.querySelectorAll(".ita");
const engTexts = document.querySelectorAll(".eng");

// Toggle lingua ITA/ENG
langToggle.addEventListener("click", () => {
  itaTexts.forEach(el => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });
  engTexts.forEach(el => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });
});
