const ChatDBHandler = require("../db/chat");
const ChatUseCases = require("../use-cases/chat");

const SocketFunctionsMap = {
  GET_CHAT_ROOM: 'get_chat_room',
  WRITE_ON_CHAT_ROOM: 'write_on_chat_room',
};

const SocketFunctions = {
  [SocketFunctionsMap.GET_CHAT_ROOM]: async (chatRoomId, callback) => {
    try {
      console.log('get_chat_room')
      const chatRoom = await ChatDBHandler.getChatRoomById(chatRoomId)
      if (callback) await callback(chatRoom);
      return chatRoom;
    } catch (error) {
      console.log(error)
    }
  },
  [SocketFunctionsMap.WRITE_ON_CHAT_ROOM]: async (arguments, callback) => {
    const { chatRoomId, username, message } = arguments
    console.log('write_chat')
    const newMessage = await ChatUseCases.writeOnChatRoom(chatRoomId, message, username);
    // console.log('write_chat', newMessage)
    callback(newMessage)
  }
}

module.exports = {SocketFunctions, SocketFunctionsMap};