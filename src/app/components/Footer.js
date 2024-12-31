import React from 'react';
import '../styles/styles.css'; // Importing CSS styles

export default function Footer() {
  return (
    <footer className="footer">
        <div className="flex justify-center items-center pb-16">
            <div className="w-1/6 p-1 text-left"> 
                <p>1303 College Ave.<br />Goshen, IN 46528</p>
                <br />
                <p>(574)-534-1793</p>
            </div>
            <div className="w-1/6 p-1 text-right">
                <p>Hours:</p>
                <p>Mon: 11am - 7pm</p>
                <p>Tues: Closed.</p>
                <p>Wed-Sun: 11am - 7pm</p>
            </div>
        </div>
    <div className="container">
      <p>&copy; 2025 Goshen Noodles. All rights reserved.</p>
    </div>
  </footer>
  );
}