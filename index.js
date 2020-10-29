const http = require('http');
const os = require('os');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'})
  const host = os.hostname()
  res.end(`Hello World! ${host}`)
}).listen(8989)