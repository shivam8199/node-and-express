//  const http=require('http')
// http.createServer((req,res)=>{
//     res.write("hello this is node js")
//     res.end()
//  }).listen(4444)  


const http=require('http')
function  dataControl(req,res){
    res.write("hello this iss node js")
    res.end()
}
http.createServer(dataControl).listen(4444)    