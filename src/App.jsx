import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login';
import TaskList from './TaskList';
import RegisterPage from './Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/taskList' element={<TaskList/>} />
        {/* Aquí puedes agregar más rutas para otras páginas */}
      </Routes>
    </Router>
  );
};

export default App;

