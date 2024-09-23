let i = 1;
let acoesExecutadas = [2,3,4,5,6,7];

while(i == 1){

function isEmpty() {
  return acoesExecutadas.length === 0;
}
  
function adicionar(){
  let recebeAcao = parseFloat(prompt('Digite um valor de 1 a 10:\n(Aperte Enter após digitar)'));
  acoesExecutadas.push(recebeAcao);
  return alert('Ação adicionada com sucesso!\nAção: ' + recebeAcao);
}

function desfazer(){
  
  if(isEmpty()){
    return alert('Não há mais ações no historico');
  }
  
  let acaoRemovida = acoesExecutadas.pop();
  return alert('Ação removida!\nAção: ' + acaoRemovida);
}

let opcao = parseFloat(prompt('Deseja adicionar ou remover?\nDigite 1 para adicionar\nDigite 2 para remover'));

if (opcao === 1) {
  adicionar();
} 

if(opcao === 2) {
  desfazer();
}

alert('Histórico: \n' + acoesExecutadas);
  
i = parseFloat(prompt('Deseja continuar? \nsim digite 1 \nnão digite 2'));

}