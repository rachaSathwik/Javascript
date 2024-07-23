//In Constructors and methods

class Vehicle{
    constructor({id,latitude,longitude}){
        //implicit properties
        this.id = id;
        this.status = "Unavailable";
        this.setPosition({latitude,longitude});
    }
    setPosition({latitude,longitude}){
        this.time = Date.now();
        this.latitude = latitude;
        this.longitude = longitude;
    }
    getPosition(){
        return{
            latitude: this.latitude,
            longitude: this.longitude
        }
    }
}

let obj1 = new Vehicle({id:1,latitude:'12',longitude:'345'});
console.log(obj1.getPosition());

//Explicitly declare properties in Class Body

{
    class Vehicle {
        status = "unavailable";
        //private fields
        #longitude;
        #latitude;
        constructor({id, latitude, longitude}){
            this.id = id;
            this.setPosition({latitude, longitude});
        };
        setPosition({latitude, longitude}) {
            this.time = Date.now();
            this.#longitude = longitude;
            this.#latitude = latitude;
        };
        getPosition() {
            return {    
                latitude: this.#latitude,
                longitude: this.#longitude
            };
        };
    };
    let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    console.log(vehicle.getPosition());
    console.log(vehicle.status);//unavailable
    //console.log(vehicle.#longitude); // error
    
}