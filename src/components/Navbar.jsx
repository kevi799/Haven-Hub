import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/image.png";

function Navbar() {
  const navStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px 0px",
    position: "fixed",
    top: "0",
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBox: "black",
  };

  const logoStyle = {
    height: "50px",
    width: "auto",
  };

  const ulStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  };

  const liStyle = {
    margin: "0 15px",
  };

  const linkStyle = {
    color: "White",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    paddingRight: "10px",
    borderRadius: "4px",
  };

  const linkHoverStyle = {
    color: "white",
    backgroundColor: "rgba(255, 235, 59, 0.2)",
  };

  return (
    <nav style={navStyle}>
      <Link to="/">
        <img src={logo} alt="Logo" style={logoStyle} />
      </Link>
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
