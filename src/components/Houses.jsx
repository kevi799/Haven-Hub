import React, { useState, useEffect } from "react";

function Houses() {
    const [apartments, setApartments] = useState([]);
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state to manage the data fetch state
    const [error, setError] = useState(null); // Added error state for better error handling

    useEffect(() => {
        // Fetching data from the server
        fetch("http://localhost:3000/apartments")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data); // Log the data to verify it
                const apartmentList = data.filter(item => item.type === "apartment");
                const houseList = data.filter(item => item.type === "house");
                setApartments(apartmentList);
                setHouses(houseList);
                setLoading(false); // Set loading to false once the data is fetched
            })
            .catch(error => {
                console.error("Error fetching apartments and houses:", error);
                setError(error); // Set error state if there is an issue with the fetch
                setLoading(false); // Set loading to false if fetch fails
            });
    }, []);

    const handleStatusChange = (id, status, type) => {
        fetch(`http://localhost:3000/${type}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        })
        .then(response => response.json())
        .then(() => {
            if (type === "apartments") {
                setApartments(apartments.map(item =>
                    item.id === id ? { ...item, status } : item
                ));
            } else {
                setHouses(houses.map(item =>
                    item.id === id ? { ...item, status } : item
                ));
            }
        })
        .catch(error => {
            console.error("Error updating status:", error);
        });
    };

    const handleDelete = (id, type) => {
        fetch(`http://localhost:3000/${type}/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            if (type === "apartments") {
                setApartments(apartments.filter(item => item.id !== id));
            } else {
                setHouses(houses.filter(item => item.id !== id));
            }
        })
        .catch(error => {
            console.error("Error deleting item:", error);
        });
    };

    // Handling loading and error states
    if (loading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>There was an error fetching the data: {error.message}</p>;
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#333" }}>Available Listings</h1>

            <div>
                <h2 style={{ color: "#333" }}>Apartments</h2>
                {apartments.length === 0 ? (
                    <p>No apartments available</p>
                ) : (
                    apartments.map(apartment => (
                        <div key={apartment.id} style={cardStyle}>
                            <h3 style={{ color: "#555" }}>{apartment.title}</h3>
                            <p><strong>Location:</strong> {apartment.location}</p>
                            <p><strong>Price:</strong> ${apartment.price}</p>
                            <p style={{ color: apartment.status === "bought" ? "green" : "red" }}>
                                <strong>Status:</strong> {apartment.status}
                            </p>
                            <div style={buttonContainerStyle}>
                                <button onClick={() => handleStatusChange(apartment.id, "bought", "apartments")} style={buttonStyle}>Mark as Bought</button>
                                <button onClick={() => handleStatusChange(apartment.id, "on sale", "apartments")} style={buttonStyle}>Mark as On Sale</button>
                                <button onClick={() => handleDelete(apartment.id, "apartments")} style={deleteButtonStyle}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div>
                <h2 style={{ color: "#333" }}>Houses</h2>
                {houses.length === 0 ? (
                    <p>No houses available</p>
                ) : (
                    houses.map(house => (
                        <div key={house.id} style={cardStyle}>
                            <h3 style={{ color: "#555" }}>{house.title}</h3>
                            <p><strong>Location:</strong> {house.location}</p>
                            <p><strong>Price:</strong> ${house.price}</p>
                            <p style={{ color: house.status === "bought" ? "green" : "red" }}>
                                <strong>Status:</strong> {house.status}
                            </p>
                            <div style={buttonContainerStyle}>
                                <button onClick={() => handleStatusChange(house.id, "bought", "houses")} style={buttonStyle}>Mark as Bought</button>
                                <button onClick={() => handleStatusChange(house.id, "on sale", "houses")} style={buttonStyle}>Mark as On Sale</button>
                                <button onClick={() => handleDelete(house.id, "houses")} style={deleteButtonStyle}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

// Styles
const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};

const buttonContainerStyle = {
    display: "flex",
    gap: "10px"
};

const buttonStyle = {
    padding: "8px 12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
};

const deleteButtonStyle = {
    padding: "8px 12px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
};

export default Houses;
