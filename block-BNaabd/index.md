writeCode

1. Create a basic server `data.js`

- add a listener on port 7000
- send different types of data from postman and check `req.headers` for `content-type` after creating below server
- send json data from postman using `POST` request on `/json` and parse it into the server.
- send form data from postman using `POST` request on `/form` and parse it into the server.
- send in response the entire data received by server.


var http= require('http')
var server = http.createServer(handleRequest)
var qs = require('queryString')
function handleRequest(req, res){
  var store = '';
  req.on('data',(chunk) => {
    store += chunk
  })
  
  req.on('end', () => {
  if(req.method === 'POST' && req.url ==='/json){
    console.log(store)
    res.setHeader('Content-Type', 'application/json')
    res.end(store);
  }
  
  if(req.method === 'POST' && req.url === '/form') {
    console.log(store)
   var formData = qs.parse(store)
   res.end(JSON.stringify(formData))
  }

  })
}

server.listen(7000)
