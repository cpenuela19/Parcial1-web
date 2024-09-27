import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleCancel = () => {
    setIsAuthenticated(false); // Resetea el estado de autenticación si lo deseas
  };

  return (
    <div className="App">
      <header>
        <h1>Adopta un Robot con Robot Lovers!</h1>
        <img
          src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
          alt="Robots"
          className="banner-img"
        />
      </header>
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
