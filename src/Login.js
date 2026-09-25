import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role) => {
    if (username.trim() && password.trim()) {
      onLogin(role);
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <h2>MOTORCYCLE CATALOG</h2>
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ width: '100%', padding: '10px' }}
        />
      </div>
      <div>
        <button onClick={() => handleLogin('consumer')} style={{ padding: '10px 15px', marginRight: '10px' }}>
          Login as Consumer
        </button>
        <button onClick={() => handleLogin('organization')} style={{ padding: '10px 15px' }}>
          Login as Organization
        </button>
      </div>
    </div>
  );
}
