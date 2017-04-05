let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

// function registerOpenHandler(handlerFunction) {
//   socket.onopen = () => {
//
//   }
// }

export default {
  init,
}
