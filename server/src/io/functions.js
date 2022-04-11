const ChatDBHandler = require("../db/chat");
const ChatUseCases = require("../use-cases/chat");

const SocketFunctionsMap = {
  GET_CHAT_ROOM: 'get_chat_room',
  WRITE_ON_CHAT_ROOM: 'write_on_chat_room',
};

const SocketFunctions = {
  [SocketFunctionsMap.GET_CHAT_ROOM]: async (chatRoomId, callback) => {
    try {
      const chatRoom = await ChatDBHandler.getChatRoomById(chatRoomId)
      await callback(chatRoom);
    } catch (error) {
      console.log(error)
    }
  },
  [SocketFunctionsMap.WRITE_ON_CHAT_ROOM]: async (arguments, callback) => {
    const { chatRoomId, username, message } = arguments
    const newMessage = await ChatUseCases.writeOnChatRoom(chatRoomId, message, username);
    callback(newMessage)
  }
}

let a = Object.keys(SocketFunctions)

module.exports = {SocketFunctions, SocketFunctionsMap};