const { Router } = require('express');
const ChatController = require('../controllers/chat');

const router = new Router();

router.post('/', ChatController.createChatRoom)
router.get('/', ChatController.getChatRooms)

// WILL BE RUNNING ON IO
router.post('/:chatRoomId/message', ChatController.writeOnChatRoom)
router.get('/:chatRoomId', ChatController.getChatRoomById)

module.exports = router;