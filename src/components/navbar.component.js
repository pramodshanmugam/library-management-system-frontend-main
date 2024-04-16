import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Artifact Management System</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Show Artifacts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Artifact</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search Artifact</Link>
          </li>
          <li className="navbar-item">
          <Link to="/bookCount" className="nav-link">Artifact Count</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}