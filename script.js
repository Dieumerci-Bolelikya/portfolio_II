// Sélectionne le bouton du menu et la barre de navigation
const toggleButton = document.getElementById("menu-toggle");
const navBar = document.querySelector(".nav-bar");

// Quand on clique sur le bouton, on ajoute ou enlève la classe "active"
toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
