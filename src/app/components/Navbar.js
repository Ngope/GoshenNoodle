"use client";
import React, { useState } from 'react';
import '../styles/styles.css'; // Importing CSS styles

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
<nav className="navbar bg-amber-400 p-4">
<div className="container mx-auto flex justify-between items-center">
  <div className="block lg:hidden">
    <button onClick={toggleMenu} className="text-white focus:outline-none">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
      </svg>
    </button>
  </div>
  <ul className={`nav-links lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
    <li><a href="#About" className="block text-white py-2 px-4">About</a></li>
    <li><a href="#Menu" className="block text-white py-2 px-4">Menu</a></li>
    <li><a href="#Contact" className="block text-white py-2 px-4">Contact</a></li>
  </ul>
</div>
</nav>
  );
}