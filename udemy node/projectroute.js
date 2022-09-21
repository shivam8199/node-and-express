const http =require('http')
const route=require('./project.js')
const server=http.createServer(route)
server.listen(7000)