const itensAvaliacao = document.querySelectorAll(".principal__lista-item");
const botaoSubmit = document.querySelector("#botao__submit");
let resultadoRating = document.querySelector(".resultado__rating");
let secaoVotacao = document.getElementsByClassName(".secao__votacao");
let notaDoRestaurante = 0;

itensAvaliacao.forEach((elemento, index) => {
    elemento.addEventListener("click", () => {
        elemento.classList.add('elemento__selecionado');
        notaDoRestaurante = elemento.innerHTML;
    })
    return notaDoRestaurante;
})

botaoSubmit.addEventListener("click", () => {
    if (notaDoRestaurante === 0) {
        alert('Please rate our restaurant!');
        return;
    }
    resultadoRating.innerHTML = notaDoRestaurante
    document.querySelector(".secao__votacao").style.display = "none";
    document.querySelector(".resultado__main").style.display = "block";
})
