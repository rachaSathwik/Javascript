class TestClass{
    constructor(arg){
        this.arg = arg;
        console.log(this.arg);
    }
    show(){
        console.log("I'm prototyped");
    }
    static show(){
        console.log("I'm static");
    }
}

const TestConstructor = function(arg){
    this.arg = arg;
    console.log(this.arg);
};
TestConstructor.prototype.show = function(){
    console.log("I'm prototyped");
}
TestConstructor.show = function(){
    console.log('I\'m Static');
}

const cfo = new TestConstructor("hello");
const co= new TestClass("Hello");
cfo.show();
co.show();
TestClass.show();

//regular way of referring constructor functions
let Test = function(arg) { 
    this.arg = arg;
    this.showSth = function() { 
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
}; 
        
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};
