// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess, onCancel }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();
      if (response.status === 200) {
        onLoginSuccess(); 
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    }
  };

  const handleCancel = () => {
    setLogin('');
    setPassword('');
    setError('');
    onCancel(); 
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input
            type="text"
            className="form-control"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
