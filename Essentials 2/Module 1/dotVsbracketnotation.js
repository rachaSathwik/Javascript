let contacts = {
    firstname : "kohli",
    "last name":"virat"
}
//contact."last name" = 18; //{syntax error}
contacts["last name"] = "Kohli";
contacts["firstname"] = "Virat";
console.log(contacts["last name"]);
console.log(contacts.firstname);

//computed keys

let indianCricket = {
    player_1 : {
        name:"Rohit Sharma",
        num: 45,
        captain: true
    },
    player_2 : {
        name:"Virat Kohli",
        num: 18,
        captain: false
    },
    player_3 : {
        name:"Rishabh Pant",
        num: 99,
        captain: false
    },
    player_4: 12
}

for(x in indianCricket){
    console.log(`${x} -> ${typeof indianCricket[x]} : ${indianCricket[x].name}`);
}

for(let i=1;i<=4;i++){
    let key = "player_"+i;
    console.log(`${key} : ${indianCricket[key]}`);//string interpolation not able to display object fields
}

let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact[key]}`);
}