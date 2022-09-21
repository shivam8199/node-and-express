//handle asynchronous  data in node.js

let a=10;
let b=0;
let waitingdata=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b=30;
        resolve(30)
     
    },2000)
})
waitingdata.then((data)=>{
    b=data
    console.log(a+b)
})
