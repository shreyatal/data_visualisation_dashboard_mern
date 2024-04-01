import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './MyComponent';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<MyComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
