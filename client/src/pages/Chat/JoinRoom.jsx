import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '~/styles/pages/CreateRoom.scss'

const JoinRoom = () => {
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate();

  const joinRoom = async () => {
    // see if room exists
    navigate(`/room/${roomName}`)
  }

  return (
    <div className="container">
      <div className="subtitle">
        Join a room
      </div>
      <form>
        <div className="input-container">
          <label htmlFor="room-name">Room ID</label>
          <input id="room-name" type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
        </div>
        <div className="action">
          <div className="button" onClick={joinRoom}>
            Join room
          </div>
        </div>
      </form>
    </div>
  )
};

export default JoinRoom;