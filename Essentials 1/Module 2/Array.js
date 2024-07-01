let arr = [];
console.log(arr[3]);//undefined

let nums = [1,2,3,4,5];
console.log(nums[4]);//5

let days=['Sun',"Mon","Tue","Wed","Thu","Fri","Sat"];
console.log(days[6]);//Sat
days[3] = "Wednesday";
console.log(days[3]);

let array = [];//array
array[8] = "Matrix";
array[7] = "Javascript";
array[3] = true;
console.log(array[5]);
console.log(array[7]);
console.log(array[3]);
console.log(typeof array[3]);

let value = ["Abhi",12,true,123456789n,'A'];
console.log(`${value[0]} -> ${typeof value[0]}`);


//store arrays as elements
let arrayelem = [['C','Java','Javascript','Python'],['HTML,CSS,MERN','Springboot']];
console.log(arrayelem[0][2]);

//Object vs Array Declaration

let Student_Obj = {
    id:1,
    name: 'Raghu',
    course: 'CSE',
    sec: 'S12',
    contact_num:123456789
};

let Staudent_arr = [
    {
        id: 1,
        name: 'Ram',
        course: 'CSE',
        sec: 'S11',
        contact_num: 1234567809

    } //multiple objects can be inserted into Array
]
console.log(Student_Obj.name);
console.log(Staudent_arr[0]);
day = 'Sunday';
console.log(typeof days);//object
console.log(days instanceof Array);//true
console.log(day instanceof Array);//false
