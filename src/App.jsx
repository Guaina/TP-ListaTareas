import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Login";
import TaskList from "./TaskList";
import RegisterPage from "./Register";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/taskList" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default App;
