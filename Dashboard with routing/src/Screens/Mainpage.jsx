import React from 'react';
import { Link } from 'react-router-dom';
import './Mainpage.css';

const Mainpage = () => {
  return (
    <div className="main-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="button-container">
        <Link to={'/products'} className="nav-button">Products</Link>
        <Link to={'/users'} className="nav-button">Users</Link>
        <Link to={'/github-finder'} className="nav-button">GitHub</Link>
      </div>
    </div>
  );
};

export default Mainpage;


