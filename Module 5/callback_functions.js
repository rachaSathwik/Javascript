//Synchronous Functions - executes synchronously how the are writen in the code and how tey are called

// let inner = function(){
//     console.log("Iam inner function");
// }

// let outer = function(callback){
//     console.log("Iam outer function");
//     callback();
// }
// console.log("Test 1 completed");
// outer(inner);
// console.log("Test 2 completed");


//Asynchronous Functions
let inner = function() {
    console.log('inner 1');
    }
    let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
    }
    console.log('test 1');
    outer(inner);
    console.log('test 2');
    