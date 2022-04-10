import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "~/App.css";
import Header from "~/components/Header";
import About from "~/pages/About";
import ChatRoom from "./pages/Chat/Room/:roomId";
import CreateRoom from "./pages/Chat/CreateRoom";
import Home from "./pages/Home";
import JoinRoom from "./pages/Chat/JoinRoom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/room/:roomId" element={<ChatRoom />} />
      </Routes>
    </div>
  );
}

export default App;