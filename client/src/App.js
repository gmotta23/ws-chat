import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "~/App.css";
import Header from "~/components/Header";
import About from "~/pages/About";
import CreateRoom from "./pages/CreateRoom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-room" element={<CreateRoom />} />
      </Routes>
    </div>
  );
}

export default App;