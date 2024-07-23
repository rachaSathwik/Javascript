//import Vehicle from './SettersGetters';//ES modules syntax
const Vehicle = require('./SettersGetters');

class Bus extends Vehicle{
    constructor({id,latitude,longitude,seats}){
        super({id,latitude,longitude});
        this.seats = seats;
    }
}
const v1 = new Bus({id:1,latitude:12.435,longitude:34.5446,seats:40});
console.log(v1.status);
console.log(v1.Position);
console.log(v1.seats);


//Shadowing
class OldClass{
    constructor(){
        this.sayHi();//calls new class method(Shadowing)//Hello undefined
    }
    sayHi(){
        console.log("Hello from Old Class");
    }
}

class NewClass extends OldClass{
    constructor(name){
        super();
        this.name = name;
    }
    sayHi(){
        console.log(`Hello ${this.name}`);

    }
    newHi(){
        this.sayHi();

    }
    Hello(){
        super.sayHi();
    }
}

let obj = new NewClass("Alice");
obj.Hello();
obj.sayHi();
obj.newHi();