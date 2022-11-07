/*
Excessoes ou exceptions sao erros que ocorrem no codigo
esses erros podem ser tratados para que o codigo nao quebre
Em js usamos a classe Error que para a execucao e exibe o erro
com o try e o catch tratamos os erros e com throw lancamos nossos proprios erros
*/

class Carro {
  constructor(modelo) {
    this.modelo = modelo
    this.marchas = 5
  }

  reduzirMarcha() {
    if(this.marchas > 1) {
      this.marchas -= 1
      console.log("Reduzindo para a " + this.marchas +  "a marcha ...")
    } else {
      throw new Error("Não existe marcha zero! Mas você pode selecionar o N (Neutro).")
      // com throw aqui foi criada uma mensagem de erro realizando nova instancia da classe Error
    }
  }
}

let bmw = new Carro("320i")
bmw.reduzirMarcha()
bmw.reduzirMarcha()
bmw.reduzirMarcha()
bmw.reduzirMarcha()
bmw.reduzirMarcha()
bmw.reduzirMarcha()
console.log(bmw)

//Se fizermos isso teremos um resultado de marcha 0, mas isso nao faz sentido
//Assim, podemos usar a classe Error para tratar o codigo
