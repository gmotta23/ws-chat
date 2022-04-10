const ChatDBHandler = require("../db/chat")
const { generateUUID } = require("../services/internal/crypto")

const ChatUseCases = {
  createChatRoom: async (chatRoomName) => {
    try {
      const chatRoom = {
        uuid: generateUUID(),
        name: chatRoomName
      }

      const insert = await ChatDBHandler.insertChatRoom(chatRoom)

      if (insert) return chatRoom
    } catch (error) {
      return false
    }
  },
  getChatRooms: async () => {
    try {
      const chatRooms = await ChatDBHandler.getChatRooms()
      return chatRooms
    } catch (error) {
      return false
    }
  }
}

module.exports = ChatUseCases