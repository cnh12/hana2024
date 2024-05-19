import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const correctPassword = process.env.REACT_APP_SECRET_PASSWORD;  // 환경 변수에서 비밀번호를 불러옵니다.

  const handleLogin = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      onLoginSuccess();
    } else {
      alert('비밀번호가 틀렸습니다!');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
