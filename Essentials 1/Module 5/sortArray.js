let array = [12,11,10,9,4,19];

let compareFunction = (a,b) =>{
    retval = 0;
    if(a<b)retval=-1;
    else retval=1;
    return retval;
}

let sorted = array.sort(compareFunction);
console.log(sorted);

/*
Task 1A. Try to modify the above piece of code to make it as short as possible. Suggestions:

use an anonymous function;
use an arrow function;
consider skipping the if statement.

*/

let sortedArray = array.sort((a,b)=>a-b);//ascending order
console.log(sortedArray);