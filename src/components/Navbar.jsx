import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: 'rgba(74, 20, 140, 0.9)', // Purple background with transparency
    padding: '10px 20px',
    position: 'fixed', // Keep navbar fixed at the top
    top: '0',
    width: '100%', // Full width for centered appearance
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'center', // Center the navbar items
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  };

  const liStyle = {
    margin: '0 15px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#FFEB3B', // Change color on hover (yellow)
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/about"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            About
          </Link>
        </li>
        <li style={liStyle}>
          <Link
            to="/houses"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Houses
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
