import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo-and-search">
          <img
            className="github-logo"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
          />
          <input className="search-bar" type="text" placeholder="Search" />
        </div>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>
        <div className="profile">
          <img
            className="profile-logo"
            src="https://avatars.githubusercontent.com/u/1?s=60&v=4"
            alt="Profile"
          />
          <button className="add-button">+</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
