let rectangle = {
    length:12,
    breadth:5,
    get len(){
        return this.length;
    },
    get bdt(){
        return this.breadth;
    },
    set len(v){
        this.length = v;
    },
    set bdt(v){
        this.breadth = v;
    },
    calcArea : function(){
        return this.length*this.breadth;
    }
}

rectangle.len = 20
console.log(rectangle.len);
console.log(rectangle.bdt);
console.log(rectangle.calcArea());