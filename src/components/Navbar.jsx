import React from 'react';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = ({ searchTerm, setSearchTerm }) => (
  <nav className="navbar">
    <div className="container nav-container">
      <input className="checkbox" type="checkbox" id="nav-toggle" />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div className="logo">
        <h1>Profile Checker</h1>
      </div>
      <div className="menu-items">
        <li><a href="/">Home</a></li>
        <li><SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></li>
      </div>
    </div>
  </nav>
);

export default Navbar;
