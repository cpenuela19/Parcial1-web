import React, { useState } from 'react';
import './LoginForm.css'

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

    
      if (response.status === 200) {
        onLoginSuccess(); 
      } else {
        setError("Error de autenticación. Revise sus credenciales");
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
    
    <div className="login-form">
      <div className="inicio">Inicio de sesión</div>
    
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
        
        <div className="button-container">
          <button type="submit" className="btn-primary">
            Ingresar
          </button>
          <button type="button" className="btn-secondary" onClick={handleCancel}>
            <strong>Cancelar</strong>
          </button>
        </div>
        {error && <div className="error-msg">{error}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
