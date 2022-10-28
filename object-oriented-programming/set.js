//Simulamos variaveis para formatar valores que vao para o atributo

class Carro {
  constructor(nome) {
    this.nome = nome
    this.velocidade = 0
  }
  //criacao de um metodo para simular uma variavel chamada velocidadeMaxima
  set velocidadeMaxima(aceleracao){
    if (this.velocidadeMaxima > 190){
      this.velocidade = 190
    } else {
      this.velocidade = aceleracao
    }
  }
}

let evoque = new Carro("Evoque")
//o set faz com que velocidadeMaxima seja interpretado como uma variavel
//por isso usamos o = e nao o () OBS: isso acontece porque uma variavel recebe uma informacao com =
evoque.velocidadeMaxima = 200

console.log(evoque)
