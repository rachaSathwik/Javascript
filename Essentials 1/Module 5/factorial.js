function factorialIterative(n){
    let res=1;
    while(n>1){
        res*=n;
        n--;
    }
    return res;
}
console.log(factorialIterative(6));

function factorialRec(n){
    return n>1?n*factorialRec(n-1):1;
}
console.log(factorialRec(6));
