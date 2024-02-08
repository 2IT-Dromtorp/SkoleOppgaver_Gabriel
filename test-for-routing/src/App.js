import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ImagePage from './ImagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image/:id" element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
