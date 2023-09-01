import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    
    navigate("/taskList");
  };

  return (
    <div>
      <h1>Gestor de tareas</h1>
      <h2>Para comenzar a gestionar sus tareas inicie sesión</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Ingresar</button>
        <p>
          <a href="/register">Registrate</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
