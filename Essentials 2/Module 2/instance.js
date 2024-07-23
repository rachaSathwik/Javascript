//Construction Function
const findConstruction = function(){
}

const obj1 = new findConstruction();
console.log(obj1.constructor.name);//findConstruction

class findConstructor{
}
const obj2 = new findConstructor();
console.log(obj2.constructor.name);//findConstructor

console.log(obj1 instanceof findConstruction);//true
console.log(obj2 instanceof findConstructor);//true
console.log(obj1 instanceof Object);//true By default all classes are inherited from generic Object class

