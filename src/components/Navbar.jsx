import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">Photographer's Portfolio</div>
      <div className="flex gap-4">
        <a href="#home" className="hover:text-green-400">Home</a>
        <a href="#about" className="hover:text-green-400">About</a>
        <a href="#services" className="hover:text-green-400">Services</a>
        <a href="#contact" className="hover:text-green-400">Contact</a>
        <Link to="/gallery" className="hover:text-green-400">Gallery</Link>
        <Link to="/bookings" className="hover:text-green-400">Bookings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
