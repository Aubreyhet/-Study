var io = require('socket.io');
var http = require('http');
var server = http.createServer(function (req, res) {

  var headers = {};
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
  headers["Access-Control-Allow-Credentials"] = true;
  headers["Access-Control-Max-Age"] = '86400'; // 24 hours
  headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
  res.writeHead(200, headers);
  res.end();
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
var socket = io(server);
socket.on('connection', function(){
  console.log("Connected");
});
