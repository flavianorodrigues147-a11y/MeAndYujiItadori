// Mostrar página com fade quando carregar
window.addEventListener("load", () => {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
});


// Mostrar data atual (se existir o elemento)
const dataElemento = document.getElementById("data");

if (dataElemento) {
    const data = new Date();
    dataElemento.textContent =
    "Hoje é " + data.toLocaleDateString("pt-BR");
}


// Efeito de digitação no título (se existir h1)
const titulo = document.getElementById("titulo");

if (titulo) {

    const texto = "Oi, sou eu! Flaviano.";
    let i = 0;

    titulo.textContent = "";

    function escrever() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, 60);
        }
    }

    escrever();
}


// Aplicar tema salvo em qualquer página
const botaoTema = document.getElementById("tema");

// Aplicar tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "light") {
    document.body.classList.add("light");
    if(botaoTema) botaoTema.textContent = "☽";
} else {
    if(botaoTema) botaoTema.textContent = "☀︎";
}


// Trocar tema
if (botaoTema) {

    botaoTema.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("tema", "light");
            botaoTema.textContent = "☽";

        } else {

            localStorage.setItem("tema", "dark");
            botaoTema.textContent = "☀︎";

        }

    });

}