//Utilizado para retornar um valor como uma variavel
class Investimento{
  constructor(nome, aporteMensal) {
    this.nome = nome
    this.aporteMensal = aporteMensal
  }
  //o get tambem faz com que esse metodo seja interpretado como uma variavel
  get aporteSemanal(){
    return this.aporteMensal / 4
  }
}

let fernando = new Investimento("Fernando", 300)
console.log(fernando.aporteSemanal)
//Nao é necessario abrir e fechar parenteses porque o metodo foi interpretado como uma variavel
//Entao, nao devo chamar como metodo e sim como variavel

let gabriella = new Investimento("Gabriella", 1000)
console.log(gabriella.aporteSemanal)
