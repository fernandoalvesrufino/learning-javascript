let marcasCarros = ["Land Rover", "Porsche", "Jaguar"]
console.log(marcasCarros[2])
//Quando eu chamo uma posicao no array ele vai buscar o elemento que esta naquela posicao 
//Quando eu chamo uma posicao que nao existe no array (ex: posicao 4) ele me retorna o valor undefined

let Carro = ["Land Rover"]
console.log(Carro)
//Vai me retornar uma lista com o elemento contido na variavel

let numero = [1]
console.log(numero)
//Vai me retornar uma lista com o elemento contido na variavel

let arrayNumero = new Array(5)
console.log(arrayNumero)
//Tomar cuidado nesse caso, pois será impresso ou gravado na variavel uma lista com 5 valores indefinidos (undefined)
//e nao uma lista contendo o valor 5. Nesse caso, seria melhor utilizar os arrays criados anteriormente
