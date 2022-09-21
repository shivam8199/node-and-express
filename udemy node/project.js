const fs=require('fs');
const { buffer } = require('stream/consumers');

const requestHandler=(request,response)=>{
  const url=request.url;
  const method=request.method;
  if (url==='/home'){
  response.setHeader('Content-Type','text/html');
  response.write('<html>');
  response.write('<head><title>Demo Chat Box</title><head>');
  response.write(`<body>
  <form action="/message" method="POST"  onsubmit ="fun()" >
      <input type="text" id="sss" name="message"></input>
      <button type="submit" >Send</button></form></body>
  <script>
      function fun(e){
          
      const a=document.querySelector("#sss");
      localStorage.setItem('UserName',a.value);

      }
  </script>
  </form>
</body>`)
  response.write('</html>');
  //return response.end();
  }
  if (url==='/message' && method==='POST'){
      const body=[];
      request.on('data',(chunk)=>{
        body.push(chunk);
        console.log(chunk);
      })
      request.on('end',()=>{
          const parsedBody=Buffer.concat(body).toString();
          const message=parsedBody.split('=');
          console.log(parsedBody);
          console.log(message[0])
         // fs.writeFileSync('message.txt',message);
          response.statusCode=302;
          response.setHeader('Location','/');
          return response.end();
      })
  }

}


//module.exports=requestHandler;
//module.exports.handler=requestHandler;
exports.handler=requestHandler;