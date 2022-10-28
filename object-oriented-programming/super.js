//Quando trabalhamos com heranca, nao somos obrigados a utilizar um metodo herdado
//É possivel criar, definir o proprio metodo da classe que herdou (filha) 

class Carro{
  constructor(nome, velocidadeMax, marchas){
    this.nome = nome
    this.velocidadeMax = velocidadeMax
    this.marchas = marchas
    this.velocidade = 0
  }

  acelerar(adicionarVelocidade){
    let calculoVelocidade = this.velocidade + adicionarVelocidade
    if (calculoVelocidade > this.velocidadeMax){
      this.velocidade = this.velocidadeMax
      console.log("Velocidade máxima é de " + this.velocidadeMax + "km/h | Velocidade atual: " + this.velocidade + "km/h")
    } else {
      this.velocidade = calculoVelocidade
    }
  }
  
  desacelerar(diminuirVelocidade){
    let calculoVelocidade = this.velocidade - diminuirVelocidade
    if (calculoVelocidade < 0){
      this.velocidade = 0
      console.log("Velocidade mínima possivel é 0km/h | Velocidade atual: " + this.velocidade + "km/h")
    } else {
      this.velocidade = calculoVelocidade
    }
  }

  velocidadeAtual(){
    console.log("Velocidade atual: " + this.velocidade + "km/h")
  }
}

//Alem de receber os atributos da classe principal Carro, sera adicionado mais um atributo
class Passeio extends Carro{
  constructor(nome, velocidadeMax, marchas, assentos){
    super(nome, velocidadeMax, marchas)
    //O super ira chamar o construtor que ja foi declarado na superclasse. As informacoes estao sendo reaproveitadas
    this.assentos = assentos
  }

  acelerar(adicionarVelocidade){
    adicionarVelocidade /= 2
    console.log("Aumentando metade da velocidade solicitada (" + adicionarVelocidade + "km/h). Veículo mais pesado!")
    //Ate aqui sera chamado esse metodo. No entando eu quero continuar com a execucao do metodo da superclasse
    //para isso utilizamos o super
    super.acelerar(adicionarVelocidade)
  }

}

let disco4 = new Passeio("Disco 4", 190, 8, 7)
disco4.acelerar(500)
disco4.velocidadeAtual()
console.log(disco4)
