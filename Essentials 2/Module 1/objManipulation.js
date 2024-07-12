let contact = {
    tel:"123-3456-876",
    email:"test@gmail.com"
};
contact.firstname = "John";
contact.lastname = "Cena";
contact.email = ["test@gmail.com","private@gmail.com"];
//console.log(contact.email);
contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(contact.email);
delete contact.lastname;
delete contact.email.private;
console.log(contact);