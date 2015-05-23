var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  var fsStream = fs.createReadStream(process.argv[3]);
  fsStream.pipe(response);
});
server.listen(process.argv[2]);
