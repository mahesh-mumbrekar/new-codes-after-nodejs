const fs = require('fs');

//using built in method of node js which is require

const express= require('express');

const app = express();

app.use(express.urlencoded({ extended: false }))

app.get('/currenttime', function (req, res) {
    res.send('<h1>' + new Date().toISOString() + '</h1>');
})

app.get('/', function (req, res) {
    res.send('<form action="/store-user" method="POST" ><label>Your Name</label><input type="text" name="userName"><button>submit</button></form>');
})

app.post('/store-user', function(req, res){
    const userName = req.body.userName; 
    console.log(userName);
    res.send('<h1>UserName Stored!</h1>')

})

app.listen(3000);

/*
function handleRequest(request, response) {

    if (request.url === '/currenttime') {
     response.statusCode = 200;
     response.end('<h1>'+new Date().toISOString() + '<h1>')
    } else if(request.url==='/'){
     response.statusCode = 200;
     response.end('<h1> Hello World</h1>')
    }
  
    
}

const server = http.createServer(handleRequest);


server.listen(3000);*/
