let sentence = "Happy Coding";
console.log(sentence+" Javascript");
sentence += ' &Learning';
console.log(`${sentence} is of type ${typeof sentence}`);


console.log(10===10);//true
console.log(10===10n);//false
console.log(10==='10');//false
console.log(12===10);//false
console.log(12===true);//false
console.log(undefined===undefined);//true
console.log(NaN===NaN);//false

console.log(10==10n);//true
console.log(10=='10');//true
console.log(10==1);//false
console.log(10==true);//false
console.log(undefined==undefined);//true
console.log(undefined=='undefined');//false
console.log(NaN==NaN);//false

console.log(`non-identical and unequal operators`);
console.log(12!=10);//true
console.log(12!='12');//false
console.log(12!=12n);//false
console.log(0!=false);//false
console.log('1'!=true)//false
console.log(NaN!=NaN);//true
console.log(12!=undefined);//true
console.log(undefined!=undefined);//false
console.log(12!==12n);//true
console.log(12!=='12');//true
console.log(12!==undefined);//true
console.log(1!==true);//true
console.log('0'!==false);//true
console.log(undefined!==undefined);//false
