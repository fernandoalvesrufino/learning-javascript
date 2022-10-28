//metodos estaticos sao chamados direto na classe, diferente dos "normais" que sao chamados no objeto
//Sao uteis quando queremos que algo nao se altere independente da instancia do objeto

class Investimento{
  constructor(nome, aporteMensal) {
    this.nome = nome
    this.aporteMensal = aporteMensal
  }

  static calcularAporteDiario(aporteMensal){
    return aporteMensal / 30
  }
}

//Aqui a classe nao esta sendo instanciada. Um metodo esta sendo chamado direto da classe
//Isso acontece quando definimos esse metodo como estatico
let fernando = Investimento.calcularAporteDiario(500)
console.log(fernando)

//OBS: um metodo estatico so pode ser chamado dessa forma, mesmo que estejamos em um objeto
let gabriella = new Investimento("Gabriella", 1000)
//gabriella.calcularAporteDiario(gabriella.aporteMensal)
//temos como resultado que gabriella.calcularAporteDiario nao é uma funcao

//ou seja, esse metodo nao foi encontrado no objeto. Como podemos fazer:
let aporteDiarioGabriella = Investimento.calcularAporteDiario(gabriella.aporteMensal)
console.log(aporteDiarioGabriella)
//Aqui um metodo da classe Investimento esta sendo chamado independente da instancia de um objeto
