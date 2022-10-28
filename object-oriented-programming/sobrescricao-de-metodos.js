//Quando trabalhamos com heranca, nao somos obrigados a utilizar um metodo herdado
//É possivel criar, definir o proprio metodo da classe que herdou (filha) 

class Carro{
  constructor(nome, velocidadeMax, marchas = 5){
    this.nome = nome
    this.velocidadeMax = velocidadeMax
    this.marchas = marchas
    this.velocidade = 0
  }

  acelerar(adicionarVelocidade){
    let calculoVelocidade = this.velocidade + adicionarVelocidade
    if (calculoVelocidade > this.velocidadeMax){
      this.velocidade = this.velocidadeMax
      console.log("Velocidade máxima é de " + this.velocidadeMax + "km/h | Velocidade atual: " + this.velocidade)
    } else {
      this.velocidade = calculoVelocidade
    }
  }
  
  desacelerar(diminuirVelocidade){
    let calculoVelocidade = this.velocidade - diminuirVelocidade
    if (calculoVelocidade < 0){
      this.velocidade = 0
      console.log("Velocidade mínima possivel é 0km/h | Velocidade atual: " + this.velocidade)
    } else {
      this.velocidade = calculoVelocidade
    }
  }

  velocidadeAtual(){
    console.log("Velocidade atual: " + this.velocidade + "km/h")
  }
}

class Esportivo extends Carro{
  acelerar(adicionarVelocidade){
    let calculoVelocidade = this.velocidade + adicionarVelocidade
    if (calculoVelocidade > this.velocidadeMax){
      this.velocidade = calculoVelocidade
      console.log("CUIDADO! Nossos veículos esportivos não possuem limitador de velocidade, mas você está muito rápido!"+
                  "\nVelocidade atual: " + this.velocidade +
                  "km/h\nFavor, desacelerar o veículo!\n")
    } else {
      this.velocidade = calculoVelocidade
    }
  }
}


let nissanGtr = new Esportivo("Nissan GTR", 310, 9)
nissanGtr.acelerar(400)
//O metodo aplicado foi o da subclasse Esportivo
nissanGtr.desacelerar(500)
//Aqui como nao foi encontrado um metodo na subclasse, foi aplicado o metodo da classe principal Carro
nissanGtr.velocidadeAtual()
