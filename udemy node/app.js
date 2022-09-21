// //http,https,fs,path,os are core modules of node.js

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     //console.log(req)
//     console.log(req.url,req.method,req.headers)
//   //  process.exit();
// res.setHeader('Content-Type','text/html')
// res.write('<html>')
// res.write('<head><title>req server</title></head>')
// res.write('<body><h1>hello buddy from node js </h1></body>')
// res.write('</html>')
// res.end()

// })
// server.listen(1234)

const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);