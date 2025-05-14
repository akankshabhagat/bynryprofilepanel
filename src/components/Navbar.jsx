import React from 'react';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = ({ searchTerm, setSearchTerm }) => (
  <nav className="navbar">
    <h1>Profile Checker</h1>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </nav>
);

export default Navbar;
