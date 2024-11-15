import React, { useState, useEffect } from 'react';
import Housecard from './Housecard';

function Houses() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/houses')
            .then((response) => response.json())
            .then((data) => setHouses(data))
            .catch((error) => console.error('Error fetching houses:', error));
    }, []);

    const handleStatusChange = (id, status) => {
        fetch(`http://localhost:3000/houses/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status }),
        })
            .then((response) => response.json())
            .then((updatedHouse) => {
                setHouses((prevHouses) =>
                    prevHouses.map((house) => (house.id === id ? updatedHouse : house))
                );
            })
            .catch((error) => console.error('Error updating house:', error));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/houses/${id}`, { method: 'DELETE' })
            .then(() => {
                setHouses((prevHouses) => prevHouses.filter((house) => house.id !== id));
            })
            .catch((error) => console.error('Error deleting house:', error));
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px',
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
    };

    const cardHoverStyle = {
        transform: 'translateY(-5px)',
    };

    const imgStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    };

    const titleStyle = {
        marginTop: '10px',
        fontSize: '1.2rem',
        fontWeight: '600',
    };

    const descStyle = {
        margin: '10px 0',
        fontSize: '1rem',
        color: '#555',
    };

    const buttonStyle = {
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    return (
        <div style={gridStyle}>
            {houses.map((house) => (
                <div
                    key={house.id}
                    style={cardStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
                >
                    <Housecard
                        {...house}
                        onStatusChange={handleStatusChange}
                        onDelete={() => handleDelete(house.id)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Houses;
