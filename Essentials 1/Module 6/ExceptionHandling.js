// let a = -2;
// a=b;
// console.log(a);//ReferenceError: b is not defined

// let num = 12;
try{
    num = number;
}catch(error){
    if(error instanceof ReferenceError){
        console.log("It is of Reference Error");
        num = 10;
    }else{
        console.log("Other Error");
    }
}

console.log(num);
