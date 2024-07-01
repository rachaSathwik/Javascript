let fibinocci = (n) =>{
    if(n==0)return 0;
    if(n==1)return 1;
    return fibinocci(n-1)+fibinocci(n-2);
}

console.log(fibinocci(3));

//iterative

let fibIter = (n) =>{
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}

console.log(fibIter(3));