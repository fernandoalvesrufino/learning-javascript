//Array bidimensional é um array que armazena outro array
let infoCarros = [["Land Rover, 5"], [ "BMW", 4], ["Porsche", 2]]
console.log(infoCarros[0])
//Vai se impresso o primeiro array dentro do array infoCarros

infoCarros.push(["Bugatti", 1])
console.log(infoCarros[3])
//Posso adicionar mais elementos, nao necessariamente uma lista

//Para acessar um elemento de um array dentro do array infoCarros:
console.log(infoCarros[1][0])
//Se houverem mais arrays dentro de arrays posso acessar o elemento atraves dos indices dentro dos colchetes
