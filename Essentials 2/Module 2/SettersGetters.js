class Vehicle{
    status = "Unavailable";
    //private fields
    #latitude;
    #longitude;
    constructor({id,latitude,longitude}){
        this.id = id;
        //Position({latitude,longitude}); -> error Position is not an function
        this.Position = {latitude,longitude};
    }
    //setter
    set Position({latitude,longitude}){
        this.#latitude = latitude;
        this.#longitude = longitude;
    }
    //getter
    get Position(){
        //return as Object
        return{
            latitude:this.#latitude,
            longitude:this.#longitude
        }
    }
}
const veh1 = new Vehicle({id:1,latitude:12.21,longitude:34.33});
// console.log(veh1.Position);
// console.log(veh1.status);

module.exports = Vehicle;