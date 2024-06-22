/*
Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
*/

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
while(true){
    let showContact = (contacts,index) =>{
        if(contacts instanceof Array && 0<=index && index<contacts.length){
            for(let i=0;i<=contacts.length;i++){
                if(i==index){
                    console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                }
            }
        }else{
            console.log("Something Wrong");
        }
    }

    let showAllContacts = contacts =>{
        if(contacts instanceof Array){
            for(let i=0;i<contacts.length;i++) {
                console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
            }
        }
    }

    let addNewContact = (contacts,name,phone,email) =>{
        if(contacts instanceof Array){
            if(name!==null&&email!==null&&phone!==null){
                contacts.push({
                    name:name,
                    phone:phone,
                    email:email
                });
            }else{
                console.log("Empty field entered");
            }
        }
    }
    


    alert("Welcome to Contact");
    let option = prompt("Choose Option: 1.showContact  2.ShowAllContacts  3.AddNewContact 4.Sort Contacts");
    if(option===null)break;
    switch(option){
        case '1':
            let idx = prompt("Enter Index of the Contact",0);
            showContact(contacts,idx);
            break;
        case '2':{
            showAllContacts(contacts);
            break;
        }
            
        case '3':
            let n = prompt("Enter name:","Steven");
            let p = prompt("Enter phone:",'1234-567-00');
            let e = prompt("Enter email","abc@gmail.com");
            addNewContact(contacts,n,p,e);
            break;
        case '4':
            let choice = prompt("Enter type to sort contacts");
            contacts.sort((a, b) => {
                // Use localeCompare for strings (name, email)
                // Use numerical comparison for phone
                if (choice === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (choice === 'phone') {
                    return a.phone.localeCompare(b.phone); // Assuming phone numbers are strings
                } else { // choice === 'email'
                    return a.email.localeCompare(b.email);
                }
            });
            break;
            
        default:
            alert("Enter valid option");
    }
}

