const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// IO

const http = require('http')
const socketIo = require('socket.io')

const IndexRouter = require('../src/routes/index')
const ChatRouter = require('../src/routes/chat')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/', IndexRouter)
app.use('/chat', ChatRouter)

const port = process.env.PORT || 4000

// IO

const server = http.createServer(app);

const io = socketIo(server, {
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

server.listen(port, () => console.log(`Listening on port ${port}`))