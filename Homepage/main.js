const navHome = document.getElementById("Home");
const navAbout = document.getElementById("About");
const navSkills = document.getElementById("Skills");
const navArticles = document.getElementById("Articles");

navAbout.addEventListener("click", () => {
  window.close();
  window.open("../AboutmePage/aboutmePage.html");
});

navHome.addEventListener("click", () => {
  window.close();
  window.open("./index.html");
});

navSkills.addEventListener("click", () => {
  window.close();
  window.open("../Skillpage/skillPage.html");
});

navArticles.addEventListener("click", () => {
  window.close();
  window.open("../ArticlesPage/articlePage.html");
});
