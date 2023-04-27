/*

*/

//la solución esta bien pero los de leetcode lo quieren de otra manera, que pesados.
/*
var nums = [];
var plus = 0;
var createCounter = function(n) {
  return function() {
    nums.push(n + plus);
    plus++;
    return nums[plus - 1];
  };
};

const counter = createCounter(-2)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(nums);
*/
//me di cuenta que no es necesario el array porque el resultado lo guardan en un array
//en el ambiente de ellos, por lo que no necesito nums.

/*
var numsToPlus = [];
var plus = 0;
var createCounter = function(n) {
  return function() {
    numsToPlus.push(plus);
    plus++;
    return n + numsToPlus[plus - 1];
  };
};

const counter = createCounter(-2)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(numsToPlus);
*/

//por alguna razón la respuesta era solamente añadir "++" a "n"
//igualmente las anteriores respuestas también estaban bien, pero no entiendo el por qué
//funciona con simplemente ++

/*
si estoy consciente de que con var se puerde guardar valores de manera global,
sin embargo, no sabía que también aplicaba para las funciones declaradas con var
y que este también afecta a los valores que se le declarán en la función.
*/

var createCounter = function(n) {
  return function() {
    return n++;
  };
};

const counter = createCounter(-2)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());