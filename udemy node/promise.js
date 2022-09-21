const fetchdata=()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("i love coding ")
        },2000);
    })
  return promise 
}
setTimeout(()=>{
    console.log("i hate coding ")
    fetchdata().then(text=>{
        console.log(text)
        return fetchdata();
    }).then(text2=>{
        console.log("vdbdbfgnffg")
    })
},2000)
console.log("second");
console.log("three");