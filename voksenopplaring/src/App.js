import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Signup from './Signupbutton.js';
import { AuthProvider } from './AuthContext';

function App() {//adds an app function
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signupbutton" element={<Signup />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;//export the app funtion to index.js