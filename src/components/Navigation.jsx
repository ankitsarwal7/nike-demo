import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
  
        <button>login</button>
      </nav>
    );
  };
  
  export default Navigation;    