let circle1 = {
    radius: 5,
    point:{
        x:12,
        y:10
    },
    getType: function(){
        return "circle";
    }
}
let circle2 = {
    radius: 5,
    point:{
        x:12,
        y:10
    },
    getType(){
        return "circle";
    }
}
console.log(ciecle2.getType());//1st way to call a method
console.log(circle2[getType]());//2nd way
let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType(){
        // return (typeof circle.radius === "number") ? /*wrong way*/
        // "circle" : "unknown" ;
        return typeof this.radius === "number" ? "circle" : "unknown" ; /*CORREACT WAY*/
    }
};
console.log(circle.getType());
let figure = {...circle};
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "unknown"!

let Circle = {
    radius:12,
    center:{
        x:0,
        y:0,
        show(){
            console.log(`${this.x} , ${this.y}`);
        }
    }
}
Circle.center.show();