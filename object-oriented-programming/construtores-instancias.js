/*
Quando dizemos que uma classe foi instanciada, queremos dizer que um objeto foi criado a partir daquela classe.
A classe vem com um metodo especial. Esse metodo é chamado de construtor. É onde definimos os valores iniciais dos atributos
de um objeto.
*/

class Carro{
  constructor(marca, modelo, assentos = 5){
    //Tambem podemos ter um valor padrao para um atributo no construtor. Ex: assentos
    this.marca = marca
    this.modelo = modelo
    this.assentos = assentos
  }
}

//Para instanciar a classe:
let evoque = new Carro("Range Rover", "Evoque")
/*
Quando digitamos new Carro estamos chamando o construtor
Ou seja, marca passa a ser Land Rover e modelo passa a ser Evoque.
LandRover vai ter os atributos marca e modelo
*/
let newDiscovery = new Carro("Land Rover", "Discovery", 7)

console.log(evoque)
console.log(newDiscovery)

