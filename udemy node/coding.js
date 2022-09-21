// var arr=[1,22,3,4,5,33,44,2,3,4];
// var max=arr[0]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max&&arr[i]!==44 ){
//         max=arr[i]
//         console.log(i)
//     }
// }
function abc(arr){
var s=0
var e=arr.length-1
while(s<e){
    [s,e]=[e,s]
    s++;
    e--;
   
}return arr
}
console.log(abc([1,2,3,4]))