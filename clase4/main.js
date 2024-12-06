// JSON

// java scrip objeto notation

let objetomodelo = {
  nombre: "rodrigo",
  edad: 32,
  tecnologias: ["HTML", "CSS", "JAVASCRIP", "REACT"],
  grabando: true,
};
console.log("objeto modelo");
console.log(objetomodelo);

let objetojson = JSON.stringify(objetomodelo);

console.log("objeto en json ");
console.log(objetoenJSON);

let objetoparseado = JSON.parse(objetoenJSON);
console.log("objeto parseado");
console.log(objetoparseado);
