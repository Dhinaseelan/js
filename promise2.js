/*var back=123
let promise1=new Promise((resolve,reject)=>{
    if(back==123){
        resolve("data is received")
    }
    else{
        reject("data is not received")
    }
})
promise1.then((data2)=>{
    console.log(`succes: ${data2}`)
    return `next succes: ${data2}`
}).then((data2)=>console.log(data2))
.catch((data2)=>{console.log(`faild ${data2}`)})*/
/////////////////////////////////////////////////
var back=123
console.log("fetechprofile"
)
function fetchpro(successcallback1,errorcallback){
    if(back){
        successcallback1("data recieved")
    }
    else{
        errorcallback("data not recieved")
    }
}
fetchpro((message)=>{console.log("success "+message)
  fetchpro((message)=>{console.log("next success "+message)
    
},(message)=>{"Iner faild: "+message})  
},(message)=>{"faild: "+message})
