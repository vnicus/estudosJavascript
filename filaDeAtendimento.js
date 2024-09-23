class FilaDeAtendimento {
  
  constructor(){
    this.posicao = [];
  }
  
  
  adicionarCliente(iFila){
    this.posicao.push(iFila);
    
    return alert('Cliente adicionado na Fila');
  }
  
  
  atenderCliente(){
    this.posicao.shift();
    return alert('Cliente Atendido! \nmenos um ufa');
  }
  
}

let fila = new FilaDeAtendimento();
let posicaoFila = 0;
let opcao = 0;

do{
  
opcao = parseFloat(prompt('Deseja adicionar ou atender Cliente? \n1 = add Cliente \n2 = Atender Cliente \n0 = Sair'));

if (opcao == 1){
  posicaoFila++;
  fila.adicionarCliente(posicaoFila);
}

if (opcao == 2){
  fila.atenderCliente();
}

alert(`Clientes a serem atendidos: ${fila.posicao.length} \nposições: ${fila.posicao}`);
  
}while(opcao !== 0);