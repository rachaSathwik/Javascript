"use strict"
// console.log("Javascript has 64 reserved Keywords");
// let height = 120;
// let greeting = "Hello!"
// console.log(greeting+height);
// const num = 12;
// num+=12;
// console.log(num); //typeerror assignment to const variable.

let  height2  =  200;
{
         let  weight  =  100;
         {
                 let  info  =  "tall";
                 console.log(height2);  //  ->  200
                 console.log(weight);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(height2);  //  ->  200
         console.log(weight);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
   }

   //Var Local Scope can be used in functions

   var  globalGreeting  =  "Good  ";
   
function  testFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
testFunction();
   
console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined


//Variable Shadowing
let  counter  =  100;
console.log(counter);  //  ->  100
{
     let  counter  =  200;
     console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  100
