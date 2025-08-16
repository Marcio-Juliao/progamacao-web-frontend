const listaStr = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto'];
const listaNum = [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Ex 1.

const primeiroElemento = (lista) => {
    return lista[0];
}

console.log(primeiroElemento(listaStr));

// Ex. 2

const ultimosTres = (lista) => {
    return lista.slice(-3)
}

console.log(ultimosTres(listaStr));

// Ex. 3

const quantidadePar = (lista) => {
    return lista.filter(numero => numero % 2 == 0).length;
}

console.log(quantidadePar(listaNum));

// Ex. 4

const quantidadeImpar = (lista) => {
    return lista.filter(numero => numero % 2 != 0).length;
}

console.log(quantidadeImpar(listaNum));

// Ex. 5

const quantidadeNegativos = (lista) => {

}