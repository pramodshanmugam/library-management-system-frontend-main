import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Library Management System</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Show Books</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Book</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search Book</Link>
          </li>
          <li className="navbar-item">
          <Link to="/bookCount" className="nav-link">Book Count</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}