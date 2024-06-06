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