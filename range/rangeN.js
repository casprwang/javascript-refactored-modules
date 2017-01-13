// const main = function* (start, stop = start, stop) {
//
// }

function isTwoInput(...input) {
  return (input.length === 2) ? 'input =2' : 'input !=2';
}

console.log(isTwoInput(1, 2, 4));
console.log(isTwoInput());
