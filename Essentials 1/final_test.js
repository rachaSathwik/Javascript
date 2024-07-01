let a = 20 + "10";
let b = 20 + +"10";
let c = 20 + -"10" + "10";
let d = "10" - "10" + "100";
let e = "A" - "B" + 0xA;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

let x = [10, 20, 30, 40];
let y = [50, 60];
x.reverse().push(y);
console.log(x.length);

let mult = function (a) {
    return function (b) {
        return a * b;
    }
}
let f = mult(2)(10);
console.log(f); // -> 20
