<h1 align="center">JavaScript <img src="https://miro.medium.com/max/342/1*rpYyNZvqfFej0FgWEW5p9Q.png" height="35"></h1>
<p>Nesse repositório vou descrever todos os meus aprendizados em JavaScript</p>

<h2>Expressões e Operadores</h2>

<table border="1">    
  <tr>
    <th>Nome</th>
    <th>Operador</th>
  </tr>        
  <tr>
    <td>Atribuição</td>
    <td>=</td>
  </tr>
  <tr>
    <td>Soma</td>
    <td>+</td>
  </tr>
  <tr>
    <td>Subtração</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Multiplicação</td>
    <td>*</td>
  </tr>
  <tr>
    <td>Divisão</td>
    <td>/</td>
  </tr>
  <tr>
    <td>Resto da divisão</td>
    <td>%</td>
  </tr>
  <tr>
    <td>Igual</td>
    <td>==</td>
  </tr>
  <tr>
    <td>Diferente</td>
    <td>!=</td>
  </tr>
  <tr>
    <td>Maior que</td>
    <td>></td>
  </tr>
  <tr>
    <td>Menor que</td>
    <td><</td>
  </tr>
  <tr>
    <td>Maior ou igual a</td>
    <td>>=</td>
  </tr>
  <tr>
    <td>Menor ou igual a</td>
    <td><=</td>
  </tr>
    <tr>
    <td>Estritamente igual</td>
    <td>===</td>
  </tr>
    <tr>
    <td>Estritamente diferente</td>
    <td>!==</td>
  </tr>
    <tr>
    <td>Incremento</td>
    <td>++</td>
  </tr>
    <tr>
    <td>Decremento</td>
    <td>--</td>
  </tr>
    <tr>
    <td>Exponenciação</td>
    <td>**</td>
  </tr>
    </tr>
    <tr>
    <td>E</td>
    <td>&&</td>
  </tr>
    </tr>
    <tr>
    <td>Ou</td>
    <td>||</td>
  </tr>
    </tr>
    <tr>
    <td>Não</td>
    <td>!</td>
  </tr>
 
</table>

<h2>Variáveis</h2>
<p>
  Assim como no Python, no JavaScript não há necessidade de declarar o tipo da variável.
  Podemos fazer a declaração de uma variável no JavaScript com três operadores, são eles: <strong>var, let e const</strong>. Os mais usados são <strong>let e const</strong>.
</p>
<p>
  Os tipos de variáveis em JS são classificados em:
</p>
<br>
<table border="1">    
  <tr>
    <th>Tipo de Variável</th>
    <th>Descrição</th>
  </tr>        
  <tr>
    <td>Strings</td>
    <td>Texto</td>
  </tr>
  <tr>
    <td>Numbers</td>
    <td>São os números, seja eles integer, float, double etc.</td>
  </tr>
    <tr>
    <td>Booleans</td>
    <td>São os operadores booleanos (true ou false)</td>
  </tr>
    <tr>
    <td>Arrays</td>
    <td>É uma estrutura de dado para armazenar uma coleção de valores, sendo eles de qualquer tipo. Similar as listas em Python</td>
  </tr>
    <tr>
    <td>Objects</td>
    <td>Conjunto de atributos aninhados a uma variável</td>
  </tr>
    <tr>
    <td>Functions</td>
    <td>Em JavaScript é possível declarar uma variável como uma função, podendo fazer operações e retornando o valor para a variável de declaração</td>
  </tr>
</table>

<h2>Tabela verdade dos operadores lógicos</h2>

<h2>E (&&)</h2>
<table border="1">    
  <tr>
    <th>A</th>
    <th>B</th>
    <th>Resultado</th>
  </tr>        
  <tr>
    <td>True</td>
    <td>True</td>
    <td>True</td>
  </tr>
  <tr>
    <td>True</td>
    <td>False</td>
    <td>False</td>
  </tr>
  <tr>
    <td>False</td>
    <td>True</td>
    <td>False</td>
  </tr>
  <tr>
    <td>False</td>
    <td>False</td>
    <td>False</td>
  </tr>
</table>

<h2>Ou (||)</h2>
<table border="1">    
  <tr>
    <th>A</th>
    <th>B</th>
    <th>Resultado</th>
  </tr>        
  <tr>
    <td>True</td>
    <td>True</td>
    <td>True</td>
  </tr>
  <tr>
    <td>True</td>
    <td>False</td>
    <td>True</td>
  </tr>
  <tr>
    <td>False</td>
    <td>True</td>
    <td>True</td>
  </tr>
  <tr>
    <td>False</td>
    <td>False</td>
    <td>False</td>
  </tr>
</table>

<h2>Não (!)</h2>
<table border="1">    
  <tr>
    <th>A</th>
    <th>Resultado</th>
  </tr>        
  <tr>
    <td>True</td>
    <td>False</td>
  </tr>
  <tr>
    <td>False</td>
    <td>True</td>
  </tr>
</table>
  
<h2>Condicionais</h2>
<p>
  A Estrutura Condicional executa um código quando certas condições SÃO atendidas, ou executa algum código se as condições NÃO são atendidas. Também é possível criar várias condições diferentes para execurtar códigos diferentes. Para isso, são usados as expressões IF (se), ELSE (senão) e ELSE IF (senão se).
</p>

```
if (condição 1) {                 //Se a condicao 1 for verdadeira, executa o que está dentro das chaves de if
    bloco para condição 1 'true';
 } else if (condição 2) {         //Se a condicao 1 nao for verdadeira, verificar se condicao 2 eh verdadeira. Se sim executa chaves de else if
    bloco para condição 2 'true';
 } else {                         //Se as condicoes 1 e 2 forem falsas, executa chaves de else
    bloco para condição 'false';
 }
```

<h3>PS: Operador ternário</h3>
<p>
  Geralmente é usado como um atalho para o if. É possível escrever o if em apenas uma linha, por assim dizer. OBS: Só é recomendado usar esse operador quando o condicional é simples, apenas com if e else.
</p>

```
condition ? expr1 : expr2
//se a condiçao antes da ? for verdadeira executa a primeira expressao (expr1), se for falsa executa a segunda expressao (expr2)
```
