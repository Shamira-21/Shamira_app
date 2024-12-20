// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Reviews from './Reviews'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/services">Services</Link>   <Link to="/reviews">Reviews</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
