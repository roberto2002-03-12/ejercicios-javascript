/*
se va dar una frase string pangram, en pocas palabras una frase panagrama incluye todas las letras
del abecedario, si el string es un panagrama botar la siguiente respuesta "not pangram" en caso que 
sí lo sea bota "pangram"
*/

function isPangram(str = '') {
    let arrayStr_no_spaces = str.split(' ');
    let arrayStr_letters = arrayStr_no_spaces.join('');
    let arrayStr_letters_separated = arrayStr_letters.split('');
    let arrayStr_no_repeat = [];
    let hasPangram = '';
    let hasMatch = false;
    let arrayAlphabet = [];
    let acumulador = 0;

    for (let i = 0; i < arrayStr_letters_separated.length; i++) {
        hasMatch = arrayStr_no_repeat.some(value => value == arrayStr_letters_separated[i])

        if (!hasMatch) arrayStr_no_repeat.push(arrayStr_letters_separated[i])
    }

    let alphabet;

    for(i = 9, alphabet=''; ++i<36; ){
        alphabet = i.toString(36);
        arrayAlphabet.push(alphabet);
    }

    for (let k = 0; k < arrayStr_no_repeat.length; k++) {
        for (let z = 0; z < alphabet.length; z++) {
            if (arrayStr_no_repeat == alphabet[z]) acumulador += 1;
        }

        if (acumulador == 0) {
            hasPangram = 'not pangram';
            break;
        }

        acumulador = 0;
    };

    if (hasPangram == '') {
        hasPangram = 'pangram';
    }

    return hasPangram;
};


console.log(isPangram("The quick brown fox jumps over the lazy dog"));

//la manera no es la correcta pero si esta cerca