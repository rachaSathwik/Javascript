// let part = 0;
// console.time('Leibniz');
// for (let k = 0; k < 10000000; k++) {
//     part = part + ((-1) ** k) / (2 * k + 1);
// }
// console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
// let pi = part * 4;
// console.log(pi); // -> 3.1415925535897915


//Optimized

let part = 0;
console.time('Leibniz');
for(let k = 0; k < 10000000; k++) {
    part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 175.5458984375 ms
let pi = part * 4;
console.log(pi);

