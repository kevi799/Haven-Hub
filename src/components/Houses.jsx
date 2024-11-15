import React, { useState, useEffect } from "react";
import Housecard from "./Housecard";
import AddHouse from "./AddHouse";

function Houses() {
    const [houses, setHouses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");  // State for search query
    const [showForm, setShowForm] = useState(false);  // State to toggle the form visibility

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await fetch("http://localhost:3000/houses");
                const data = await response.json();
                setHouses(data);
            } catch (error) {
                console.error("Error fetching houses:", error);
            }
        };

        fetchHouses();
    }, []);

    const handleAddHouse = (newHouse) => {
        setHouses((prevHouses) => [...prevHouses, newHouse]);
    };

    const handleStatusChange = (id, status) => {
        fetch(`http://localhost:3000/houses/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((response) => response.json())
            .then((updatedHouse) => {
                setHouses((prevHouses) =>
                    prevHouses.map((house) => (house.id === id ? updatedHouse : house))
                );
            })
            .catch((error) => console.error("Error updating house:", error));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/houses/${id}`, { method: "DELETE" })
            .then(() => {
                setHouses((prevHouses) => prevHouses.filter((house) => house.id !== id));
            })
            .catch((error) => console.error("Error deleting house:", error));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter houses based on the search query
    const filteredHouses = houses.filter((house) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            house.title.toLowerCase().includes(lowerCaseQuery) ||
            house.location.toLowerCase().includes(lowerCaseQuery) ||
            house.price.toString().includes(lowerCaseQuery)
        );
    });

    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Houses</h2>

            {/* Search Bar */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search by title, location, or price"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{
                        padding: "8px",
                        fontSize: "16px",
                        width: "100%",
                        maxWidth: "400px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
            </div>

            {/* Display filtered houses */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
                {filteredHouses.length > 0 ? (
                    filteredHouses.map((house) => (
                        <Housecard
                            key={house.id}
                            id={house.id}
                            title={house.title}
                            location={house.location}
                            price={house.price}
                            status={house.status}
                            images={house.images}
                            onStatusChange={() => handleStatusChange(house.id, house.status === "available" ? "sold" : "available")}
                            onDelete={() => handleDelete(house.id)}
                        />
                    ))
                ) : (
                    <p>No houses found.</p>
                )}
            </div>

            {/* Button to toggle the form */}
            <button
                onClick={() => setShowForm(!showForm)}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
            >
                {showForm ? "Cancel" : "Add a New House"}
            </button>

            {/* Conditionally render the AddHouse form */}
            {showForm && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Add a New House</h3>
                    <AddHouse onAdd={handleAddHouse} />
                </div>
            )}
        </div>
    );
}

export default Houses;
