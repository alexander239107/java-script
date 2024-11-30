
const resul = document.querySelector("#resultado")
const dismi = document.querySelector(".boton-disminuir")
const aumen = document.querySelector(".boton-aumentar")
const breset= document.querySelector(".boton-reset")

let contador = 0;


dismi.addEventListener("click", () => {
    contador-- ;
    if(contador < 0){
        contador = 0
        alert("no es posible realizar su contador")
    }
    copia()
})

aumen.addEventListener("click",() => {
    contador ++;
    copia()
})

breset.addEventListener("click",() => {
    contador = 0
    copia()
})
function copia() {
   resultado.innerHTML = contador
}