let marcasCarros = ["Land Rover", "Porsche", "Jaguar", "Mercedes", "Maseratti"]
console.log(marcasCarros)

marcasCarros.push("BMW")
console.log(marcasCarros)
//A funcao push adiciona um elemento ao final

marcasCarros.unshift("Jeep")
console.log(marcasCarros)
//A funcao unshift adiciona um elemento no comeco da lista

marcasCarros.pop()
console.log(marcasCarros)
//A funcao pop remove o elemento da ultima posicao

let ultimoElementoRemovido = marcasCarros.pop()
console.log(marcasCarros)
console.log("Elemento removido: " + ultimoElementoRemovido)
//Tambem é possivel retornar o elemento removido com o pop

let primeiroElementoRemovido = marcasCarros.shift()
console.log(marcasCarros)
console.log("Elemento removido: " + primeiroElementoRemovido)
//A funcao shift remove o primeiro elemento da lista e ela tambem retorna o elemento se quisermos


console.log(marcasCarros.length)
//.length imprime o tamanho do array

let posicaoPorsche = marcasCarros.indexOf("Porsche")
console.log(posicaoPorsche)
//Imprime o indice, ou seja, a posicao do elemento na lista

let posicaoBugatti = marcasCarros.indexOf("Bugatti")
console.log(posicaoBugatti)
//Quando nao encontra o valor na array é retornado o valor de -1
