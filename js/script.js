document.addEventListener("DOMContentLoaded", () => {

const paginas = ["index.html","pg1.html","pg2.html","pg3.html", "pg4.html"];

const paginaAtual = window.location.pathname.split("/").pop();

const indexAtual = paginas.indexOf(paginaAtual);

document.querySelectorAll(".proxima").forEach(link=>{
    if(indexAtual < paginas.length - 1){
        link.href = paginas[indexAtual + 1];
    }
});

document.querySelectorAll(".anterior").forEach(link=>{
    if(indexAtual > 0){
        link.href = paginas[indexAtual - 1];
    }
});

});

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = 1;
  }, 100);
});