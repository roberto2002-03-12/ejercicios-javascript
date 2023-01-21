/*
en una lista de números retorname el único valor que no sea repetido
*/

let ar_num = [1, 2, 3, 4, 3, 2, 1];

function numSolo(array = []) {
    let copia = array;
    let acumulador = 0;
    let respuesta = 0;

    for (let i = 0; i < array.length; i++) {
        console.log('primer bucle');
        for (let j = 0; j < copia.length; j++) {
            if (array[i] == copia[j]) {
                acumulador += 1;
            }
        }
        if (acumulador < 2) respuesta = array[i];
        
        acumulador = 0;
    }

    return respuesta;
}

console.log(numSolo(ar_num));

//completado, la respuesta esta bien