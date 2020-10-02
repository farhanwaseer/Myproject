const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World');
     res.end(`<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>ES6</title>
        
         <style>
           body {
           margin: 0px;
       
           }
             nav{
               color: rgb(238, 238, 245);
               background-color: rgb(112, 116, 109);
               
               width: 100%;
               
               
                 
             }
             
               
             
             li{
                 display: inline-block;
                 padding: 20px;    
              margin-right: 10px;
              font-size: 20px;
             }
             
             li:hover {
                 color: rgb(7, 6, 6);
                 background-color: rgba(236, 245, 244, 0.548);
                 padding: 20px;
                 font-weight: bold;
                 text-shadow: 5px 3px 5px;
                 
     
     
             
             }
             li:active{
               font-weight: normal;
                 text-shadow: 5px 3px 5px;
     
     
             }
         </style>
         
     </head>
       <body>
           <nav class="main">
              <ul>
                 <li>home</li>
                 <li>Drop</li>
                 <li>contect</li>
                 <li>about</li>
              </ul>
           </nav>
         <h1>Learn Es6</h1>
       <h1>Class 1.2 complete</h1>
         
         
       </body>
     </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});