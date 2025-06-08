document.addEventListener("DOMContentLoaded", function () {
    const btnClaro = document.getElementById("modo-claro");
    const btnOscuro = document.getElementById("modo-oscuro");
    const body = document.body;

    // Cargar preferencia previa desde localStorage (si existe)
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado) {
        body.classList.add(modoGuardado);
    } else {
        body.classList.add("modo-claro"); // modo por defecto
    }

    btnClaro.addEventListener("click", function () {
        body.classList.remove("modo-oscuro");
        body.classList.add("modo-claro");
        localStorage.setItem("modo", "modo-claro");
    });

    btnOscuro.addEventListener("click", function () {
        body.classList.remove("modo-claro");
        body.classList.add("modo-oscuro");
        localStorage.setItem("modo", "modo-oscuro");
    });
});