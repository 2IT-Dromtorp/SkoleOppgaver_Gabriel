import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; // adjust the path as needed

function Login() {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <button onClick={handleLogin}>Log In</button>
  );
}

export default Login;
