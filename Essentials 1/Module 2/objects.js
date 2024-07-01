let obj = {}; //empty object

//properties are seperated with commas
let objwprop = {
    num: 800,
    name: 'Ravi',
    status: true
};

console.log(objwprop.name);
console.log(objwprop.status);

//Employee Info
let emp1 = {
    empid : 1,
    empname : "Abhi",
    empdept : 'product development',
    salary : 1200000
};

let emp2 = {
    empid : 2,
    empname : "Bunny",
    empdept : 'Product Analyst - Intern',
    salary : '75000'
}

console.log(emp2.empname);
emp2.empname = 'Tanmay';//modify property value
console.log(emp2.empname);
emp1.contact = "+91-6305144699";//add new property to existent object
console.log(emp1.contact);
delete emp1.contact; //delete existent property in an object
console.log(emp1.contact); //undefined