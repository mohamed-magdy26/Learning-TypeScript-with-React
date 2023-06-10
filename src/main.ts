let myName: string = 'Mohamed Magdy'; // explicitly String Type Cannot be changed
let myAge: number = 25; // explicitly number Type Cannot be changed
let isSingle: boolean = 1 || true; // boolean type (we can't assign number for example)
let isActive: boolean | number = 1 || true; // union Type (we can assign number)

let mixed: any = 'das' || 20 || true || null || undefined; // any type is allowed Turn off TypeScript

/* 
function sum(a, b) {
  // inferred to "any" type (implicitly has "any" type)
  return a + b;
}
*/

function sum(a: number, b: number) {
  // explicitly has "number" type
  return a + b;
}

let re: RegExp = /\w+/g; // Regular Expression Type
