const getRange = require('get-range');

// for (const i of getRange(4)) {
//   console.log(i);
// }


console.log(...getRange(0, -5, -1));
console.log(...getRange(-9));
