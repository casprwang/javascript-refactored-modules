function logArgs(...args) {
  console.log(arguments);
  console.log(args);
  console.log(arguments.length);
}


logArgs(1, 2, 3);
logArgs();
