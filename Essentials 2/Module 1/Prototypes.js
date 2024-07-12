/*
    Different ways to use Prototypes
    1. __proto__ //unrecommended
    2. setPrototypeOf(obj), getPrototypeOf(obj)
    3. Object.create(prototype)
    4. using Constructors 
    5. prototype
*/


let point = {x:0,y:0};
let coloredPoint = {color:"red"};

coloredPoint.__proto__ = point; /*point is prototype of coloredPoint object */
console.log(Object.getOwnPropertyNames(coloredPoint));
console.log(coloredPoint.color);
console.log(coloredPoint.x);//able to inherit properties of point object

coloredPoint.x = 100;
console.log(coloredPoint.x);//100
console.log(point.x);//0
console.log(Object.getOwnPropertyNames(coloredPoint));//after writing prototype properties 
console.log(point.color);//undefined


let figure = {
    getType: function(){
        return this.type?this.type:"unknown"; //here this refers to the object in the context of which a function is called
    }
}

let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};
//circle.__proto__ = figure;
Object.setPrototypeOf(circle,figure);
let prototype = Object.getPrototypeOf(circle);//returns prototype object
console.log(prototype);
console.log(figure.getType());//unknown
console.log(circle.getType());//circle

circle.type = "sphere";
circle.point = {x:2,y:2};
circle.radius = 100;
console.log(circle.getType());//sphere


//Using Constructors Functions
{
    const Figure = function(){
        this.getType = function(){
            return this.type?this.type:"Unknown";
        }
    }
    
    const Square = function(side){
        this.type = "Square";
        this.side =side;
        this.area = side*side;
        this.perimeter = 4*side;
    }

    let figure = new Figure();
    //we bind the figure object to it as a prototype. Note that until now the prototype has been connected directly to the object. This time it’s different – we bind it to a function that will create objects.

    Square.prototype = figure;
    let square1 = new Square(5);
    console.log(square1.getType());
    console.log(square1.area);

    let square2 = new Square(6);
    console.log(square2.getType());
    console.log(square2.perimeter);
    

    let Triangle = function(v1,v2,v3){
        this.type = "Triangle";
        this.vertices = [v1,v2,v3];
    }
    Triangle.prototype = figure;
    let triangle1 = new Triangle({x:0,y:0},{x:1.5,y:1.5},{x:2,y:0});
    console.log(triangle1.type);

    //You can add new methods to Prototype
    Triangle.prototype.hi = function(){console.log("Hi!")};
    triangle1.hi();
    /*
    We’ve modified the figure object, which is a prototype of the square1, square2, and triangle1 objects. What's important is that the hi method will be available not only for objects newly created with the Circle or Triangle constructors, but for all existing objects, whose prototype is just figure. 
    */

    //String Constructor
    let newstr = new String("Vaarahi Amma");
    console.log(newstr.length);
    String.prototype.msg = function(){console.log("Blessings")};//add method to String constructor
    "Hello".msg();
    newstr.msg();
}
