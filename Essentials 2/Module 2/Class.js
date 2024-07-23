//Class Declaration with Constructor

class HelloWorld{
    constructor(){
        console.log("Hello World!");
    }
    //define methods
    msg = function(m){
        console.log("We have a message for u: "+m);
    }
}

let obj1 = new HelloWorld();//Hello World!
obj1.msg("Best Of Luck!");//Best Of Luck!