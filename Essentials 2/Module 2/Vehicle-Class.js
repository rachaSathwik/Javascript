class Vehicle{
    constructor({id,latitude,longitude}){
        this.id = id;
        this.status = "Unavailable";
        this.setPosition = function({latitude,longitude}){
            this.time = Date.now();
            this.latitude = latitude;
            this.longitude = longitude;
        }
        this.getPosition = function(){
            return{
                latitude:this.latitude,
                longitude:this.longitude
            }
        };
        this.setPosition({latitude,longitude});
    };
};
const vehicle1 = new Vehicle({id:'1',latitude:'1234.32E',longitude:'324.234W'});
console.log(vehicle1.getPosition());

//More Better way
{
    class Vehicle{
        constructor({id,latitude,longitude}){
            this.id = id;
            this.status = "Unavailable";
            this.setPosition({latitude,longitude});
        };
        setPosition = function({latitude,longitude}){
            this.time = Date.now();
            this.latitude = latitude;
            this.longitude = longitude;
        }
        getPosition(){
            return{
                latitude: this.latitude,
                longitude:this.longitude
            }
        }
    }
    let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
    console.log(vehicle.getPosition());
}