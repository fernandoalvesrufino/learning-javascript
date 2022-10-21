/* 
Assim como os arrays, sao uma estrutura de dados capaz de armazenar e organizar dados
Porem, ele é organizado por propriedade, onde faz uma associacao chave-valor
Chave: nome da propriedade
Valor: valor que a chave vai receber
OBS: Similar aos didionarios em python
*/

let carro = {
  nome: "Land Rover",
  passageiros: "7",
  modelo: "Velar"
}

console.log(carro)
console.log(carro.modelo)
// Aqui ele vai buscar o vaor contido na chave
console.log(carro["passageiros"])
// Aqui ele tambem vai buscar o vaor contido na chave

carro.cambio = "Automático"
//Estou adicionando uma nova chave e valor ao objeto
carro["importado"] = true
//Estou tambem esta sendo adicionando uma nova chave e valor ao objeto
console.log(carro)

console.log(carro["cambio"])
console.log(carro.importado)
//imprimindo apenas a propriedade

let roupas = {}
let marcas = new Object()
// Um objeto tambem pode ser criado vazio dessas duas formas
console.log(roupas) 
console.log(marcas) 
