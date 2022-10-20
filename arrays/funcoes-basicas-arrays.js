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

//Splice significa emendar ou costurar. Ele substitui o array original
//No splice so o primeiro parametro é obrigatorio
//Sintaxe: array.splice(index[, deleteCount[, elemento1[, ...[, elementoN]]])
console.log(marcasCarros)
let carrosRemovidos = marcasCarros.splice(1, 2, "Ferrari", "Lamborghini", "Rolls Royce")
//Vai remover o que esta na posicao 1 e 2 e colocar no lugar os elementos a seguir
//Ele tambem retorna os elementos removidos
console.log(marcasCarros)
console.log(carrosRemovidos)

//Se nao passarmos nenhum elemento, ele ira remover os elementos indicados. Ex: no caso, o elemento 3
let elementoRemovido = marcasCarros.splice(2, 1)
//A partir da posicao 2 ele só ira remover 1 elemento
console.log(marcasCarros)
console.log(elementoRemovido)

//O slice vai alterar a ordem do array sem alterar o original. Significa fatiar ou dividir
//Sintaxe: lista.slice([indice-inicial[, indice-final]])
//OBS: nao sera incluido o indice-final
let carrosExtraidos = marcasCarros.slice(1, 3)
console.log(marcasCarros)
console.log(carrosExtraidos)
//Criou um novo array com os valores que foram extraidos
