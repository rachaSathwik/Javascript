let add = (a,b)=>{
    if(Number.isInteger(a)&&Number.isInteger(b))return a+b;
    else return NaN;
}

let mult = (a,b)=>{
    if(Number.isInteger(a)&&Number.isInteger(b))return a*b;
    else return NaN;
}

let sub = (a,b)=> {
    return (Number.isInteger(a)&&Number.isInteger(b))?a-b:NaN;
}

console.log(add(10,10));
console.log(sub(10,9));

/*
Exercise 4: Write an action function that will take the callback function as its first argument and the other two arguments as numbers. As a callback function, you will be able to pass one of the three functions from the previous task. The action function will call the callback function passed to it and will return the obtained result. The callback function will accept the second and third arguments from the action call.
*/

let action =(callback,a,b)=>callback(a,b);

console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN


/*
Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
*/
// let counter = 1;
// let timerId = setInterval(()=>console.log(counter++),2000);
// setTimeout(()=>clearInterval(timerId),20000);


//fibinocci sequence
let fibinocci = (n)=>{
    if(n==0)return 0;
    if(n==1)return 1;
    return fibinocci(n-1)+fibinocci(n-2);
}

console.log(fibinocci(9));

let fib = n =>{
    return (n==0)?0:(n==1)?1:fib(n-1)+fib(n-2);
}
console.log(fib(9));

//fibinocci Iterative

function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}
console.log(fibbIter(9));