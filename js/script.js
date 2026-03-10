// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Deixa o body invisível até que tudo esteja pronto
  document.body.style.visibility = "visible";

  window.addEventListener("load", () => {
    // Quando CSS e JS estiverem carregados, mostra o conteúdo
    document.body.style.visibility = "visible";
  });
});