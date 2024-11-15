import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "rgba(74, 20, 140, 0.9)",
    padding: "10px 20px",
    position: "fixed",
    top: "0",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
    display: "flex",
    justifyContent: "center",
  };

  const ulStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  };

  const liStyle = {
    margin: "0 15px", // Adjust this margin for spacing between links
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    padding: "10px", // Add padding here for space around the links
    borderRadius: "4px", // Optional: add rounded corners to the links
  };

  const linkHoverStyle = {
    color: "#FFEB3B",
    backgroundColor: "rgba(255, 235, 59, 0.2)", // Optional: background color change on hover
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
        <li style={liStyle}>
          <Link
            to="/user"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            User
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
