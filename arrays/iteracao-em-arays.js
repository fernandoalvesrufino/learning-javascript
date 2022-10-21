// array.funcaoIterar(function(elementoDesejado, indice, lista) {
//     codigo
// })

let marcasCarros = ["Land Rover", "BMW", "Jeep", "Porsche", "Rolls Royce"]

// forEach percorre um array e para cada elemento ele chama um callback que foi declarado
marcasCarros.forEach(function(carroAtual, index){
    console.log("Carro: " + carroAtual + "\nÍndice: " + index)
})

// map modifica os elementos de um array um a um sem alterar o array de origem
// Percorre cada elemento, altera o elemento pelo retorno colocado no callback e gera um novo array
let letrasMaiusculasCarros = marcasCarros.map(function(carroAtual, index){
    let maiusculas = carroAtual.toUpperCase()
    return maiusculas
})
console.log(letrasMaiusculasCarros)

//filter vai filtrar os elementos do array
//retorna o booleano do array para saber se o elemento passou ou nao no filtro
//se retornar true ela insere no array, se false nao insere
let comNoveOuMaisCaracteres = marcasCarros.filter(elemento => { return elemento.length >= 9})
console.log(comNoveOuMaisCaracteres)

//find e bem parecida com a filter, mas vai retornar o primeiro elemento que satisfizer a condicao 
//retorna o elemento em si, e nao um elemento dentro de uma lista
let com9OuMaisCaracteres = marcasCarros.find(elemento => { return elemento.length >= 9})
console.log(com9OuMaisCaracteres)
