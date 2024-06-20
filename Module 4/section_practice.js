/*
Exercise 1: Write a script that will ask the user to input a number.
Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.
*/
let num = prompt("Enter number:",0);
let message = (num>90 && num<110)?"Bingo!":"Miss";
alert(message);


/*
Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.
*/

let num1 = prompt("Enter Operand 1:");
let num2 = prompt("Enter Operand 2:");
const operation = prompt("Enter operation +, -, *, /, %, **");
num1 = Number(num1);
num2 = Number(num2);
if(Number.isNaN(num1) || Number.isNaN(num2))alert("Enter valid operands");

switch(operation){
    case '+':
        const sum = num1+num2;
        alert(sum);
        break;
    case '-':
        const diff = num1-num2;
        alert(diff);
        break;
    case '*':
        const product = num1*num2;
        alert(product);
        break;
    case '/':
        const q = num1/num2;
        alert(q);
        break;
    case '%':
        const r = num1%num2;
        alert(r);
        break;
    case '**':
        const sq = num1**num2;
        alert(sq);
        break;
    default:
        alert("Enter Valid operation");
}

/*
During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)
When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.
*/

let menu = "1.showing the first contact (first) or 2.showing the last contact (last) or 3.adding a new contact (new)";
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];  
let op = prompt(menu);

switch(op){
    case '1':
        let fc = `${contacts[0].name} | ${contacts[0].phone} | ${contacts[0].email}`;
        alert(fc);
        break;
    case '2':
        const last = contacts.length-1; 
        let lc = `${contacts[last].name} | ${contacts[last].phone} | ${contacts[last].email}`;
        alert(lc);
        break;
    case '3':
        const n = prompt("Enter name:");
        const p = prompt("Enter phone:");
        const e = prompt("Enter email:");
        if(!n || !p || !e)alert("Skipped");
        else{
            const object = {
                name:n,
                phone:p,
                email:e
            };
            contacts.unshift(object);
            alert("Contact Saved");
            console.log(`${contacts[0].name} | ${contacts[0].phone} | ${contacts[0].email}`);
        } 
        break;
    default:
        alert(Invalid);
}