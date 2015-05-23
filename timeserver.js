var net = require("net");
var strftime = require("strftime");
var server = net.createServer(function(socket){
  //socket.write(data);
  var date = new Date();
  socket.write(strftime("%Y-%m-%d %H:%M"));
  socket.write();
  socket.end();
});
server.listen(process.argv[2]);
