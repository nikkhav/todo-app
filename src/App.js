import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <div style={{ backgroundColor: "#9354ff", height: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path={"todos"} element={<Todos />} />
        <Route path={"create"} element={<NewTodo />} />
      </Routes>
    </div>
  );
}

export default App;
