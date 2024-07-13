function showMessage(){
    return "Hello World!";
}
let sm = showMessage;
sm();//Hello World!
showMessage();//Hello World!

function addition(a,b){
    return a+b;
}
function operation(func,a,b){
    return func(a,b);
}

console.log(operation(addition,10,20));

//directly defining a function to pass as argument in other function
console.log(operation(function (a,b){
    return a*b;
},10,20)); //200
