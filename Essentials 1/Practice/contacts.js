let students = [];
let employees = [];


let showContacts = (contacts) =>{
    if(contacts.length==0)
        console.log("Contacts are empty");
    contacts.forEach((contact)=>{
        for(key in contact){
            console.log(`${key} -> ${contact[key]}`);
        }
    });
}

let addNewContact = (contacts,name,phone,email)=>{
    if(!contacts instanceof Array)
        return false;
    contacts.push({
        name:name,
        phone:phone,
        email:email
    })
    return true;
}
while(true){
    alert("Contact Management");
    let option = prompt("1. Enter add new contact 2. Show all contacts");
    switch(option){
        case '1':
            let role = prompt("Enter student or employee");
            if(role==='student'){
                let name = prompt("Enter name:");
                let phone = prompt("Enter phone:");
                let email = prompt("Enter email:");
                (addNewContact(students,name,phone,email))?console.log("Sucessfully added"):console.log("Failed to add");
            }
            else if(role!=null && role==='employee'){
                let name = prompt("Enter name:");
                let phone = prompt("Enter phone:");
                let email = prompt("Enter email:");
                (addNewContact(employees,name,phone,email))?console.log("Sucessfully added"):console.log("Failed to add");
            }else console.log("No role found");
            break;
        case '2':
            let book = prompt("Enter role");
            if(book==='employee')
            showContacts(employees);
            else if(book==='student')
            showContacts(students);
            else
            console.log("No contacts found with the role");
            break;
    
        default:
            console.log("Enter valid option");
    }
    let Continue = confirm("Do you want to contine");
    if(!Continue)break;
}