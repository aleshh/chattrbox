var WebSocket = require('ws');

var ws = new WebSocket.Server({
  port: 3001
});

var messages = [];

console.log('websockets server started');

ws.on('connection', function(socket) {
  console.log('client connection establisehd');

  socket.on('message', function(data) {
    if (data.toLowerCase() == "swordfish") {

      messages.forEach(function(msg) {
        socket.send(msg);
      });

      socket.on('message', function(data) {
        console.log('messsage received: ' + data);
        messages.push(data);
        ws.clients.forEach(function(clientSocket) {
          clientSocket.send(data);
        });

        // socket.send(data);
      });



    } else {
      socket.send('Incorrect password.');
    }
  });

});
