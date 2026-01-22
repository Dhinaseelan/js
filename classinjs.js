class leaner{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `hello ${this.name} and ${this.age}`
    }
}
const leanernor=new leaner("kathir",21)
console.log(leanernor.greet())
const leanerna=class leaner{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `hello ${this.name} and ${this.age}`
    }
}
const leanernamed=new leanerna("suresh",40);
console.log(leanernamed.greet())
const anleanernamed=class {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `hello ${this.name} and ${this.age}`
    }
}
const anclass=new anleanernamed("bhuvn",66)
console.log(anclass.greet())