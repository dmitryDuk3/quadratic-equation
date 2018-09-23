module.exports = function solveEquation(equation) {
  let array = equation.split(' ');// your implementation
  let a = array[0];
  let b = parseInt(array[3].toString() + array[4].toString());
  let c = parseInt(array[7].toString() + array[8].toString());

  let x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

  return [Math.round(x1), Math.round(x2)].sort((a, b) => a - b);
}