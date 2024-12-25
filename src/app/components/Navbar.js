import React from 'react';
import '../styles/styles.css'; // Importing CSS styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#Menu">About</a></li>
        <li><a href="#About">Menu</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}