"use strict";
// Type assertions (Type Casting)
// we Know better than TS
let a = 'mohamed'; // less specific
a = 10;
// another way but doesn't work with react
let d = 'world';
let e = 'world';
// can return string or number
const addOrConcat = (a, b, c) => {
    if (c == 'add')
        return a + b;
    return '' + a + b;
};
console.log(addOrConcat(2, 3, 'add')); // 5 number
console.log(addOrConcat(2, 3, 'concat')); // 23 string
// ! we want a number but the function can return string or number
// let numberValue: number = addOrConcat(2, 3, 'add');
// * we can use type assertion to tell typescript we know better
// * and the returned value is going to be number by using as
// let numberValue: number = addOrConcat(2, 3, 'add') as number;
// **** Note, TS sees no problem
// **** but the returned value is string as we used concat
// **** but type casting using number (we know Better than TS)
let numberValue = addOrConcat(2, 3, 'concat');
// 10 as string // ! of course an error as 10 for sure is a number
// but we can do this
// unknown is like any but has some other cases
10; // avoid it for now but maybe use it later
// ** The DOM
// type script infers type HTMLImageElement or null because maybe it doesn't exist in the dom
// it infers it to HTMLImageElement because we used "img tag"
const img = document.querySelector('img');
// but in case of classes and Ids it will be just Element or null
const img4 = document.querySelector('#img');
// if we used something like getElementById it will be HTMLElement or null
const img5 = document.getElementById('img');
// we can use (!) to tell TS we are sure element exist in DOM or type casting (as HTMLImageElement)
// img.src; //! TS error and that's because maybe is null
// img5.src;  //! TS will also highlight src also and that's
//! src property may not exist for this HTMLElement so we use (as HTMLImageElement)
// const img5 = document.getElementById('img') as HTMLImageElement;
// we can use (!) to tell TS we are sure element exist in DOM or type casting
// add (as HTMLImageElement)
// add (as Element)
// add (as HTMLElement)
// depending on the case
const img2 = document.querySelector('img');
// const img2 = <HTMLImageElement>document.querySelector('img'); // another syntax
const img3 = document.querySelector('img');
