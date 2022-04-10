import React, { useState } from "react";
import { Link } from "react-router-dom";
import '~/styles/pages/Home.scss'

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');

  const createRoom = async () => {
    console.log(roomName);
  }

  return (
    <>
      <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
      <div className="button" onClick={createRoom}>
        Create room
      </div>
    </>
  )
};

export default CreateRoom;