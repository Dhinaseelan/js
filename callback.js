// //---------------------------------callback--------------------->
// function first(fistdata,cd){
    
//     setTimeout(()=>{console.log(`U:hello ${fistdata}`)
//     secound(fistdata,third)},3000)
    
// }
// function secound(secounddata,cd){
//  setTimeout(()=>{console.log(`2:hello ${secounddata}`)
//     third(secounddata)},3000)
// }
// function third(thirddata){
//     setTimeout(()=>{console.log(`3:hello ${thirddata}`)},3000)
// }
// const main=(name,cd)=>{
//     const myname=name;
//     cd(myname);
// }
//------------------------------------Constructor--------------------------------->
main("kathir",first);
function Animal(name,age){
    this.name=name;
    this.age=age;
    this.intro=()=>{
        return `you animal name is ${name} and ${age} `
    }
}
let petone=new Animal("yep",12);
console.log(petone.intro())
function Adding(a){
    this.num1=10;
    this.num2=10;
    this.add=()=>{
        return this.num1+this.num2+a;
    }
}
const add1=new Adding(10);
console.log(add1.add())