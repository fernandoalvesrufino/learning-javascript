/*
O try tenta executar um bloco de codigos, se encontrar algum erro vai cair no catch e independente de 
ter caido no catch ou nao, o finally é executado.
class Carro {
  constructor(modelo) {
    this.modelo = modelo
    this.combustivel = 50
  }

  consumirCombustivel() {
    if(this.combustivel > 0) {
      this.combustivel -= 10
      console.log("Consumindo 10 litros de combustível ... Combustível restante: " + this.combustivel + " litros")
    } else {
      throw new Error("O combustível acabou!")
      // com throw aqui foi criada uma mensagem de erro realizando nova instancia da classe Error
    }
  }

  reabastecer(){
    this.combustivel = 50
  }

}

let bmw = new Carro("320i")
try {
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  bmw.consumirCombustivel()
  //quando o programa identificar que o try nao atende mais aos requisitos, o try é interrompido e o catch é executado.
} catch(e) {
  console.log(e.message)
} finally {
  console.log("A autonomia do seu " + bmw.modelo + " é de 10 km/l")
}
console.log(bmw)
*/


