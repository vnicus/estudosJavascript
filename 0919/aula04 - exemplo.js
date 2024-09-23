//Exercicios 

//ex1 - escreva uma funçao em js que recebe um array de numeros inteiro e retorna a soma dos numeros pares do array

console.log('--------');

function somaDosPares(array) {

    let soma = 0

    array.forEach(num => {

        // '%' representa 'resto de divisão', onde caso o resto seja 0, segnifica que o número é par

        if (num % 2 === 0) {

            soma += num;

        }

    })

    return soma;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somaDosPares(numeros));
