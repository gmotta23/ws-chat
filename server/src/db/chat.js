const chatRooms = {}

const ChatDBHandler = {
  insertChatRoom: async (chatRoom) => {
    chatRooms[chatRoom.uuid] = chatRoom
    return true
  },
  getChatRooms: async () => {
    return chatRooms
  }
}

module.exports = ChatDBHandler;
