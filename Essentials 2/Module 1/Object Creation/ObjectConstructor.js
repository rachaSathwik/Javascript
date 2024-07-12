let obj = {};
console.log(obj.constructor.name);//Object
let obj1 = new Object();
console.log(obj1.constructor.name);//Object

let emptyObject = Object.create(null);
console.log(emptyObject.constructor.name);//exception