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