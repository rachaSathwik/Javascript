let factorial = n =>{
    if(n>20){
        throw new RangeError("Cannot determine");
    }
    let result=1;
    for(;n>=1;n--){
        result*=n;
    }
    return result;
}

console.log(factorial(20));//2432902008176640000
console.log(factorial(21));//throw new RangeError("Cannot determine");


