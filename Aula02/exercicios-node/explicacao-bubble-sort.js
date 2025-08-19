const numeros = [5, 2, 9, 1];

console.log(">>> INÍCIO DO PROGRAMA");
console.log("Array inicial recebido:", numeros);

// Função Bubble Sort
const bubbleSortStep = (arr) => {
    console.log("\n>>> CHAMANDO A FUNÇÃO bubbleSortStep");
    console.log("Parâmetro arr recebido:", arr);

    // Criamos uma cópia do array original
    const array = [...arr]; 
    console.log("Cópia criada (para não alterar o original):", array);

    let volta = 1;

    // Laço externo -> controla as voltas
    for (let i = 0; i < array.length; i++) {
        console.log(`\n--- VOLTA ${volta} (i = ${i}) ---`);
        console.log("Estado inicial da volta:", array);

        // Laço interno -> faz as comparações dentro da volta
        for (let j = 0; j < array.length - 1 - i; j++) {
            console.log(`\nComparando índices j=${j} e j+1=${j+1}`);
            console.log(`Valores: ${array[j]} (posição ${j}) e ${array[j+1]} (posição ${j+1})`);

            // Verifica se precisa trocar
            if (array[j] > array[j + 1]) {
                console.log(">> É MAIOR, então vamos TROCAR!");

                // Troca manual
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                console.log("Array após a troca:", array);
            } else {
                console.log(">> NÃO precisa trocar, array continua:", array);
            }
        }

        console.log(`\nFim da volta ${volta}. Array agora está assim:`, array);
        volta++;
    }

    console.log("\n>>> FIM da função bubbleSortStep");
    console.log("Array ORDENADO:", array);

    return array;
};

// Chamando a função
console.log("\n>>> CHAMANDO bubbleSortStep(numeros)");
const resultado = bubbleSortStep(numeros);

console.log("\n>>> VOLTOU para o programa principal");
console.log("Array final ordenado:", resultado);
