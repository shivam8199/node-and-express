const fs=require('fs')
//fs.writeFileSync('apple.txt','this is a apple file' )
const path=require('path')
const dirpath=path.join(__dirname,'files')
// for(var i=0;i<3;i++){
//     fs.writeFileSync(dirpath+'/apple'+[i]+'.txt','this is a apple file' )

// }
fs.readdir(dirpath,(err,files)=>{
    //console.warn(files)
    files.forEach((item)=>{
console.log('file name is '+item)
    })
})