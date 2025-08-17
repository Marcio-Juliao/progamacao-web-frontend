const listaStr = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto'];
const listaNum = [];
const listaNumPos = [];
const listaNumNeg = [];
const listaNumRep = [2,2,2,3,4,5,6,1,1,1,2,3,4,4,4,44,1,1,11,1,1,12,2,2,2,2,2];

// Preenchendo listaNum com números de -20 a 20
for (let i = -20; i <= 20; i++) {
    listaNum.push(i);
}

// Preenchendo listaNumPost com números positivos até 20
for (let i = 1; i <= 20; i++) {
    listaNumPos.push(i);
}

// Preenchendo listaNumNeg com números negativos até -1
for (let i = -1; i >= -20; i--) {
    listaNumNeg.push(i);
}

// Ex 1.

const primeiroElemento = lista => {
    return lista[0];
}

console.log("Exercício 1: ", primeiroElemento(listaStr));

// Ex. 2

const ultimosTres = lista => {
    return lista.slice(-3)
}

console.log("Exercício 2: ", ultimosTres(listaStr));

// Ex. 3

const quantidadePar = lista => {
    return lista.filter(numero => numero % 2 === 0).length;
}

console.log("Exercício 3: ", quantidadePar(listaNum));

// Ex. 4

const quantidadeImpar = lista => {
    return lista.filter(numero => numero % 2 != 0).length;
}

console.log("Exercício 4: ", quantidadeImpar(listaNum));

// Ex. 5

const quantidadeNegativos = lista => {
    return lista.filter(numero => numero < 0).length;
}

console.log("Exercício 5: ", quantidadeNegativos(listaNum));

// Ex. 6

const somaElementos = lista => {
    return lista.reduce((accum, valor) => accum + valor, 0)
}

console.log("Exercício 6: ", somaElementos(listaNum));

// Ex. 7

const maiorValor = lista => {
    return lista.filter(valor => valor === Math.max(...lista))[0];
}

console.log("Exercício 7: ", maiorValor(listaNum));

// Ex. 8

const menorValor = lista => {
    return lista.filter(valor => valor === Math.min(...lista))[0];
}

console.log("Exercício 8: ", menorValor(listaNum));

// Ex. 9

const todosPositivos = lista => {
    return lista.every(numero => numero >= 0);
}

console.log("Exercício 9 (Positivos e Negativos): ", todosPositivos(listaNum));
console.log("Exercício 9 (Positivos): ", todosPositivos(listaNumPos));

// Ex. 10

const contarValor = (lista, valor) => {
    return lista.filter(num => num === valor).length;
}

console.log("Exercício 10: ", contarValor(listaNumRep, 2));

