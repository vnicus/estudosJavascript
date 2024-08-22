let nomes = []; declaração de vetor no javascript

for(let i = 0; i  5; i++){
  
  nomes[i] = prompt(Digite o nome da posição  + i);
  
}


exibir o nomes que estão nos vetores
for (let i = 0; i  5; i++){
  
  console.log('o nome da posição ' + i + ' é ' + nomes[i]);
  
}

console.log(nomes)exibi de forma panoramica todas as posições do vetor, com posição mais coteudo



AVANÇADO 
nomes.forEach(nome_de_vez = console.log(nome_de_vez)); 
o '.forEach' é um tipo de Loop, uma simplificação do 'for', porém com ele é sacrificado o controle