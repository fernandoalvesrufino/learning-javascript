/* 
Objetos podem estar dentro de arrays 
Arrays podem estar dentro de objetos
Objetos podem estar dentro de objetos
Arrays podem estar dentro de arrays
*/

let carro = {
  nome: "Velar",
  tipo: "Range Rover",
  proprietarios: ["Waltdisney", "Gertrudes"]
}

// Para acrescentar mais um proprietario
carro.proprietarios.push("Justino")

console.log(carro.proprietarios)

let carros = [
  {nome: "Velar", marca: "Land Rover"},
  {nome: "F-Pace", marca: "Jaguar"},
  {nome: "Sport", marca: "Land Rover"}
]

//Se eu quiser acessar o nome do primeiro carro e a marca do segundo
console.log(carros[2].nome)
console.log(carros[1].marca)

//Para percorrer o array e imprimir o nome e a montadora de cada um podemos:
carros.forEach(function(info) {
  console.log("Marca: " + info.marca + " | Modelo: " + info.nome)
})

//Objeto dentro de objeto
let time = {
  nome: "Man. City",
  pais: "Inglaterra",
  atacante: {
    nome: "Haaland",
    nacionalidade: "norueguês",
    camisa: 9,
    idade: 22
  },
  meia: {
    nome: "de Bruyne",
    nacionalidade: "belga",
    camisa: 17,
    idade: 31
  }
}

console.log(time.atacante.nome)
console.log(time.atacante.camisa)
