import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '~/styles/pages/CreateRoom.scss'

const JoinRoom = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const joinRoom = async () => {
    // see if room exists
    navigate(`/room/${roomId}`)
  }

  return (
    <div className="container">
      <div className="subtitle">
        Join a room
      </div>
      <form>
        <div className="input-container">
          <label htmlFor="room-name">Room ID</label>
          <input id="room-name" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
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