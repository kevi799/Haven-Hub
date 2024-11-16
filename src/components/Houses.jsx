import React, { useState, useEffect } from "react";
import Housecard from './Housecard';

function Houses() {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/houses")
            .then(response => response.json())
            .then(data => {
                setHouses(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching houses:", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleStatusChange = (id, status) => {
        fetch(`http://localhost:3000/houses/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        })
        .then(response => response.json())
        .then(() => {
            setHouses(houses.map(house =>
                house.id === id ? { ...house, status } : house
            ));
        })
        .catch(error => {
            console.error("Error updating status:", error);
        });
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/houses/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setHouses(houses.filter(house => house.id !== id));
        })
        .catch(error => {
            console.error("Error deleting house:", error);
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredHouses = houses.filter(house =>
        house.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p className="text-center text-gray-600">Loading data...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600">There was an error fetching the data: {error.message}</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Available Houses</h1>

                <div className="mb-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search houses by title or location"
                        className="px-4 py-2 w-full border border-gray-300 rounded"
                    />
                </div>

                {houses.length === 0 ? (
                    <p className="text-center text-gray-600">No houses available</p>
                ) : (
                    <div className="flex flex-wrap gap-8 justify-center">
                        {filteredHouses.map(house => (
                            <Housecard
                                key={house.id}
                                house={house}
                                onStatusChange={handleStatusChange}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Houses;
