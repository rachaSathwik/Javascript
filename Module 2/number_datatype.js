let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123


let  m  =  1  /  0;
let  n  =  -Infinity;
   
console.log(m);  //  ->  Infinity
console.log(n);  //  ->  -Infinity
console.log(typeof  m);  //  ->  number
console.log(typeof  n);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  nan  =  s  *  10;
console.log(nan);  //  ->  NaN
console.log(typeof  nan);  //  ->  number
let text= "hello"+10;
console.log(text); //hello10


let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n


let  big4  =  1000n  /  0n;  //  ->  Uncaught  RangeError:  Division  by  zero
