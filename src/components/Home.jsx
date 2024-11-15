import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const containerStyle = {
    backgroundImage: 'url("https://i.pinimg.com/736x/b3/b1/35/b3b135af9c4ddc2ec80f7947064016a6.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    flexDirection: 'column',
    backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: '0 20px',
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    margin: '0',
    color: '#ffffff',
    '@media (max-width: 768px)': {
      fontSize: '2rem', // Adjust title font size on smaller screens
    },
  };

  const subtitleStyle = {
    fontSize: '1.5rem', 
    marginTop: '15px',
    color: '#f5f5f5',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6',
    '@media (max-width: 768px)': {
      fontSize: '1.2rem', // Adjust subtitle font size on smaller screens
    },
  };

  const footerStyle = {
    position: 'relative',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '1rem',
    '@media (max-width: 768px)': {
      padding: '0.5rem', // Reduce footer padding on small screens
    },
  };

  const footerContentStyle = {
    maxWidth: '7xl',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Stack footer items vertically on smaller screens
      textAlign: 'center', // Center text for mobile devices
    },
  };

  const contactSectionStyle = {
    textAlign: 'left',
    '@media (max-width: 768px)': {
      textAlign: 'center', // Center contact info on small screens
    },
  };

  const relatedLinksStyle = {
    textAlign: 'left',
    '@media (max-width: 768px)': {
      textAlign: 'center', // Center related links on small screens
    },
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0.5rem',
    '@media (max-width: 768px)': {
      justifyContent: 'center',
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Haven Hub: Redefining Real Estate Online</h1>
        <p style={subtitleStyle}>
          Explore Haven Hub's mission, values, and innovative solutions for all your online real estate needs.
        </p>
      </div>

      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div style={contactSectionStyle}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Contact Us</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
              <span style={{ marginRight: '0.5rem' }}>📍</span>
              <span>The Nest Business Park</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
              <span style={{ marginRight: '0.5rem' }}>📞</span>
              <span>0745712570</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>📧</span>
              <span>havenhub.co.ke</span>
            </div>
          </div>

          <div style={relatedLinksStyle}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Related Links</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {["Find your home", "Search", "All Properties", "Recommended for you", "About Us", "Contact Us"].map((link, index) => (
                <li key={index} style={{ marginBottom: '0.25rem' }}>
                  <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ backgroundColor: '#e2e2e2', color: '#4a4a4a', padding: '1rem', borderRadius: '0.375rem', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '0.25rem' }}>Contact Us:</h4>
            <p style={{ margin: 0, fontSize: '1.125rem', fontWeight: '700' }}>0740 712 579</p>
          </div>
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
          Achieving your home ownership dream is easier when you work with Haven Hub.
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', backgroundColor: '#003366', padding: '0.5rem' }}>
          <p style={{ margin: 0 }}>© Haven Hub - All rights reserved</p>
          <div style={socialLinksStyle}>
            <a href="/" style={{ color: 'white', margin: '0 0.5rem' }}>
              <FaFacebookF />
            </a>
            <a href="/" style={{ color: 'white', margin: '0 0.5rem' }}>
              <FaTwitter />
            </a>
            <a href="/" style={{ color: 'white', margin: '0 0.5rem' }}>
              <FaWhatsapp />
            </a>
            <a href="/" style={{ color: 'white', margin: '0 0.5rem' }}>
              <FaLinkedinIn />
            </a>
            <a href="/" style={{ color: 'white', margin: '0 0.5rem' }}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
