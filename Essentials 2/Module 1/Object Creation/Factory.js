//Create object using Factory Mechanism

//1st way
let createObject1 = function(x,y){
    let newobj = {};
    newobj.x = x;
    newobj.y = y;
    return newobj;
}
let point1 = createObject1(12,10);
console.log(point1);

//2nd way 
let createObject2 = function(x,y){
    return{
        x:x,
        y:y
    }
}
let point2 = createObject2(12,1);
console.log(point2);

//3rd way retruning object only values
let createObject3 = function(x,y){
    return{
        x,y
    }
};
let point3 = createObject3(1,2);
console.log(point3);

//4th way arrow function

let createObject4 =(x,y)=>({x,y});
let point4 = createObject4(9,9);
console.log(point4);


let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};
let coloredPoint1 = createColoredPoint (1, 1, "red");// -> ... object under construction
let coloredPoint2 = createColoredPoint (2, 2, "green");// -> ... object under construction 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!
