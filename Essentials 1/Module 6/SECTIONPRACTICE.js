/*
Exercise 1: Write your own div function that will take two call arguments and return the result of dividing the first argument by the second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). Change this. If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. Prepare a test call of the function for both valid division and division by zero.
*/
let div = (a,b)=>{
    if(b===0) throw new RangeError("divisor cannot be 0 leads to Infinity");
    let quotient = a/b;
    return quotient;
}

let ans = div(20,12);
console.log(ans);


let numbers = [10, 40, 0, 20, 50];

let qarray = (numbers) =>{
    for(let i=0;i<numbers.length;i++){
        try{
            numbers[i] = div(1000,numbers[i]);
        }catch(e){
            console.log(e);
        }
    }
    return numbers;
}

console.log(qarray(numbers));