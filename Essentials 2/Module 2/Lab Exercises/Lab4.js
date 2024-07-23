const {ExtendedUser,Student,Teacher} = require('./Lab2');

class Tutoring{
    constructor(){
        this.students = [];
        this.teachers = [];
    }
    getStudentByName(name,surname){
        for(let s of this.students){
            if(s.name===name && s.surname===surname){
                return s;
            }
        }
        return null;
    }
    getTeacherByName(name,surname){
        for(let t of this.teachers){
            if(t.name===name && t.surname===surname){
                return t;
            }
        }
        return null;

    }
    getStudentsForTeacher(teacher){
        let retval = [];
        for(let s of this.students){
            if(ExtendedUser.match(teacher,s).length){//to know any coursesmatch found if its length is 0 ?not found:found
                retval.push(s);
            }
        }
        return retval;
    }
    getTeachersForStudent(student){
        let retval = [];
        for(let t of this.teachers){
            if(ExtendedUser.match(t,student).length){//to know any coursesmatch found if its length is 0 ?not found:found
                retval.push(t);
            }
        }
        return retval;
    }
    addStudent(name,surname,email){
        let stuobj = new Student({name,surname,email});
        //this.students.push({name:name,surname:surname,email:email});
        this.students.push(stuobj);
    }
    addTeacher(name,surname,email){
        let teachobj = new Teacher({name,surname,email});
        //this.teachers.push({name:name,surname:surname,email:email});
        this.teachers.push(teachobj);
    }
}

// let tutoring = new Tutoring();
// tutoring.addStudent('Sathwik','Racha','sathwikracha@mail.com');
// tutoring.addStudent('Rahul','KL','klravhul@cric.com');
// tutoring.addTeacher('Srinivasa','Ramanujan','sr@maths.com');
// let student = tutoring.getStudentByName('Sathwik','Racha');
// let teacher = tutoring.getTeacherByName('Srinivasa','Ramanujan');
// student.addCourse('MERN','undergrad');
// teacher.addCourse('MERN','undergrad');
// let teachers = tutoring.getTeachersForStudent(student);
// console.log(teachers[0].courses);

// let tutoring = new Tutoring();
// tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
// tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
// tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
// let student = tutoring.getStudentByName('Rafael', 'Fife');
// student.addCourse('maths', 2);
// student.addCourse('physics', 4);
// let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
// teacher.addCourse('maths', 4);
// let teachers = tutoring.getTeachersForStudent(student);
// let students = tutoring.getStudentsForTeacher(teacher);
// console.log(students[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...
// console.log(teachers[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...

module.exports = Tutoring;