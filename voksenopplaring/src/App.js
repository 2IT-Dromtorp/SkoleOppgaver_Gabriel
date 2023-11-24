import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Login from './login.js';
import Workout from './workout.js';
import Homeknowlege from './homeknowlege.js';
import Norway from './norway.js';
import ComputerKnowledge from './computerKnowledge.js';
import Signup from './Signupbutton.js';
function App() {//adds an app function
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/workout" element={<Workout />} />
      <Route path="/homeknowlege" element={<Homeknowlege />} />
      <Route path="/norway" element={<Norway />} />
      <Route path="/computerKnowledge" element={<ComputerKnowledge />} />
      <Route path="/Signupbutton" element={<Signup />} />
    </Routes>
  );
}

export default App;//export the app funtion to index.js