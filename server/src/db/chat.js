const chatRooms = {}

const ChatDBHandler = {
  insertChatRoom: async (chatRoom) => {
    chatRooms[chatRoom.uuid] = chatRoom
    return true
  },
  getChatRooms: async () => {
    return chatRooms
  },
  getChatRoomById: async (chatRoomId) => {
    return chatRooms[chatRoomId]
  }
}

module.exports = ChatDBHandler;
