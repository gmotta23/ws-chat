import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '~/styles/pages/CreateRoom.scss'

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate();

  const createRoom = async () => {
    // create room on backend
    navigate(`/room/${roomName}`)
  }

  return (
    <div className="container">
      <div className="subtitle">
        Create a room
      </div>
      <form>
        <div className="input-container">
          <label htmlFor="room-name">Room name</label>
          <input id="room-name" type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
        </div>
        <div className="action">
          <div className="button" onClick={createRoom}>
            Create room
          </div>
        </div>
      </form>
    </div>
  )
};

export default CreateRoom;