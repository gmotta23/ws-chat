const ChatDBHandler = require("../db/chat");
const ChatUseCases = require("../use-cases/chat")

const ChatController = {
  createChatRoom: async (req, res) => {
    try {
      const { chatRoomName } = req.body;
      const chatRoom = await ChatUseCases.createChatRoom(chatRoomName);
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
  },
  writeOnChatRoom: async (req, res) => {
    try {
      const { chatRoomId } = req.params;
      const { username, message } = req.body;

      const newMessage = await ChatUseCases.writeOnChatRoom(chatRoomId, message, username);
      return res.send(newMessage);
    } catch (error) {
      console.log(error)
      res.status(400).send('Something wrong happened.')
    }
  },
  getChatRoomById: async (req, res) => {
    try {
      const { chatRoomId } = req.params;
      const chatRoom = await ChatDBHandler.getChatRoomById(chatRoomId);
      return res.send(chatRoom)
    } catch (error) {
      console.log(error)
      res.status(400).send('Something wrong happened.')
    }
  }
}

module.exports = ChatController