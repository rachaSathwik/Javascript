let figure = {
    getType: function(){
        return this.type?this.type:"unknown";
    }
}

let circle = Object.create(figure);
circle.radius = 5;
circle.point = {
    x:1,
    y:1
};
circle.type = "Circle";
console.log(circle.getType());//circle
console.log(figure.getType());//unknown
