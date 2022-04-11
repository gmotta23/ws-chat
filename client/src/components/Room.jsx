import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import '~/styles/components/Room.scss'

const ENDPOINT = 'http://localhost:4001';
const socket = socketIOClient(ENDPOINT);


function Room({roomId, username}) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  socket.on('get_chat_room', roomId, (response) => {
    setMessages(response.chat)
  });

  useEffect(() => {
    console.log('use effect')
    socket.emit('get_chat_room', roomId, (response) => {
      setMessages(response.chat)
    });

    // return () => socket.disconnect();
  }, [newMessage]);

  const sendNewMessage = () => {
    const args = {
      chatRoomId: roomId,
      username: username,
      message: newMessage,
    }
    console.log('sending message')
    socket.emit('write_on_chat_room', args, (response) => {
      console.log(response)
    });


    socket.emit('get_chat_room', roomId, (response) => {
      setMessages(response.chat)
    });
    setNewMessage('');
  }

  return (
    <div className="container">
      <div className="messages">
        {messages.map((messageObject) => (
          <div className="message">
            {messageObject.username}[{Date(messageObject.time)}]: {messageObject.message}
          </div>
        ))}
      </div>
      <div className="new-message">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={sendNewMessage}>send</button>
      </div>
    </div>
  )
}

export default Room;