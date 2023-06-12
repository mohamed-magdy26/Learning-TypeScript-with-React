"use strict";
// ** literal Types
let myName;
myName = 'Mohamed'; // it can only assigned with this value
// it can only assigned to one of these values
let UserName;
// it's either 1 or 0
let isActive = 0;
isActive = 1;
// isActive = 2; //! not Assignable
// ** Functions
// void return type
// typescript infers void type as we don't return anything
// (we can explicit it of course)
const logMsg = (msg) => {
    console.log(msg);
};
// explicitly defined the return type and parameters types
const add = (a, b) => {
    return a + b;
};
//* we can use both function definition and arrow function definition
const sum = function (a, b) {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
const multiply2 = (a, b) => {
    return a * b;
};
//* optional parameters
// if "c" is optional parameter
// it may become undefined so we have to use narrower (if statement)
// optional parameters must be at the end
const addTwoOrThree = (a, b, c) => {
    if (c) {
        return a + b + c;
    } // if we stopped here function may return number or undefined
    return a + b;
};
// default param value
// we set a default value for arguments
const add5orAnotherValue = (a, c = 5) => {
    return a + c;
};
add5orAnotherValue(2); // add 2 + 5
add5orAnotherValue(2, 4); // add 2 + 4
// if the default value at the start
// we pass undefined to use the default value
const add5orAnotherValue2 = (c = 5, a) => {
    return a + c;
};
add5orAnotherValue2(undefined, 2); // add 5 + 2
add5orAnotherValue2(2, 4); // add 2 + 4
// Rest Parameters
// rest is passed as arguments but deal with it as array
// typescript infers reduce to number type
// as total function only accepts number and return number
const total = (...rest) => {
    // rest is an array
    return rest.reduce((value, accumulator) => accumulator + value, 0);
};
// we pass parameters normally
console.log(total(1, 2, 3, 4)); // 10
// custom type guard
// TypeScript infers boolean type
// I just made it "true | false" as literal type
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// never Type //* if there is an error or infinite loop
// typescript infers never type (hover to see it)
const newError = (msg) => {
    throw new Error(msg);
};
//* commented it to not cause infinite loop (ha ha ha)
/*
const noExit = () => {
  while(true) {
    console.log('hello');
  }
}
*/
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return newError('This should never happen!');
};
