/* eslint-disable no-unused-vars */

// Function declaration
function declaredFunction() {
  console.log('This is a function declaration');
}

// Function expression
const expressionFunction = function () {
  console.log('This is a function expression');
};

// Arrow function (see arrow-functions.js for more)
const arrowFunction = () => {
  console.log('This is an arrow function');
};

// Hoisting

basicAdd(); // works
// assignedAdd(); // fails

// Function declaration: hoisted
function basicAdd() {
  return 2 + 2;
}

// Function expression: not hoisted
const assignedAdd = function () {
  return 2 + 2;
};

// Function references can be copied
const otherAdd = basicAdd;

// Typical function
function add(x, y) {
  return x + y;
}

// Default parameter values
function addDefaults(x = 0, y = 10) {
  return x + y;
}

addDefaults(5); // 15

// Function signatures are not enforced in JavaScript
// Allowed
addDefaults(5, 7); // 12
addDefaults(1, 2, 3, 4, 5); // 3
addDefaults(undefined, 5); // 5
addDefaults(1); // 11
addDefaults(); // 10

// Works
addRest(1, 2, 3, 4, 5);
addRest(10, undefined, 4, 8, 12);

// Rest parameters
// The "rest" of the values
function addRest(x = 0, y = 0, ...otherParams) {
  console.log('Other params: ', otherParams);
  let total = 0;
  for (const x of otherParams) {
    total = total + x;
  }
  return x + y + total;
}

function getAllParameters(...params) {
  // params is an array of all arguments
}

getAllParameters(1, 2, 3);
getAllParameters('John', 30, true, ['a', 'b', 'c']);

function addValues(config = { a: 0, b: 0, c: 0 }) {
  return config.a + config.b + config.c;
}

function addValuesLoop(config) {
  let total = 0;
  for (const key in config) {
    if (['a', 'b', 'c'].includes(key)) {
      total += config[key];
    }
  }
  return total;
}

const values = {
  a: 1,
  // b: 2,
  c: 3,
  d: 4,
  e: 5,
};

addValues(values);

// Can just vaccuum up all arguments into one array
function addAll(...numbers) {
  let total = 0;
  for (const x of numbers) {
    if (typeof x === 'number') {
      total = total + x;
    }
  }
  return total;
}

addAll(1, 2, 3, 4, 5);

// Functions can return functions
function getGreeter() {
  return function () {
    console.log('Greetings!');
  };
}

const greeter = getGreeter();
greeter();

const getCustomGreeter = function (name) {
  return function () {
    console.log('Greetings,', name);
  };
};

const customGreeter = getCustomGreeter('John');
customGreeter();

function calculator(x, y, op) {
  return op(x, y);
}

const result = calculator(5, 10, function (a, b) {
  return a + b;
});

// Real-world example of passing a function to another function
addEventListener('click', function (event) {
  console.log('You clicked on the button!');
});

// JavaScript only has manual-style overloading, not as a language feature
function overloaded(x, y) {
  if (typeof x === 'string') {
    // do this
  } else if (typeof x === 'number') {
    // do something else
  }
}

function opAll(x, y) {
  return [x + y, x - y, x * y, x / y];
}

// Kinda sorta multiple return values, syntactically speaking
const x = 10;
const y = 20;
const [sum, difference, product, dividend] = opAll(x, y);
console.log(`Adding ${x} and ${y} yields ${sum}`);
