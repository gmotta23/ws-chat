const ChatDBHandler = require("../db/chat")
const { generateUUID } = require("../services/internal/crypto")

const ChatUseCases = {
  createChatRoom: async (chatRoomName) => {
    try {
      const chatRoom = {
        uuid: generateUUID(),
        name: chatRoomName,
        chat: [],
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
  },
  writeOnChatRoom: async (chatRoomId, message, username) => {
    try {
      const time = Date.now();
      const id = generateUUID();
      const chatRoom = await ChatDBHandler.getChatRoomById(chatRoomId);

      const newMessage = {
        time: time,
        id: id,
        username: username,
        message: message
      };

      chatRoom.chat.push(newMessage);

      return newMessage;

    } catch (error) {
      console.log(error)
      return false;
    }
  },
}

module.exports = ChatUseCases