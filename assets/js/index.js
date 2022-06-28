const itensAvaliacao = document.querySelectorAll(".principal__lista-item");
const botaoSubmit = document.querySelector(".principal__botao");
console.log(botaoSubmit)
const notas = [
    1, 2, 3, 4, 5
]
let notaDoRestaurante = 0;

itensAvaliacao.forEach( (elemento, indice) =>{
    elemento.addEventListener("click", () => {
        if(elemento.innerHTML == notas[indice]){
           notaDoRestaurante = elemento.innerHTML;
           console.log(notaDoRestaurante)
        }
        
    })
    if(notaDoRestaurante == null || notaDoRestaurante == 0){
        console.log("dentro do if do botao")
        botaoSubmit.setAttribute('disabled', '');
        console.log(elemento[indice])
    }
    
})
// for(let i = 0; i < itensAvaliacao.length; i++){
//     itensAvaliacao.addEventListener("click", () => {
//         console.log(itensAvaliacao.textContent)
//     })
// }