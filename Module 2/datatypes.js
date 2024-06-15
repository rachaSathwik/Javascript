let num = 20;
console.log(typeof num);
console.log(typeof 120);
let number = typeof(num);
console.log(number); //number
let typeOfnumber = typeof number;
console.log(typeOfnumber); //string

const num1 = 0x12;
console.log(num1);


//String Interpolation
let name = "Sathwik Sai Abhinav";
let sent = `${name} is aspiring for nice paying job with good work culture.`;
console.log(sent); //Sathwik Sai Abhinav is aspiring for nice paying job with good work culture.

//Autoboxing
let city = "Hyderabad";
console.log(city.charAt(2));//->d  Here, city is not treated as primitive datatype else as an object.

let sentence = "I'm learning Javascript";
console.log(sentence.length); //18
console.log('abhi'.length); //4
console.log(sentence.slice(4,12));//learning
console.log('Hoisting'.slice(0,5));//Hoist
console.log(sentence.split(' '));//["I'm","learning","Javascript"]
console.log('192.168.1.1'.split('.'));//["192","168","1","1"]

let var1;
console.log(typeof var1);//undefined
var1 = undefined;
console.log(typeof var1);//undefined

let frac = 10/100;
console.log(typeof frac);//number
console.log(0x21);