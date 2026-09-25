import React, { useState } from 'react';
import Login from './Login';
import MotorcycleList from './MotorcycleList';
import Organization from './Organization';

export default function App() {
  const [currentView, setCurrentView] = useState('login');

  const handleLoginSuccess = (role) => {
    if (role === 'consumer') setCurrentView('home');
    if (role === 'organization') setCurrentView('organization');
  };

  return (
    <div>
      {currentView !== 'login' && (
        <button 
          onClick={() => setCurrentView('login')} 
          style={{ margin: '15px', padding: '8px 15px', cursor: 'pointer' }}
        >
          Logout
        </button>
      )}
      {currentView === 'login' && <Login onLogin={handleLoginSuccess} />}
      {currentView === 'home' && <MotorcycleList />}
      {currentView === 'organization' && <Organization />}
    </div>
  );
}
