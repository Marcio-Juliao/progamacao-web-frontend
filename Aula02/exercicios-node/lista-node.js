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
    return lista.filter(numero => numero % 2 !== 0).length;
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
    return Math.max(...lista);
}

console.log("Exercício 7: ", maiorValor(listaNum));

// Ex. 8

const menorValor = lista => {
    return Math.min(...lista);
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

// Ex. 11

const numerosPares = lista => {
    return lista.filter(numero => numero % 2 === 0);
}

console.log("Exercício 11: ", numerosPares(listaNum));

// Ex. 12

const numerosImpares = lista => {
    return lista.filter(numero => numero % 2 !== 0);
}

console.log("Exercício 12: ", numerosImpares(listaNum));
    
// Ex. 13

const ordemInversa = lista => {
    return [...lista].reverse();
    // Poderia usar lista.reverse() diretamente, mas isso modificaria a lista original.
    // ou poderia usar lista.slice().reverse() para não modificar a original.
}

console.log("Exercício 13: ", ordemInversa(listaNum));

// Ex. 14

const elementosDuplicados = lista => {
    return new Set(lista).size !== lista.length;
}

console.log("Exercício 14: ", elementosDuplicados(listaNum));
console.log("Exercício 14 (Lista com repetidos): ", elementosDuplicados(listaNumRep));

// Ex. 15

const mediaDosValores = lista => {
    return somaElementos(lista) / lista.length;
}

console.log("Exercício 15: ", mediaDosValores(listaNum));

// Ex. 16

const valoresMaioresQue = (lista, valor) => {
    return lista.filter(numero => numero > valor);
}

console.log("Exercício 16: ", valoresMaioresQue(listaNum, 10));

// Ex. 17

const valoresUnicos = lista => {
    return [...new Set(lista)];
}

console.log("Exercício 17: ", valoresUnicos(listaNum));

// Ex. 18

const listaOrdenada = lista => {
    if (!lista.every(item => typeof item === 'number')) {
        return "Todos os elementos da lista devem ser números.";
    }

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < lista[i - 1]) return false;
    }
    return true;

}

console.log("Exercício 18: ", listaOrdenada(listaNum));
console.log("Exercício 18 (Lista não ordenada): ", listaOrdenada(listaNumRep));
console.log("Exercício 18 (Lista de strings): ", listaOrdenada(listaStr));

// Ex. 19

const somaDosVetores = (vetor1, vetor2) => {
    if (vetor1.length !== vetor2.length) {
        return "Os vetores devem ter o mesmo tamanho.";
    }
    return vetor1.map((valor, index) => valor + vetor2[index]);
}

console.log("Exercício 19: ", somaDosVetores(listaNumPos, listaNumNeg));
console.log("Exercício 19 (Vetores de tamanhos diferentes): ", somaDosVetores([1, 2], [3, 4, 5]));

// Ex. 20

const maioresValores = (lista, n) => {
    return [...lista].sort((a, b) => b - a).slice(0, n);
}

console.log("Exercício 20: ", maioresValores(listaNum, 15));
console.log("Exercício 20 (Cenário de exemplo): ", maioresValores([1,34,78,2,5,77], 2));