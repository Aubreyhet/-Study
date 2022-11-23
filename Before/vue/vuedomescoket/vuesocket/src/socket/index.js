// Create SocketIO instance
import { io } from 'socket.io-client'
var socket = new io('localhost:1337',{
  port: 1337
});
// console.log(socket)
socket.connect();

// Add a connect listener
socket.on('connect',function() {
  log('<span style="color:green;">Client has connected to the server!</span>');
});
// Add a connect listener
socket.on('message',function(data) {
  log('Received a message from the server:  ' + data);
});
// Add a disconnect listener
socket.on('disconnect',function() {
  log('<span style="color:red;">The client has disconnected!</span>');
});

// Sends a message to the server via sockets
// function sendMessageToServer(message) {
//   socket.send(message);
//   log('<span style="color:#888">Sending "' + message + '" to the server!</span>');
// }

// Outputs to console and list
function log(message) {
  var li = document.createElement('li');
  li.innerHTML = message;
  document.getElementById('message-list').appendChild(li);
}