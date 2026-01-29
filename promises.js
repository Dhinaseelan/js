let data1=new Promise((resolve,reject)=>{
    setTimeout(() => {
       let value1=null
       if(value1)
        resolve(value1)
    else{
        reject(new Error("no data found"))
    }
    }, 2000);

})
data1.then((name)=>{console.log(name)
    
})
.catch((erro)=>{console.log(erro.stack)})
.finally(()=>console.log("test"))
