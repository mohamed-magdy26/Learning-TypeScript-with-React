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

/*
 * Objects
 */

/*
 * we can only assign the whole object we can add or modify properties
 */
let myObj: object;

myObj = []; // arrays are objects "Javascript facts"

// myObj.push('ahmed'); // ! error push doesn't exist with object type

myObj = myTuple1; // tuples are arrays and array are object

myObj = {}; // empty object is an object (ha ha ha ha)

myObj = {
  name: 'mohamed',
  age: 25,
};

// myObj.name = "ahmed" // ! error property doesn't exist

// implicitly defined hover over the the person object to see it (^__^)
// let person = {
//   name: 'mohamed',
//   age: 25,
// };

// ! we can't create new property as it's not implicitly or explicitly defined
// person.isSingle = true;

// * explicitly definition of object and we can modify them
// * we can't add new properties

let person: {
  name: string;
  age: number;
} = {
  name: 'mohamed',
  age: 25,
};

// the only allowed properties
person.age;
person.name;

// person.isSingle = true; // !Error: property isSingle doesn't exist

/* another way to define objects type is to use interface or type Aliases */

type person = {
  name: string;
  age: number;
  isSingle: boolean;
};

// let man: Person = {}; //!error missing the defined properties name, age, isSingle

let man: person = {
  name: 'mohamed',
  age: 25,
  isSingle: true,
};

/*
 * what if the user didn't provide isSingle or not so i need it to be optional
 * we use isSingle?: boolean
 */

// we can use interface or type it doesn't matter for now
interface person2 {
  name: string;
  age: number;
  isSingle?: boolean;
}

// sara decided to not tell us if she isSingle
let woman: person2 = {
  name: 'sara',
  age: 22,
};

// Lina told us that she is not Single
let woman2: person2 = {
  name: 'Lina',
  age: 25,
  isSingle: false,
};

// Type aliases can be very helpful with functions (shorter)
// const greetPeople1 = (person: {
//   name: string;
//   age: number;
//   isSingle?: boolean;
// }) => {
//   console.log('we know you are single Or Not');
// };

const greetPeople = (person: person2) => {
  if (person.isSingle) {
    /*
     * we can add person.isSingle?.valueOf as it's optional and might be undefined
     *  and remove if statements it depends on what we need to return
     */
    return `we know you are single Or Not: ${person.isSingle.valueOf}`;
  }

  return "you didn't tell us";
};

/* 
  * Enums
  ! unlike most typescript features, enums are not a type-level addition to javascript
  ! but something added to the language and runtime
*/

// created enumerated value starting from 0
// we can offset it by defining the start value for example U = 1
// or assign them to other values
enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U); // 0
console.log(Grade.D); // 1

enum Grade2 {
  U = 2,
  D,
  C,
  B,
  A,
}

console.log(Grade2.U); // 2
console.log(Grade2.D); // 3
