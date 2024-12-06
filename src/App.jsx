import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './pages/Gallery';
import Bookings from './pages/Bookings';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </div>
  </Router>
);

export default App;
