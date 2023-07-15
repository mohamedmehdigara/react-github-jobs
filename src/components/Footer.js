import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </nav>
        <p>&copy; {new Date().getFullYear()} GitHub Jobs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
