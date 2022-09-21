const http=require('http')
const data=require('./8data')
const { receiveMessageOnPort } = require('worker_threads')
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'} )
res.write(JSON.stringify(data))
res.end()
}).listen(7777)
