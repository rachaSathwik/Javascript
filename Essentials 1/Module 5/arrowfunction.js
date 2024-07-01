let msg = function(){
    return "Hello";
}

//arrow
let message = m => `"Hi!" ${m}`;
console.log(message("Sathwik"));
console.log(msg());

let add = (a,b)=>a+b;
console.log(add(10,20));

let factorial = n => n>1?n*factorial(n-1):1;
console.log(factorial(6));


let isPrime = n =>{
    let count = 0;
    for(let i=1;i<=Math.sqrt(n);i++){
        if(n%i==0){
            count++;
        }
    }
    if(count==1)console.log(`${n} is a prime number`);
    else console.log(`${n} is a non-prime number`)
}
isPrime(3);

let array = ['India','USA','South Africa','West Indies','Australia','Bangladesh','Afghanisthan','England'];

array.forEach(print = (e)=>console.log(e));