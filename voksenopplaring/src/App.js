import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Login from './login.js';

function App() {//adds an app function
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;//export the app funtion to index.js