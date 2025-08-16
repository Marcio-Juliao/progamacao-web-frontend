const filtrarNumeros = (lista, valor) => {
    return lista.filter(num => num > valor)
}
function filtrarNomes(lista, letra) {
    return lista.filter(nome => nome.startsWith(letra));
}
console.log(filtrarNumeros([10, 20, 30, 40, 50], 25))
console.log("\n")
console.log(filtrarNomes(['Ana', 'João', 'Maria'], 'A'));