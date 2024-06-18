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
    
    // write your code here
    let object = {};
    confirm("Add Contact?");
    if(confirm===true){
        object.name = prompt("Enter name:","Name");
        object.phone = prompt("Enter Phone:","Phone");
        object.email = prompt("Enter Email:");
        contacts.push(object);
    }
    let last = contacts.length - 1;
    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);