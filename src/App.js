import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import Header from './components/Header';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleCancel = () => {
    setIsAuthenticated(false); 
  };

  return (
    <div>
      <Header/>
      <main>
        {!isAuthenticated ? (
          <LoginForm onLoginSuccess={handleLoginSuccess} onCancel={handleCancel} />
        ) : (
          <RobotList />
        )}
      </main>
      <footer>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
}

export default App;
