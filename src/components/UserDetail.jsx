import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
    const { id } = useParams();
    const [house, setHouse] = useState(null);

    useEffect(() => {
        const fetchHouseDetails = async () => {
            try {
                const response = await fetch(`https://haven-hub.onrender.com/houses/${id}`);
                const data = await response.json();
                setHouse(data);
            } catch (error) {
                console.error("Error fetching house details:", error);
            }
        };

        fetchHouseDetails();
    }, [id]);

    if (!house) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ color: "black" }}>{house.title}</h2>
            <p style={{ color: "black" }}><strong>Location:</strong> {house.location}</p>
            <p style={{ color: "black" }}><strong>Price:</strong> ${house.price}</p>
            <p style={{ color: "black" }}><strong>Status:</strong> {house.status}</p>
            <div>
                <h3 style={{ color: "black" }}>Images:</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                    {house.images && house.images.length > 0 ? (
                        house.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`House image ${index + 1}`}
                                style={{
                                    width: "200px",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />
                        ))
                    ) : (
                        <p style={{ color: "black" }}>No images available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
