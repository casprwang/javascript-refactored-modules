const main = function* (start, stop, step) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  step = typeof step === 'number' ? step : 1;

  if (step === 0) {
    throw new TypeError('The `step` parameter cannot be zero');
  }

  let i = start;

  while (step >= 0 ? i < stop : i > stop) {
    yield i;
    i += step;
  }
};

// console.log(...main(0, -5, -1));

//= > 3


//= > 0
console.log(...main(-1));
//= > 2
