import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Room from '~/components/Room';

const ChatRoom = () => {
  const {roomId} = useParams();
  const [username, setUsername] = useState('');
  const [usernameIsSet, setUsernameIsSet] = useState(false);

  const goToRoom = () => {
    if (username) {
      setUsernameIsSet(true);
    }
  }

  return (
    <>
      {!usernameIsSet && (
        <>
          <div className="container">
            <div className="subtitle">
              Set your username:
            </div>
            <form>
              <div className="input-container">
                <label htmlFor="room-name">Username</label>
                <input id="room-name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="action">
                <div className="button" onClick={goToRoom}>
                  Go to room
                </div>
              </div>
            </form>
          </div>
        </>
      )}
      {usernameIsSet && (
        <>
          WELCOME TO ROOM {roomId}, {username}
          <Room roomId={roomId} username={username} />
        </>
      )}
    </>
  )
}

export default ChatRoom;