function desacelerarCarro(velocidadeAtual, imprimir) {         //Criada uma funcao HOF desacelerar que necessita de dois parâmetros
  velocidadeAtual -= 30                                        //Informada que a velocidade sera desacelerada em 30km/h
  if (velocidadeAtual < 0){                                    //Se a velocidade for menor que zero
    velocidadeAtual = 0                                        //Atribuir velocidade zero
  }
  imprimir(velocidadeAtual)                                    //Chamada a uma funcao dentro da fancao (isso e conhecido como callback)
  return velocidadeAtual                                       //Retorna a velocidade depois de tratada
}

let imprimirVelocidadeAtual = velocidadeAtual => {             //Essa é a funcao de callback que vai imprimir a velocidade atual na tela
  console.log("Velocidade da nave: " + velocidade + "km/h")
}


let velocidade = 300                                           //Atribuida a variavel com a velocidade inicial

while (velocidade > 0){                                        //Criado laco de repeticao
  velocidade = desacelerarCarro(velocidade, imprimirVelocidadeAtual)        //Chamada a funcao HOF
}
console.log ("A nave está parada e as portas podem ser abertas.")            //Impresso a informacao final de conclusao do programa
