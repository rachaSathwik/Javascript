const num = 42;
let num_string = String(num);
console.log(num_string);
console.log(typeof num_string); //string
const stringFromBool = String(true);
console.log(typeof stringFromBool);
const boolFromNum = Boolean(0);
console.log(boolFromNum);


//num to String
const number = 12;
const str = String(number);
console.log(`${typeof number} -> ${number}`); //number -> 12
console.log(`${typeof str} -> ${str}`);//string -> 12


//to Number
console.log(Number("0x1BC"));
console.log(Number("12e3"));