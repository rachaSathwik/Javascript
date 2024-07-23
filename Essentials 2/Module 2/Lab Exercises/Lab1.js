class User{
    constructor({name,surname,email,role}){
        this.name = name;
        this.email = email;
        this.surname = surname;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }
    //methods
    addCourse(course,level){
        for(let object of this.courses){
            if(object.course === course)return;
        }
        this.courses.push({
            course,
            level
        })
        
    }
    static sendEmail(from, to, message) {
        to.messages.push({
            from: from.email,
            to: to.email,
            message: message
        });
    }
    removeCourse(course){
        for(let i=0;i<this.courses.length;i++){
            if(this.courses[i].course === course){
                this.courses.splice(i,1);
                console.log('Course Deleted');
                break;
            }
        }        
    }
    editCourse(course,level){
        let found = false;
        for(let object of this.courses){
            if(object.course === course){
                object.level = level;
                found  = true;
            }
        }
        if(!found){
        this.courses.push({course:course,level:level});
        }
    }
}
User.prototype.sendMessage = function(to,message){
    this.messages.push({
        from:this.email,
        to:to.email,
        message: message
    });
    User.sendEmail(this,to,message);
}
User.prototype.showMessages = function(){
    this.messages.forEach(e=>{
        console.log(`${e.from} -> ${e.to} => ${e.message}`);
    });
}

// let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
// let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
// let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

// student1.addCourse('maths', 2);
// student1.addCourse('physics', 1);
// student1.removeCourse('physics');
// teacher1.addCourse('biology', 3);
// teacher1.editCourse('biology', 4);
// console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
// console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
// teacher1.sendMessage(student1, 'test message');
// teacher1.sendMessage(student1, 'another message');
// teacher1.showMessages();
// PaulaThompkins@jourrapide.com -> rfife@rhyta.com => test message
// PaulaThompkins@jourrapide.com -> rfife@rhyta.com => another message

module.exports = User;