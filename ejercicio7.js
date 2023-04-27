//el array debe tener un metodo que devuelve el último valor del array
Array.prototype.last = function() {
  if (this.length == 0) return -1;

  const ultimo = this[this.length - 1];

  return ultimo;
};

var nums = [];

console.log(nums.last())

//resuelto, leetcode aprueba la respuesta