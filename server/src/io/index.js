const { Server } = require('socket.io')
const io = new Server(4001, {
  cors: {
    origin: '*'
  }
})

const getApiAndEmit = socket => {
  const response = new Date();
  socket.emit('FromAPI', response)
}

let interval;

io.on('connection', socket => {
  console.log('new client connected')
  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(() => {
    getApiAndEmit(socket)
  }, 1000);
  socket.on('disconnect', () => {
    console.log('client disconnected')
    clearInterval(interval)
  })
})

module.exports = io;