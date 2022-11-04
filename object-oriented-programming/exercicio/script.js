/*
nome, titulos, federacao, time
se nba qual numero da camisa deseja 
se nbb qual salario recebe

lances livres da carreira deve iniciar com 0
um menu deve apresentar:
1- treinar lances livres - qtd
2- trocar jogador
3- imprimir quantos lances livres foram chutados e sair

para treinar lances livres deve ser pedido a quantidade de chutes

Se for cadastrar outro jogador (2), todos os dados de cadastro serão solicitados novamente e a quantidade
de arremessos do jogador deve iniciar com 0

A impressão deve ser:

Nome: <nome>
Qtd de arremessos: <quantidade>
Numero da camisa: <numero>
Salario: <salario>


OBS: cada classe declarada deve ficar num arquivo à parte. O arquivo principal deve conter apenas a 
inicialização da aplicação e a chamada para as outras classes
*/

class Jogador{
  constructor(nome, titulos, federacao, time) {
    this.nome = nome
    this.titulos = titulos
    this.federacao = federacao
    this.time = time    
    this.lancesLivres = 0
  }

  adicionarLancesLivres(quantidade){
    this.lancesLivres += quantidade
  }

  zerarLances(){
    this.lancesLivres = 0
  }

  imprimirDados(){
    alert(
      "Nome: " + this.nome +
      "\nQtd de arremessos: " + this.lancesLivres + 
      "\nFederação: " + this.federacao + 
      "\n" + mensagem
    )
    alert("Programa encerrado")
  }
}


function cadastroJogador(){
  let newNome = prompt("Qual o nome do jogador?")
  let newTitulos = prompt("Quantos títulos ele possui na carreira?")
  let newFederacao = prompt("Qual federação joga atualmente? NBA ou NBB").toUpperCase();
  informacaoAdicional(newFederacao)  
  let newTime = prompt("Qual time atual?")
  newJogador = new Jogador(newNome, newTitulos, newFederacao, newTime)
  newJogador.zerarLances()
  menu()
}


function informacaoAdicional(federacaoSelecionada){
  if (federacaoSelecionada == "NBA"){
    let camisaNumero = prompt("Informe o numero da camisa desejada: ");
    alert("Camisa selecionada: " + camisaNumero)
    mensagem = "Número da camisa: " + camisaNumero
  } else if (federacaoSelecionada == "NBB") {
    let salarioAtual = prompt("Informe o salário atual: ");
    let salarioAtualFormatado = parseFloat(salarioAtual);
    mensagem = "Salário: R$" + salarioAtualFormatado.toFixed(2);
  } else {
    alert("Federação " + federacaoSelecionada + " não listada")
    mensagem = ""
  }
}

function menu(){
  let opcoes = prompt("Selecione a opção desejada: \n" +
        "1- Treinar lances livres\n" +
        "2- Trocar jogador\n" +
        "3- Imprimir detalhes e sair")
  opcaoSelecionada(opcoes)
}


function opcaoSelecionada(numero){
  switch (numero){
    case "1":
      let quantidade = prompt("Quantos lances livres deseja treinar?")
      let quantidadeFormatada = parseInt(quantidade)
      newJogador.adicionarLancesLivres(quantidadeFormatada)
      alert(newJogador.lancesLivres)
      menu()
      break
    case "2":
      cadastroJogador()
      break
    case "3":
      newJogador.imprimirDados()
      break
    default:
      alert("Selecione uma opção válida!")
      menu()
      break
  }
}

let newJogador
let mensagem

cadastroJogador()

