const User = require('./Lab1');

class ExtendedUser extends User{
    constructor({name,email,surname,role}){
        super({name,email,surname,role});
    }
    //Lab3
    static match(teacher,student,course){
        let coursematches = [];//Common courses in teachers and students
        for(let i = 0;i<teacher.courses.length;i++){
            for(let j=0;j<student.courses.length;j++){
                if(teacher.courses[i].course ===  student.courses[j].course && teacher.courses[i].level >= student.courses[j].level){
                    coursematches.push({course:teacher.courses[i].course,level:teacher.courses[i].level});
                }
            }
        }
        if(course){
            for(let c of teacher.courses){
                if(course===c.course)
                    return c;
            }
            return undefined;
        }else{
            return coursematches;
        }
    }
    set FullName(name){
        let fullname = name.split(' ');
        if(fullname[0] && fullname[1]){
            this.name = fullname[0];
            this.surname = fullname[1];
        }
    }
    get FullName(){
        return `${this.name}`+` ${this.surname}`;
    }
} 

class Student extends ExtendedUser{
    constructor({name,email,surname}) {
        super({name,email,surname,role:'Student'});
    }
}

class Teacher extends ExtendedUser{
    constructor({name,surname,email}) {
        super({name,email,surname,role:'Teacher'});
    }
}

// let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
// let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
// let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

// student1.addCourse('maths', 2);
// teacher1.addCourse('biology', 3);
// teacher1.editCourse('chemistry', 4);
// console.log(`${student1.FullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
// console.log(`${teacher1.FullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
// student1.fullName = 'Rafael Fifer';
// console.log(`${student1.FullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses

// student1.addCourse('maths', 2);
// student1.addCourse('physics', 4);
// teacher1.addCourse('maths', 4);
// let match = ExtendedUser.match(teacher1, student1);
// console.log(match); // -> [{course: 'maths', level: 2}]
// teacher1.editCourse('maths', 1);
// match = ExtendedUser.match(teacher1, student1);
// console.log(match); // -> []
// teacher1.addCourse('physics', 4);
// match = ExtendedUser.match(teacher1, student1, 'physics');
// console.log(match); // -> {course: 'physics', level: 4}

module.exports = {ExtendedUser,Teacher,Student};