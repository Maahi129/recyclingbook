import React from 'react';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Price from './price';
import Recycled from './recycled';
import Charity from './charity';
import Contact from './contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/recycled" element={<Recycled />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


