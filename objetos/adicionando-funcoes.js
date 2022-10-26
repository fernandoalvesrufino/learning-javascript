/*
As proriedades que recebem funcoes sao chamadas de metodos
Quando nao possuem funcoes sao chamadas de atributos
 */

let carro = {
  nome: "Ford Ka",
  cambio: "Automático",
  motor: 1.0,
  partida: function() {
    console.log("Girando motor...")
    console.log("Motor em funcionamento!")
    console.log(this.name)
  }
}

carro.partida()
carro.velocidade = 0
carro.acelerar = function(aceleracao) {
  this.velocidade += aceleracao 
}
// Quando me refiro ao proprio objeto eu utilizo a palavra this
// É como o self em orientacao a objetos em python

console.log(carro)
carro.acelerar(20)
console.log(carro)
console.log(carro.acelerar)
