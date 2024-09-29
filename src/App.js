import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RobotList from './components/RobotList';
import Header from './components/Header';
import { IntlProvider } from 'react-intl'; 
import localeEsMessages from './locales/es.json'; 
import localeEnMessages from './locales/en.json'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleCancel = () => {
    setIsAuthenticated(false); 
  };

  const locale = navigator.language.startsWith('es') ? 'es' : 'en'; 
  const messages = locale === 'es' ? localeEsMessages : localeEnMessages;

  return (
    <IntlProvider locale={locale} messages={messages}> 
      <div>
        <Header />
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
    </IntlProvider>
  );
}

export default App;
