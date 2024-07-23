
//Construction Function
const Student = function({name,id,course}){
    this.name = name;
    this.id = id;
    this.course = course;
}
//Parent Class extending Student Construction Function
class Parent extends Student{
    constructor(pname,{name,course,id}){
        super({name,course,id});
        this.pname = pname;
    }
    printDetails(){
        // console.log(`Student name: ${this.name}`);
        // console.log(`ID: ${this.id}`);
        // console.log(`Course name: ${this.course}`);
        // console.log(`Parent name: ${this.pname}`);
        for(let key in Parent.prototype){
            console.log(Parent.prototype[key]);
        }
    }
}

let obj1 = new Parent('Samudrakani',{name:'raghuvaran',course:'Btech',id:7});
obj1.printDetails();
Parent.prototype.address = "Vizag";
obj1.printDetails();