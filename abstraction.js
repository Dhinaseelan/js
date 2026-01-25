class vehicle{
    #speed
    #fuel
    constructor(fuel,speed){
        this.#fuel=fuel;
        this.#speed=speed;
    }
    getstatus(){
        return `speed: ${this.#speed} km/h, fuel: ${this.#fuel} liters`
    }
    drive(distance){
        const fuelneeded=distance/10;
        if(fuelneeded<=this.#fuel){
            this.#fuel-=fuelneeded;
            console.log(`drive ${distance} km. ${this.getstatus()}`)
        }
        else{
            console.log("not enough fuel to drive the distance");
        }
    }
    refuel(amout){
        if(amout>71){
           console.log(`fuel capacity 70 you can't fill ${amout} liters.`)
        }
        else{
             this.#fuel+=amout;
        console.log(`refueled ${amout} liters. ${this.getstatus()}`)
        }

    }
}
const godrive=new vehicle(10,100);
console.log(godrive.getstatus())
godrive.drive(20)
godrive.refuel(30)
godrive.refuel(80)
class address{
    static addres="mgr nagar";
    static pin=605104;
    static addresp(){
        return `my address is ${this.addres+this.pin}`
    }
}
console.log(address.addresp())
class shoppingitem {
    static totalitem = 0;
    static item_list = [];

    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
        this.prolist = { name: this.name, amount: this.amount }; // FIXED
        this.constructor.totalitem++;
        this.constructor.item_list.push(this.prolist);
    }

    static getTotalitems() {
        return this.totalitem;
    }

    static getprolist() {
        return this.item_list.map((item, index) => {
            return `product ${index + 1} product name:${item.name} product price:${item.amount}`;
        });
    }
}

const pro1 = new shoppingitem("charger", 2599);
const pro2 = new shoppingitem("laptop", 33599);
const pro3 = new shoppingitem("pen", 23599);

console.log(shoppingitem.getTotalitems()); 
console.log(shoppingitem.getprolist());