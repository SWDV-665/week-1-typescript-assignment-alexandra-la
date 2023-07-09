class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}
const milk = new Grocery("Milk", 2, 3.00);
const bread = new Grocery("Bread", 1, 4.00);
const eggs = new Grocery("Eggs", 12, 3.57);
const bananas = new Grocery("Bananas", 6, 1.88);

function printOut(grocery : Grocery){
    return grocery.name + " "+  grocery.quantity + " "+ "$" + grocery.price + "\n";
}
document.body.textContent = printOut(milk) + printOut(bread) + printOut(eggs) + printOut(bananas);
