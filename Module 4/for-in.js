let player = {
    name:'Pat Cummins',
    country:'Australia',
    type:'bowler'
};
for(let key in player){
    console.log(key);//name country type
}

let players = [
    {
        name:'Pat Cummins',
        country:'Australia',
        type:'bowler'
    },
    {
        name:'Virat Kohli',
        country:'India',
        type:'Batsman'
    },
    {
        name:'Dhoni',
        country:'India',
        type:'Wicket Keeper'
    }
];
for(let p of players){
    for(let key in p){
        console.log(`${key} -> ${p[key]}`);
    }
}