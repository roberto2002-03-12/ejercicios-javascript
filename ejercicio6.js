/*El problema es el siguiente, te van a pasar un número romano a tu función y quieren que lo vuelvas en
int, por ejemplo si te dan I entonces la respuesta debe ser 1, un ejemplo realista es 
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Mi idea es usar splice('') para separar todos y agregarlos en un array,
si el número que le sigue esta dentro de los números que se pueden combinar, entonces se combinan,
pero debes tener en cuenta de que no puedes agregar un "V" en "III"

I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
*/

const romanValues = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];


const romanToInt = (roman = '') => {
  const letters = roman.split('');
  let finalValue = 0;
  
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "I" && letters[i + 1] === "V"){
      finalValue += 4;
      i++;
    } else if (letters[i] === "I" && letters[i + 1] === "X") {
      finalValue += 9;
      i++;
    } else if (letters[i] === "X" && letters[i + 1] === "L") {
      finalValue += 40;
      i++;
    } else if (letters[i] === "X" && letters[i + 1] === "C") {
      finalValue += 90;
      i++;
    } else if (letters[i] === "C" && letters[i + 1] === "D") {
      finalValue += 400;
      i++;
    } else if (letters[i] === "C" && letters[i + 1] === "M") {
      finalValue += 900;
      i++;
    } else {
      finalValue += romanValues[letters[i]];
    }
  }
  return finalValue;
};

console.log(romanToInt('MCMXCIV'));