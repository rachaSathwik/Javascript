// let deepClone = function(obj){
//     let tobj = {...obj};
//     for(prop in tobj){
//         if(typeof tobj[prop]==="object"){
//             tobj[prop] = deepClone(tobj[prop]);
//         }
//     }
//     return tobj;
// }
let deepClone = function(obj) {
    let newObj = {...obj};
    for(property in newObj) {
        if(typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}

let CricketTeam = {
    team: "India",
    trophies:{
        "World Cup":{
            Champions:2,
            Runners:2
        },
        T20:{
            Champions:2,
            Runners:1,
            Captains:{
                player:{
                    name: "Rohit Sharma",
                    year: 2024
                }
            }
        },
        Champions:{
            Champions:2,
            Runners:2
        }
    }
}

console.log(CricketTeam);
let ind = deepClone(CricketTeam);
CricketTeam.trophies["World Cup"].Champions = 3;
console.log(ind);