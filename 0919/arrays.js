
//unshift, shift
let letras = ["a","b","c","d"];
console.table(letras);

letras.shift();
console.table(letras);


letras.unshift(4);
console.table(letras);

//push() e pop()
letras.push([2,4]);
console.table(letras);


//Array - pode ser acessado pelo o indice
let numero = [1, 2, 3, 4, 5];

numero.forEach(num => { //forEach, percorre um array, faz uma iteração.
    console.log(num);
})

console.log('--------');

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][1]);


// --------------------------

//pilha segue o principio LIFO - sua regra é o ultimo a entrar é o primeiro a sair
//push - add no final
//pop - remove o ultimo
//peek - retorna o item no topo da pilha;
//isEmpty - verifica se a pilha esta vazia (retorna em tipo boleano);


// --------------------------


//filas segue o principio FIFO - sua regra é o primeiro a entra é o primeiro a sair
//push - add no fim
//shift - tira o primeiro