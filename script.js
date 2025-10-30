/* Page d'accueil du site */

document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tout sauf header, nav, footer
  const elements = document.querySelectorAll(
    "body *:not(header):not(footer):not(header *):not(footer *)"
  );

  // Ajoute la classe "reveal" à chaque élément visible du contenu
  elements.forEach((el, i) => {
    // On ne met pas la classe sur les trop petits éléments comme <br>, <img> isolés, etc.
    if (el.offsetParent !== null && el.tagName !== "SCRIPT" && el.tagName !== "LINK") {
      el.classList.add("reveal");

      // Variante aléatoire : certains viennent de gauche/droite/bas
      const directions = ["from-left", "from-right", "from-bottom"];
      el.classList.add(directions[Math.floor(Math.random() * directions.length)]);
    }
  });

  // Observer pour déclencher les animations au scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } // 20% visible avant de déclencher
  );

  // Observe tous les éléments
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});





const btn_Login = document.querySelector('.btn-login');
const Acteurs = document.querySelector('.acteurs');

btn_Login.addEventListener('click',()=>{
    Acteurs.classList.toggle('acteurs-active')
} )