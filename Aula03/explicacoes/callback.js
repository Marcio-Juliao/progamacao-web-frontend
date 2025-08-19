function cumprimentar(nome, callback) {
    console.log(`Olá, ${nome}!`);
    callback();
}

function fechamento() {
    console.log("Foi bom te encontrar!");
}

cumprimentar('A', fechamento);