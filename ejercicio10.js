/*
nums son los números que se les va sumar a init, nums va cambiar al 
resultado obtenido de la suma de nums e init.
fn es una función que suma, utilizalo para sumar
*/

var reduce = function(nums, fn, init) {
  var val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0));