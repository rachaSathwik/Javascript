// Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

let num1 = 1000;
let num2 = Number("1200");

let BI1 = 12n;
let BI2 = BigInt("1267");

let b1 = true;
let b2 = Boolean("0");

let ud;

console.log(`${num1} - [${typeof num1}]`);
console.log(`${BI1} - [${typeof BI1}]`);
console.log(`${b2} - [${typeof b2}]`);
console.log(`${ud} - [${typeof ud}]`);

//3
const string = "1234";
const num = Number(string);
const bg = BigInt(num);
const bool = Boolean(bg);
console.log(`${bool} [${typeof bool}]`);


//4
const str = "Abhi";
const numb = 429;
console.log(str-numb); //NaN
console.log(str+numb); //Abhi429

//5
let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! 1 [number] 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! NaN [number]



const bool_val = true, bg_num = 1234n; 
//const sum = bool_val-bg_num; //error

//6
const str1 = 42+ +"1";
const ans = 42+Number("1");

console.log(str1);//43

