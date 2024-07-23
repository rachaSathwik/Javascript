//named Function
function named(){
    console.log("I'm named function");
}
//anonymous function
let anonymous = function(){
    console.log("Anonymous Function");
}
//not anonymous
let notAnonymous = function anotherFunction(){ //Function Expression
    console.log("I'm not an anonymous function");
}
named();
anonymous();
notAnonymous();

//Class Expression

const classRefer = class{ //Class Expression
    constructor(sth){
        console.log(sth);
    }
    sayHi(){
        console.log("Hello World");
    }
}

let anonymousObject = new classRefer('I\'m anonymousObject');//I'm anonymousObject
anonymousObject.sayHi();//Hello World