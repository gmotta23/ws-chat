const ChatUseCases = require("../use-cases/chat")

const ChatController = {
  createChatRoom: async (req, res) => {
    try {
      const chatRoom = await ChatUseCases.createChatRoom()
      return res.send(chatRoom)
    } catch (error) {
      console.log(error)
      res.status(400).send('Something wrong happened.')
    }
  },
  getChatRooms: async (req, res) => {
    try {
      const chatRooms = await ChatUseCases.getChatRooms()
      return res.send(chatRooms)
    } catch (error) {
      console.log(error)
      res.status(400).send('Something wrong happened.')
    }
  }
}

module.exports = ChatController