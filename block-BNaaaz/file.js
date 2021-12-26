var http = require('http')
var server = http.createServer(handleRequest)

function handleRequest(req, res){
  res.setHeader('content-type', 'text/plain')
  fs.createReadStream('./readme.txt').pipe(res)
}

server.listen(5000, () => {
  
})
