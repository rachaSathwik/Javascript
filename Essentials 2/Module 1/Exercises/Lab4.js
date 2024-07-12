let deepComp = function(obj1,obj2){
    let retval = (Object.keys(obj1).length === Object.keys(obj2).length);
    if(retval){
        for(prop in obj1){
            if(typeof(obj1[prop]) === typeof(obj2[prop])){
                retval = typeof(obj1[prop]) === 'object'?deepComp(obj1[prop],obj2[prop]):obj1[prop]===obj2[prop];
            }else{
                return false;
            }
            if(!retval)break;
        }
    }
    return retval;
}

let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};
let g = {x:[1,2,3,4,5],y:1,z:{m:'q',n:true}};
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false