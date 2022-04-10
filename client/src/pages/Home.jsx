import * as React from "react";
import { Link } from "react-router-dom";
import '../styles/pages/Home.scss'

function Home() {
  return (
    <>
      <h1>
        Welcome!
      </h1>
      <div className="dialog">
        Do you want to create a room or join a room?
      </div>
      <div className="buttons">
        <div className="button">
          <Link to="/about">Create room</Link>
        </div>
        <div className="button">
          <Link to="/about">Join room</Link>
        </div>        
      </div>
    </>
  );
}

export default Home;
