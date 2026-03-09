// script.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    // Efeito de clique suave
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // evita o carregamento imediato
            const url = link.getAttribute("href");

            // animação de transição
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = url;
            }, 400); // tempo da transição
        });
    });

    // Efeito visual ao passar o mouse
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
});