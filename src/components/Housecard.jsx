import React from 'react';

function HouseCard({ id, title, location, price, status, onStatusChange, onDelete, images }) {
  const houseCardStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '15px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    alignItems: 'center', // Ensures all content is aligned vertically
  };

  const houseCardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  };

  const imgStyle = {
    width: '200px', // Adjust width for image to fit row layout
    height: 'auto',
    borderRadius: '5px',
    marginRight: '20px', // Space between image and text
    objectFit: 'cover',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const textStyle = {
    flex: 1, // Allow text section to take remaining space
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px', // Space between text and buttons
  };

  const buttonStyle = {
    padding: '10px 15px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const markAsSoldButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4caf50',
    color: 'white',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
  };

  return (
    <div
      className="house-card"
      style={houseCardStyle}
      onMouseOver={(e) => (e.currentTarget.style = { ...houseCardStyle, ...houseCardHoverStyle })}
      onMouseOut={(e) => (e.currentTarget.style = houseCardStyle)}
    >
      <img src={images} alt="" style={imgStyle} />
      <div style={textStyle}>
        <h3>{title}</h3>
        <p>Location: {location}</p>
        <p>Price: ${price}</p>
        <p>Status: {status}</p>
      </div>
      <div style={buttonContainerStyle}>
        <button
          style={markAsSoldButtonStyle}
          onClick={() => onStatusChange(id, status === 'available' ? 'sold' : 'available')}
        >
          {status === 'available' ? 'Mark as Sold' : 'Mark as Available'}
        </button>
        <button style={deleteButtonStyle} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default HouseCard;
