const x = 2;
//x = 12; TypeError

const student = {
    name: "James",
    id: 120909
}

//const stores object reference not object
student.name = "Clear";
console.log(student);

let point1 = {
    x: 12,
    y: 10
}
let point2 = {
    x: 12,
    y:8
}
console.log(point1===point2);//false
let point3={};
Object.assign(point3,point2);
console.log(point3===point1);//false
console.log(point3===point2);//false

//coping properties from many sources
let point4 = {};
Object.assign(point4,point1,point2,{x:12,y:10,z:90});
console.log(point4);
//the properties with the same names are overwritten.

