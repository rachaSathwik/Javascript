var name = "Sathwik";
var name  = "Abhinav";
console.log(name); //defined //prints Abhinav
//console.log(undeclare); //undeclared

/*
variables - var, let, const
var - introduced first
let - later introduced (recommended) both looks to function in similar way but not
*/

//One of the basic differences in the use of var and let is that let prevents us from declaring another variable with the same name (an error is generated). Using var allows you to re-declare a variable, which can potentially lead to errors in the program execution.


let dheight;
//let height;  -> Uncaught SyntaxError: Identifier 'height' has already been declared
console.log(dheight);

//2.04
let  height  =  180;
let  anotherHeight  =  height;
let  weight;
console.log(height);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight  =  70;    
console.log(weight);  //  ->  70

//assign without declaring, potential to errors
newvar = 150;
console.log(newvar);

//use strict
//"use strict"; //working when decalred on starting of the program
heightss  =  112;  //  ->  Uncaught  ReferenceError:  height  is  not  defined
console.log(heightss);


//2.06
let greeting = "hello";
let counter = 100;
console

greeting  =  "Hello!";
greeting  =  greeting  +  counter;
console.log(greeting);  //  ->  Hello!100
//The interpreter will check the type of value stored in the greeting variable and convert the value from the counter variable to the same type before performing an addition operation. As a result, the string "100" will be added to the "Hello!" character string and stored to the greeting variable. By the way, note that JavaScript interprets 100 as a number, but "100" as a string.

//const  greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
greeting  =  "Hello!";

const  greeting1  =  "Hello!";
//greeting1  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.

