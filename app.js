//using built in method of node js which is require

const http = require('http');


function handleRequest(request, response) {
    response.statusCode = 200;
    response.end('<h1> Hello World</h1>')
    
}

const server = http.createServer();


server.listen(3000);
