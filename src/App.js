import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Login from './components/Login';
import TopBar from './components/TopBar'; // TopBar 컴포넌트를 임포트
import BottomBar from './components/BottomBar'; // BottomBar 컴포넌트를 임포트



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    
    <div className="App">
      <TopBar />
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Quiz />
      )}
      <BottomBar />
    </div>
  );
}

export default App;
