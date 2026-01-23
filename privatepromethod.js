class privateex{
    //private property
    #pin //you can access this property in this class
    constructor(name,age,pin){
        this.name=name;
        this.age=age;
        this.#pin=pin;
    }
    details(){
        return `my name ${this.name} and my age ${this.age} ${this.#nameandpass()}`;
    }
    
    //this method is private you can't access outside the class
    #nameandpass(){
        return `username:${this.name} password:${this.#pin}`
    }

}
const psample=new privateex("tamil",22,999);
console.log(psample.details())//output:my name tamil and my age 22 
//  my name tamil and my age 22 username:tamil password:999

