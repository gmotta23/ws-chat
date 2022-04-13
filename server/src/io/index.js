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

  // TODO: REFACTOR THIS, maybe creating a "broadcast functions" component, which doesn't have to deal with callbacks of course
  // or even better, create two set of functions, one that does the job and the other that does the callback
  socket.on('broadcast', async (roomId) => {
    console.log(await socket.broadcast.allSockets())
    console.log('broadcast', roomId)
    socket.broadcast.emit(SocketFunctionsMap.GET_CHAT_ROOM, await SocketFunctions[SocketFunctionsMap.GET_CHAT_ROOM](roomId));
  })

  // socket.on(SocketFunctionsMap.WRITE_ON_CHAT_ROOM, (arguments, callback) => {
  //   console.log(arguments, callback)
  //   // console.log(socket);
  //   socket.broadcast.emit(SocketFunctionsMap.GET_CHAT_ROOM);
  // });


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