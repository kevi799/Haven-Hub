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
        return <p style={{ textAlign: "center", color: "gray" }}>Loading data...</p>;
    }

    if (error) {
        return <p style={{ textAlign: "center", color: "red" }}>There was an error fetching the data: {error.message}</p>;
    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#333", marginBottom: "1.5rem" }}>
                    Available Houses
                </h1>

                <div style={{ marginBottom: "1.5rem" }}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search houses by title or location"
                        style={{ padding: "0.5rem", width: "100%", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>

                {houses.length === 0 ? (
                    <p style={{ textAlign: "center", color: "gray" }}>No houses available</p>
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
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
