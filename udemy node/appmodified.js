const http=require('http');
const server=http.createServer((request,response)=>{
    const url=request.url;
    if (url==='/'){
    response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>My First Page</title><head>');
    response.write('<body><h1>Welcome Home</h1><br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');

    response.write('</html>');
     response.end();
    }
    if (url==='/about'){
        response.setHeader('Content-Type','text/html');
        response.write("<head>");
        response.write('<title>About Page</title>');
        response.write('<body>');
        response.write('<h1>Welcome to About Us page</h1>');
        response.write('<body>');
        response.write('</head>');

        }
    if (url==='/node'){
            response.setHeader('Content-Type','text/html');
            response.write("<head>");
            response.write('<title>About Page</title>');
            response.write('<body>')
            response.write('<h1>Welcome to Node js Project</h1>');
            response.write('<body>');
            response.write('</head>');
            }
})
server.listen(4000);