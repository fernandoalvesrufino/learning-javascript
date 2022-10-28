/*
A heranca permite que uma classe herde caracteristicas de outras classes
Vamos declarar uma classe que vai herdar os metrodos e atributos de uma outra classe mae

Devem ter uma relacao de "é um". Ex: todo jogador é uma pessoa, ou todo carro é um veículo
*/

class Veiculo {
  constructor(marca, modelo, marchaAtual, rodas = 4){
    this.marca = marca
    this.modelo = modelo
    this.marchaAtual = marchaAtual
    this.rodas = rodas
  }

  subirMarcha(){
    if (this.marchaAtual < 5){
      this.marchaAtual += 1
    } else {
      console.log("Veículo possui apenas 5 marchas")
    }
  }
}

//Agora sera criado uma classe que vai herdar tudo da classe Carro
//Para isso é usada a palavra Extends e informado qual a classe que quero que ela herde
class VeiculoLuxo extends Veiculo{
  diminuirMarcha(){
    if (this.marchaAtual > 1){
      this.marchaAtual -= 1
    } else {
      console.log("Não existe marcha 0 (zero) em veículos de Luxo.")
    }
  }
}

class VeiculoOffRoad extends Veiculo{
  diminuirMarcha(){
    if (this.marchaAtual > 1){
      this.marchaAtual -= 1
    } else {
      console.log("Não existe marcha 0 (zero) em veículos OffRoad")
    }
  }
}

let vogue = new VeiculoLuxo("Land Rover", "Vogue", 4)
let newDiscovery = new VeiculoOffRoad("Land Rover", "New Discovery", 2)


vogue.subirMarcha()
console.log(vogue.marchaAtual)
vogue.diminuirMarcha()
vogue.diminuirMarcha()
vogue.diminuirMarcha()
vogue.diminuirMarcha()
vogue.diminuirMarcha()
vogue.diminuirMarcha()
console.log(vogue.marchaAtual)

console.log(newDiscovery.marchaAtual)
newDiscovery.diminuirMarcha()
newDiscovery.diminuirMarcha()
newDiscovery.diminuirMarcha()
console.log(newDiscovery.marchaAtual)


//Primeiro é feita uma verificacao na classe corrente. Se nao for encontrado nada, ai sim é verificado 
//na classe superior

//Todas as classes que criamos, se nao usamos o extends, ira herdar por padrao de Object
