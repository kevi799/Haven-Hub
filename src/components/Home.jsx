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
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds a shadow for better visibility
    margin: '0',
    color: '#ffffff', // ensures title is white
  };

  const subtitleStyle = {
    fontSize: '1.5rem', 
    marginTop: '15px',
    color: '#f5f5f5', // a softer color for the subtitle
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6',
  };

  return (
    <div>
      {/* Home Section */}
      <div style={containerStyle}>
        <h1 style={titleStyle}>Haven Hub: Redefining Real Estate Online</h1>
        <p style={subtitleStyle}>
          Explore Haven Hub's mission, values, and innovative solutions for all your online real estate needs.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="fixed bottom-0 w-full bg-black bg-opacity-50 text-white py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          
          <div className="text-left">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex items-center mb-1">
              <span className="mr-2">📍</span>
              <span>The Nest Business Park</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="mr-2">📞</span>
              <span>0745712570</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              <span>havenhub.co.ke</span>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-semibold">Related Links</h3>
            <ul className="list-none p-0">
              {["Find your home", "Search", "All Properties", "Recommended for you", "About Us", "Contact Us"].map((link, index) => (
                <li key={index} className="mb-1">
                  <Link to="/" className="text-white no-underline hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-200 text-gray-800 p-4 rounded text-center">
            <h4 className="mb-1">Contact Us:</h4>
            <p className="m-0 text-lg font-bold">0740 712 579</p>
          </div>
        </div>

        <div className="mt-4 text-center text-sm">
          Achieving your home ownership dream is easier when you work with Haven Hub.
        </div>

        <div className="mt-6 text-center text-xs bg-[#003366] py-2">
          <p className="m-0">© Haven Hub - All rights reserved</p>
          <div className="mt-2 flex justify-center">
            <a href="/" className="text-white mx-2">
              <FaFacebookF />
            </a>
            <a href="/" className="text-white mx-2">
              <FaTwitter />
            </a>
            <a href="/" className="text-white mx-2">
              <FaWhatsapp />
            </a>
            <a href="/" className="text-white mx-2">
              <FaLinkedinIn />
            </a>
            <a href="/" className="text-white mx-2">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
