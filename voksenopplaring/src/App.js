import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js'

function App() {//adds an app function
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;//export the app funtion to index.js
