class Vehicle{
    status = "Unavailable";
    #latitude;
    #longitude;
    constructor({id,latitude,longitude}){
        this.id = id;
        this.Position = ({latitude,longitude});
    }
    set Position({latitude,longitude}){
        this.time = Date.now();
        this.#latitude = latitude;
        this.#longitude = longitude;
    }
    get Position(){
        return{
            latitude: this.#latitude,
            longitude: this.#longitude
        }
    }
    static isSame(v1,v2){
        return v1.id === v2.id;
    }
}
//we can add explicitly
Vehicle.isSameId = function(v1,v2){
    return v1.id === v2.id;
}
const veh1 = new Vehicle({id:1,latitude:12.21,longitude:23.32});
const veh2 = new Vehicle({id:2,latitude:123.345,longitude:78.98});
console.log(Vehicle.isSameId(veh1,veh2));


