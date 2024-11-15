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

    return (
        <div>
            {houses.map((house) => (
                <Housecard
                    key={house.id}
                    {...house}
                    onStatusChange={handleStatusChange}
                    onDelete={() => handleDelete(house.id)}
                />
            ))}
        </div>
    );
}

export default Houses;
