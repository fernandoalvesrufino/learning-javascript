//Assim como é possivel criar um objeto dentro de outro objeto
//tambem é possivel instanciar uma classe dentro de outra classe

class MelhorJogador {
  constructor(nome, numero, idade){
    this.nome = nome
    this.numero = numero
    this.idade = idade
  }
}

class Time {
  constructor(nome, pais, nomeMelhorJogador, numeroMelhorJogador, idadeMelhorJogador){
    this.nome = nome
    this.pais = pais
    this.melhorJogador = new MelhorJogador(nomeMelhorJogador, numeroMelhorJogador, idadeMelhorJogador)
  }
}

let warriors = new Time("Warriors", "EUA", "Stephen Curry", 30, 34)

console.log(warriors)
