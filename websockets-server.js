var WebSocket = require('ws');

var ws = new WebSocket.Server({
  port: 3001
});

console.log('websockets server started');

ws.on('connection', function(socket) {
  console.log('client connection establisehd');

  socket.on('message', function(data) {
    console.log('messsage received: ' + data);
    socket.send(data);
  });
});
