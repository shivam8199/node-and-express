const fs =require('fs')
const path=require('path')
const dirPath=path.join(__dirname,'crud')
const filepath=`${dirPath}/apple.txt`

//CREATE
fs.writeFileSync(filepath,'this is a simple text  filee')



// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })


//UPDATE
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(!err)console.log("file is updated")
// })

//RENAME
fs.rename(filepath, `${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file name is updated")
})

//fs.unlinkSync(`${dirPath}/fruit.txt`);