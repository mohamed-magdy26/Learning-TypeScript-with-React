"use strict";
// const year = document.querySelector('#year');
// const thisYear = new Date().getFullYear();
// year.setAttribute('datetime', thisYear);
// year.textContent = thisYear
// solution 1 Type Guard
// let year: HTMLElement | null = document.querySelector('#year');
// let thisYear: string = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute('datetime', thisYear);
//   year.textContent = thisYear;
// }
// solution 2 Type Assertions
let year = document.querySelector('#year');
let thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear); // setAttribute accepts string arguments
year.textContent = thisYear;
