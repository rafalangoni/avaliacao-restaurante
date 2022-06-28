const itensAvaliacao = document.querySelectorAll(".principal__lista-item");
const botaoSubmit = document.querySelector("#botao__submit");
let resultadoRating = document.querySelector(".resultado__rating");
let notaDoRestaurante = 0;

itensAvaliacao.forEach(elemento => {
    elemento.addEventListener("click", () => {
        notaDoRestaurante = elemento.innerHTML;
    })
    return notaDoRestaurante;
})

botaoSubmit.addEventListener("click", () => {
    if(notaDoRestaurante === 0){
        alert('Please rate our restaurant!');
        return;
    }
    resultadoRating.innerHTML = notaDoRestaurante
})
