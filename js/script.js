window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
});


document.addEventListener("DOMContentLoaded", function () {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
});

const data = new Date();
document.getElementById("data").textContent =
"Hoje é " + data.toLocaleDateString("pt-BR");

const texto = "Oi, sou eu! Flaviano.";
let i = 0;

function escrever() {
    if (i < texto.length) {
        document.querySelector("h1").textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 60);
    }
}

document.querySelector("h1").textContent = "";
escrever();