let str = "12";
str = +str;

console.log(`${str} -> typeof str`);//12 -> number

let n = 10;
let m = ++n;
console.log(n);//11
console.log(m);//11

let ans = false || "false";
console.log(ans);//false