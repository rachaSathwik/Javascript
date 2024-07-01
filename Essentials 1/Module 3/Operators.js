//Assignment
let name = 'Kohli';
let othername = name = "Virat";
console.log(othername);
console.log(name);

//unary arithmetic operators
let str = "Hello";
let nstr = "1234";
let n1 = +nstr;
let n2 = -nstr;
console.log(`nstr: ${typeof nstr}, n1: ${typeof n1} ${n1}`);
console.log(`nstr: ${typeof nstr}, n2: ${typeof n2} ${n2}`);
let num = +str;
let num2 = -str;
console.log(num); //NaN
console.log(num2);//NaN

//inc and dec operators
let number = 10;
console.log(number++);//increments number ie. number =11 but returns org value
console.log(++number);//increments and returns actual value

for(let i=0;i<10;i++){
    console.log(i);
}

for(let i=0;i<10;++i){ //no difference as statements are executed immediately after passing the condition
    console.log(i);
}

//logical 
const a = false;
const b = true;
const c = false;
const d = true;
console.log(a&&b||c&&d); 


//non-boolean
console.log(true && 12);//12
console.log(false||13);//13
console.log(12&& 12);//12
console.log(14&& 12);//12
console.log(190||432);//190
console.log(false||false);//false

let ca = true;
console.log(ca&&=false);//a=a&&false -> false

console.log(4*5&&20);