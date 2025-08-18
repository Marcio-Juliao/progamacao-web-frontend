const numeros = [5, 2, 9, 1];

console.log("Array inicial:", numeros);

const bubbleSortStep = (arr) => {
    const array = [...arr]; // copiar para não alterar o original
    let volta = 1;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            console.log(`Comparando ${array[j]} e ${array[j + 1]}`);
            if (array[j] > array[j + 1]) {
                // Troca
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                console.log(`  Troca realizada: [${array.join(", ")}]`);
            } else {
                console.log(`  Nenhuma troca: [${array.join(", ")}]`);
            }
        }
        console.log(`Fim da volta ${volta}: [${array.join(", ")}]\n`);
        volta++;
    }

    return array;
};

const resultado = bubbleSortStep(numeros);
console.log("Array final ordenado:", resultado);
