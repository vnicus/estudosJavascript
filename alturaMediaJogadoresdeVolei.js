console.log('Altura media de jogadores de Volei');

numerosJogadores = parseInt(prompt('Digite a quantidade de Jogadores: '));//passando 'string' para numero inteiro -> 'Int'

for (i = 1; i <= numerosJogadores; i++){
  var alturaJogador = parseFloat (prompt('Digite a altura do jogador ' + i));
  
  var alturaSoma = 0
  
  alturaSoma = alturaSoma + alturaJogador;
  
  if (i === 1){
    var maisAlto = alturaJogador;
    var maisBaixo = alturaJogador;
  }
  
  if (alturaJogador > maisAlto){
    maisAlto = alturaJogador
  }
  
  
  if (alturaJogador < maisBaixo){
    maisBaixo = alturaJogador
  }
}

var media = alturaSoma / numerosJogadores

console.log('A média de altura dos jogadores ' + media);
console.log('A Maior altura é ' + maisAlto)
console.log('A Menor altura é ' + maisBaixo)