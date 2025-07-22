var mover = window.document.querySelector("#barra-oculta")

function clicoufora() {
    mover.classList.remove("ativa")
}

function clicar() {
    mover.classList.toggle("ativa");
}

function clicar2() {
    if (mover.classList.contains("ativa")) {
        mover.classList.remove("ativa")
    }
}
