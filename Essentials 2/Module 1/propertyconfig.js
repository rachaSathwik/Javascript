let contact = {
    _age:38,
    first_name: "Patrick James",
    last_name: "Cummins",
    get full_name(){
        return `${this.first_name} ${this.last_name}`;
    },
    get age(){
        return this._age;
    },
    set age(y){
        this._age = (y>0)?y:0;
    }
}
let prop = Object.keys(contact);
console.log(prop);

//Object Descriptor

let desc = Object.getOwnPropertyDescriptor(contact,"last_name");
console.log(desc);
Object.defineProperty(contact,"_age",{
    value: contact["_age"],
    writable: false,
    enumerable: false,
    configurable:true
})
contact["_age"] = 29;//doesn't modify
for(key in contact){
    console.log(contact[key]);
}
let allKeys = Object.getOwnPropertyNames(contact) ;
console.log(allKeys);