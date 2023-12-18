const http = require('http');

//create a server
 const server=http.createServer((req, res) => {
  //this is how sending plain text response.
   res.end('Hello from the server!');
 })

 //start the server
 server.listen(8000, '127.0.0.1',()=>{
    console.log('Listening to requests on port 8000');
 })