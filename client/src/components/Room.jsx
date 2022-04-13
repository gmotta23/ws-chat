import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import '~/styles/components/Room.scss'

const ENDPOINT = 'http://localhost:4001';

const socket = socketIOClient(ENDPOINT);

console.log('running function file')

function Room({roomId, username}) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  socket.on('get_chat_room', (response) => {
    console.log('LOADING CHAT ROOM 2', response)
    setMessages(response.chat)
  });

  useEffect(() => {
    console.log('use effect')

    socket.emit('get_chat_room', roomId, (response) => {
      console.log(response.chat, 'LOADING CHAT ROOM')
      setMessages(response.chat)
    });

    return () => socket.disconnect();
  }, []);

  const sendNewMessage = () => {
    const args = {
      chatRoomId: roomId,
      username: username,
      message: newMessage,
    }

    socket.emit('write_on_chat_room', args, (response) => {
      console.log(response, 'WRITE TO CHAT ROOM')
    });

    socket.emit('get_chat_room', roomId, (response) => {
      console.log(response.chat, 'GET CHAT ROOM AFTER WRITE')
      setMessages(response.chat)
    });

    socket.emit('broadcast', roomId);

    // socket.emit('broadcast', roomId, (response) => {
    //   console.log('BROADCAST GET ROOM', response)
    //   setMessages(response.chat)
    // });


    setNewMessage('');
  }

  return (
    <div className="container">
      <div className="messages">
        {messages.map((messageObject) => (
          <div className="message" key={messageObject.id}>
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