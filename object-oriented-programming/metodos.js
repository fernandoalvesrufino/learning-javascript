class Carro {
  constructor(marca, modelo, cor, assentos = 5){
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.assentos = assentos
  }

  pintarCarro(selecionarCor){
    this.cor = selecionarCor
    console.log("A nova cor do seu " + this.marca + " " + this.modelo + " é " + this.cor + "!")
  }
}

//Instanciando classe
let evoque = new Carro("Range Rover", "Evoque", "Branco")
console.log(evoque)

evoque.pintarCarro("Azul")
console.log(evoque)
