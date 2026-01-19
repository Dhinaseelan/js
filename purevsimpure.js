//pure example
const names=["kathir","dhinaseelan","salvam","alex"];
function addname(name){
    return [...names,name];
}
console.log(names)
console.log(addname("karthik"))
//pure 2 example 
const num=[1,2,3];
const value=num.map((num)=>num*2);
console.log(value)
//impure example
function impure(name){
    names.push(name);
    return names;
}
console.log(impure("karthik"));
//impure example 2
let count=0;
const impure2=()=>{
    count++;
    return count;
}
console.log(impure2());
console.log(impure2());
// Aspect ---------------Pure Function --------------Impure Function 
// Same input → output---✅ Always same-------------❌ Can vary
// Side effects----------❌ None---------------------✅ Present
// External state use----❌ No-----------------------✅ Yes
// impure:May produce different outputs for the same input
// pure:Returns the same output for the same input.