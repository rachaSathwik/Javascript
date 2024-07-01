/*
display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
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
    let showFirst = confirm("display the first contact");
    if(showFirst){
        let obj = contacts[0];
        console.log(`${obj.name} / ${obj.phone} / ${obj.email}`);
    }
    let showLast = confirm('display the last contact');
    if(showLast){
        let idx = contacts.length-1;
        console.log(`${contacts[idx].name} / ${contacts[idx].phone} / ${contacts[idx].email}`);
    }
    let all = confirm("display all contacts");
    if(all){
        for(let c of contacts){
            console.log(`${c.name} / ${c.email} / ${c.phone}`);
        }
    }
    let add = confirm("Add new Contact?");
    if(add){
        let name = prompt("Enter name");
        let phone = prompt("Enter phone");
        let email = prompt("Enter email");
        contacts.push({
            name:name,
            phone:phone,
            email:email
        });
    }
    let q = confirm("Do you want to quit?");
    if(q)break;
}