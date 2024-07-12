let point0 = {x:10, y: 20 };
let point2 = Object.assign({}, point0);
let point3 = Object.assign({}, point0, {z: 100});
console.log(point2);
console.log(point3);

let spread_point_1 = {...point0,color:"blue",model:"tesla model Y"};
console.log(spread_point_1);
let spread_point_2 = {...point0,...spread_point_1};
console.log(spread_point_2);


let circle1 = {
    radius: 100,
    center: {
        x: 100,
        y: 100
    }};
let circle2 = {...circle1};
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);//100
console.log(circle2.center.x);//100
console.log(circle1 === circle2); // false
console.log(circle1.center === circle2.center); // true !
