//---------------------------------callback--------------------->
function first(fistdata,cd){
    
    setTimeout(()=>{console.log(`U:hello ${fistdata}`)
    secound(fistdata,third)},3000)
    
}
function secound(secounddata,cd){
 setTimeout(()=>{console.log(`2:hello ${secounddata}`)
    third(secounddata)},3000)
}
function third(thirddata){
    setTimeout(()=>{console.log(`3:hello ${thirddata}`)},3000)
}
const main=(name,cd)=>{
    const myname=name;
    cd(myname);
}
main("kathir",first);