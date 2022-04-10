const { Router } = require('express');
const ChatController = require('../controllers/chat');

const router = new Router();

router.post('/', ChatController.createChatRoom)
router.get('/', ChatController.getChatRooms)

module.exports = router;