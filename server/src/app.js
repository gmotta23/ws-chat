const express = require('express')
const cors = require('cors')

const IndexRouter = require('../src/routes/index')
const ChatRouter = require('../src/routes/chat')

const app = express()
app.use(cors())

app.use('/', IndexRouter)
app.use('/chat', ChatRouter)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Listening on port ${port}`))