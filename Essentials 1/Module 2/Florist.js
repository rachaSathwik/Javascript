function Calculation(){
    let total = 0;
    {
        const price = 8;
        let quantity = 70;
        quantity-=20;
        let value = price*quantity;
        console.log("Rose - unit price: "+price+" , quantity: "+quantity+" , value: "+value);
        total+=value;
    }
    {
        const price = 10;
        let quantity = 50;
        quantity-=30;
        let value = price*quantity;
        console.log("Lily - unit price: "+price+" , quantity: "+quantity+" , value: "+value);
        total+=value;
    }
    {
        const price = 2;
        let quantity = 120;
        let value = price*quantity;
        console.log("Tulip - unit price: "+price+" , quantity: "+quantity+" , value: "+value);
        total+=value;
    }
    console.log("Total: "+total);
}
Calculation();