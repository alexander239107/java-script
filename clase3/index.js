const resul = document.querySelector("#resultado");
const dismi = document.querySelector(".boton-disminuir");
const aumen = document.querySelector(".boton-aumentar");
const breset = document.querySelector(".boton-reset");

let contador = 0;
//FUNCIONES ---- FUNTIONS

// const disminuir = () => {
//   contador--;
//   if (contador < 0) {
//     contador = 0;
//     alert("no es posible realizar su contador");
//   }
//   copia();
// };
// //EVENTOS ---- EVENTS
// dismi.addEventListener("click", disminuir);

// aumen.addEventListener("click", () => {
//   contador++;
//   copia();
// });

// breset.addEventListener("click", () => {
//   contador = 0;
//   copia();
// });
// function copia() {
//   resultado.innerHTML = contador;
// }

function fut() {
  resul.innerHTML = contador;
}
const fundism = () => {
  contador--;
  fut();
};

const funaumen = () => {
  contador++;
  fut();
};
const funreset = () => {
  contador = 0;
  fut();
};

dismi.addEventListener("click", fundism);
aumen.addEventListener("click", funaumen);
breset.addEventListener("click", funreset);
