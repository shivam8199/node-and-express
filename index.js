const app=require('./app')
let arr=[4,1,6,3,4,89,0];

console.log(app.xyz(),app.x,app.y)
const result =arr.filter((item)=>{
    return item>=4
});
const result1 =arr.map((item)=>{
    return item*4
});
console.warn(result);
console.log(result1);