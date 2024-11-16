import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
    const [houses, setHouses] = useState([]);
    const [clickedHouseIds, setClickedHouseIds] = useState([]); // Array to track which houses' details are visible

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await fetch("http://localhost:3000/houses");
                const data = await response.json();
                setHouses(data);
                setClickedHouseIds(new Array(data.length).fill(false)); // Initialize the visibility array
            } catch (error) {
                console.error("Error fetching houses:", error);
            }
        };

        fetchHouses();
    }, []);

    const handleImageClick = (index) => {
        // Toggle the details visibility for the clicked house
        setClickedHouseIds((prev) => {
            const newClickedHouseIds = [...prev];
            newClickedHouseIds[index] = !newClickedHouseIds[index]; // Toggle the specific house's visibility
            return newClickedHouseIds;
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Houses</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {houses.map((house, index) => (
                    <div
                        key={house.id}
                        style={{
                            width: "200px",
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <div onClick={() => handleImageClick(index)}>
                            {house.images && house.images.length > 0 ? (
                                <img
                                    src={house.images[0]}
                                    alt={house.title}
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                    }}
                                />
                            ) : (
                                <div>No image available</div>
                            )}
                        </div>

                        {clickedHouseIds[index] && ( // Check the visibility for this specific house
                            <div style={{ marginTop: "10px" }}>
                                <h3>{house.title}</h3>
                                <p><strong>Location:</strong> {house.location}</p>
                                <p><strong>Price:</strong> ${house.price}</p>
                                <p><strong>Status:</strong> {house.status}</p>
                                <Link to={`/houses/${house.id}`} style={{ color: "#4CAF50", textDecoration: "none" }}>
                                    View Full Details
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;