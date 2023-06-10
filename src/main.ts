// TypeScript implicitly Infers string[] type
let stringArr = ['mohamed', 'ahmed', 'ayman'];
// TypeScript implicitly infers number[] type
let numberArr = [23, 33, 22];
// TypeScript implicitly infers boolean[] type
let booleanArr = [true, false];
// typeScript implicitly infers union type of (string | number | boolean)[]
let mixedArr = ['mohamed', 25, true];
// typeScript implicitly infers "any" type because the array is empty
let anyTypeArr = [];

// stringArr = booleanArr || numberArr; // ! error for not matched types

mixedArr = booleanArr || numberArr || stringArr; // no errors Because mixed array is a union type

// stringArr.push(true) // ! error for adding boolean to string[] array
// numberArr.unshift('ahmed'); // ! error for adding string to number[] array

// allowed statements as the target is "any[]" type
anyTypeArr.push('mohamed');
anyTypeArr.push(22);

/*
 * we could also explicitly define types
 */

// let stringArr: string[] = ['mohamed', 'ahmed', 'ayman'];
// let numberArr: number[] = [23, 33, 22];
// let booleanArr: boolean[] = [true, false];
// let mixedArr: (string | number | boolean)[] = ['mohamed', 25, true];
// let anyTypeArr: any[] = [];

/*
 * Tuple is array with fixed length and position with strict types [string,number,boolean] or [number,boolean,string]
 * they are different and can't be assigned to each other and every index must has the defined type
 */

let myTuple1: [string, boolean, number] = ['mohamed', true, 25];
let myTuple2: [string, number, boolean] = ['mohamed', 25, true];

// myTuple1 = myTuple2 // ! error as the order of types are not matched

// myTuple1 = mixedArr; // ! error as mixed array can have more or fewer elements and order can change

/*
 * we can conclude that tuples are strict in order of types and length
 * we can't push more than the defined length
 * we can't assign for example [string] to [number] it has to be the same types
 */
