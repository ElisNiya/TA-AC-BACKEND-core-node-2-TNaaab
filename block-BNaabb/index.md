writeCode

Create a basic http server in `stream.js`

- add a listener on port 3456
- send text data from postman using `POST` request on `/` route.
- add `data` and `end` event on request to capture data
- capture the data sent from postman on server side
- send captured data in response using `res.write`

var http= require('http')
var server = http.createServer(handleRequest)
server.listen(3456)
function handleRequest(req, res){
  if (req.method === 'POST'){
    res.setHeader('Content-type', 'text/plain')
    res.end('data')
  }
}
