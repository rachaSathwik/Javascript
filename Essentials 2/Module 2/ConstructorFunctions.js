let Vehicle = function(identifier,latitude,longitude){
    this.id = identifier;
    this.time = Date.now();
    this.latitude = latitude;
    this.longitude = longitude;
    this.status = "Unavailable";
    //redundant code
    this.setPostion = function(latitude,longitude){
        this.time = Date.now();
        this.latitude = latitude;
        this.longitude = longitude;
    }
};
let Vehicle1 = new Vehicle('TS06EA7474',"17.3616° N","78.4747° E");
Vehicle1.setPostion('78.4747° E','78.4747° E');
console.log(Vehicle1);

{
    let Vehicle = function(identifier,latitude,longitude){
        this.id = identifier;
        this.status = "Unavailable";
        this.setPostion = function(latitude,longitude){
            this.time = Date.now();
            this.latitude = latitude;
            this.longitude = longitude;
        }
        this.setPostion(latitude,longitude);//always call functions after defining
    };

    let vehicle2 = new Vehicle('12','121','000');
    console.log(vehicle2);
}
//Single Parameter to avoid ambigities if data is of similar type
{
    const Vehicle = function(initialData){
        let {id,latitude,longitude} = initialData; //destructuring assignment
        this.setPosition = function(latitude,longitude){
            this.time = Date.now();
            this.latitude = latitude;
            this.longitude = longitude;
        }
        this.id = id;
        this.status = "Unavailable";
        this.setPosition(latitude,longitude);
        
    }
    let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
    let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
    console.log(vehicle1);
    console.log(vehicle2);
}
//using a destructive assignment directly in the function parameter (here in the constructor).
{
    const Vehicle = function({id,latitude,longitude}){
        this.setPosition = function({latitude,longitude}){
            this.time = Date.now();
            this.latitude = latitude;
            this.longitude = longitude;
        }
        this.getPosition = function(){
            return{
                latitude: this.latitude,
                longitude: this.longitude
            }
        }
        this.id = id;
        this.status = "Unavailable";
        this.setPosition({latitude,longitude});
        this.getPosition();
    }
    let veh1 = new Vehicle({id:'12',latitude:'789W',longitude:'18.0000W'});
    veh1.setPosition({latitude:'12E',longitude:'121W'});
    console.log(veh1.getPosition());
}