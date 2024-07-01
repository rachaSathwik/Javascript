let array = [12,23,12,233,423,76,89];

let compareFunction = (a,b)=>{
    return a>b?(a===b)?0:1:-1;
}

array = array.sort(compareFunction)
console.log(array);