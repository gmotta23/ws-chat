import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:4001';

function Room({roomId, username}) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    console.log('use effect')
    socket.emit('get_chat_room', roomId, (response) => {
      setMessages(response.chat)
    });

    return () => socket.disconnect();
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
    setNewMessage('');
  }

  return (
    <div className="container">
      <div className="messages">
        {messages.map((m) => <>{m.message}</>)}
      </div>
      <div className="new-message">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={sendNewMessage}>send</button>
      </div>
    </div>
  )
}

export default Room;