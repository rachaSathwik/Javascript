alert("Bank Management System");
let account ={
    accountId: Math.random(),
    first_name: undefined,
    last_name: undefined,
    get full_name(){
        return `${this.first_name} ${this.last_name}`;
    },
    balance:0
};
Object.seal(account);
delete account.balance;//no addition or deletion propertieszare done

Object.defineProperty(account,"accountId",{
    value: account.accountId,
    writable:false,
    configurable:false
})
//profile
if(confirm("Do you want to Complete your Profile?")){
    let fn = prompt("Enter First name:");
    if(fn!==null) account["first_name"] = fn;
    let ln = prompt("Enter Last name:");
    if(ln!==null) account["last_name"] = ln;
}

while(true){
    let opt = prompt("Enter Operation 1. Change FName 2. Change LName 3. Profile 4. Balance");
    switch(opt){
        case "1":
            if(confirm("Do you want to modify your first name?")){
                let fn = prompt("Enter First name:"); 
                if(fn!==null) account["first_name"] = fn;
            }
            break;
        case "2":
            if(confirm("Do you want to modify your last name?")){
                let ln = prompt("Enter Last name:");
                if(ln!==null) account["last_name"] = ln;
            }
            break;
        case "3":
            console.log(account);
            break;
        case '4':
            account["balance"] = prompt("Enter balance");
            break;
        default:
            alert("Enter Valid Option");
            break;
    }
    if(confirm("Do you want to quit?"))break;
}
