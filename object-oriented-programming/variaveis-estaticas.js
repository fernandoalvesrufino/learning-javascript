//Nao existem variaveis estaticas no JS. Por isso, criamos um metodo get estatico

//Sao iguais aos metodos estaticos. Estao diretamente ligados as classes
//Assim, o valor de uma variavel estatica é o mesmo independente dos osjetos que sao instanciados

class Carro{
  static get desaceleracao(){
    return .15
  } 
  constructor(nome) {
    this.name = nome
    this.velocidade = 0
  }

  aceleracao(aumentarVelocidade) {
    this.velocidade += (aumentarVelocidade * (1 - Carro.desaceleracao))
    //como é um metodo estatico podemos chamar como se fosse uma variavel
  } 
}

//Imaginemos que todo carro quando acelerado tem uma taxa fixa de desaceleracao de 30%
//Assim poderemos criar um metodo get estatico (pois nao existem variaveis estaticas no JS) que vai sempre
//retornar o mesmo numero

let fpace = new Carro("F-Pace")

fpace.aceleracao(110)

console.log(fpace)

//Simulamos uma variavel estatica usando um metodo estatico
