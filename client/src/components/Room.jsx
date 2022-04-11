import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:4001';

function Room() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log(socket)
    socket.on('FromAPI', data => {
      setResponse(data);
    })

    return () => socket.disconnect();
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  )
}

export default Room;