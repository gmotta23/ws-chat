const { Server } = require('socket.io');
const { SocketFunctions, SocketFunctionsMap } = require('./functions');
const io = new Server(4001, {
  cors: {
    origin: '*'
  }
})

// const getApiAndEmit = socket => {
//   const response = new Date();
//   socket.emit('FromAPI', response)
// }

let interval;

io.on('connection', socket => {
  console.log('new client connected')

  socket.on(SocketFunctionsMap.GET_CHAT_ROOM, SocketFunctions[SocketFunctionsMap.GET_CHAT_ROOM]);
  socket.on(SocketFunctionsMap.WRITE_ON_CHAT_ROOM, SocketFunctions[SocketFunctionsMap.WRITE_ON_CHAT_ROOM]);

  // if (interval) {
  //   clearInterval(interval)
  // }
  // interval = setInterval(() => {
  //   getApiAndEmit(socket)
  // }, 1000);
  
  socket.on('disconnect', () => {
    console.log('client disconnected')
    clearInterval(interval)
  })
})

module.exports = io;