import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
    const [houses, setHouses] = useState([]);
    const [clickedHouseIds, setClickedHouseIds] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await fetch("https://haven-hub.onrender.com/houses");
                const data = await response.json();
                setHouses(data);
                setClickedHouseIds(new Array(data.length).fill(false));
            } catch (error) {
                console.error("Error fetching houses:", error);
            }
        };

        fetchHouses();
    }, []);

    const handleImageClick = (index) => {
        setClickedHouseIds((prev) => {
            const newClickedHouseIds = [...prev];
            newClickedHouseIds[index] = !newClickedHouseIds[index];
            return newClickedHouseIds;
        });
    };

    const handleAddToCart = (house) => {
        if (!cart.some((item) => item.id === house.id)) {
            setCart((prevCart) => [...prevCart, house]);
        }
    };

    const filteredHouses = houses.filter(
        (house) =>
            house.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            house.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            style={{
                backgroundColor: "#1F2937",
                color: "white",
                padding: "50px 20px",
                minHeight: "100vh",
            }}
        >
            <header style={{ display: "flex", alignItems: "center", marginBottom: "20px", textAlign: "center" }}>
                <h1 style={{ color: "Gold" }}>Housing App</h1>
            </header>

            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="Search houses by title or location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "10px",
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                    }}
                />
            </div>

            <h2>Available Houses</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                {filteredHouses.map((house, index) => (
                    <div
                        key={house.id}
                        style={{
                            width: "200px",
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                            backgroundColor: "#f9f9f9",
                            padding: "10px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            color: "black",
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

                        {clickedHouseIds[index] && (
                            <div style={{ marginTop: "10px" }}>
                                <h3>{house.title}</h3>
                                <p>
                                    <strong>Location:</strong> {house.location}
                                </p>
                                <p>
                                    <strong>Price:</strong> ${house.price}
                                </p>
                                <p>
                                    <strong>Status:</strong> {house.status}
                                </p>
                                <button
                                    onClick={() => handleAddToCart(house)}
                                    style={{
                                        backgroundColor: "#4CAF50",
                                        color: "white",
                                        padding: "8px 12px",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Add to Cart
                                </button>
                                <Link
                                    to={`/houses/${house.id}`}
                                    style={{
                                        display: "block",
                                        marginTop: "10px",
                                        color: "#4CAF50",
                                        textDecoration: "none",
                                    }}
                                >
                                    View Full Details
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "40px" }}>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                style={{
                                    padding: "10px",
                                    marginBottom: "10px",
                                    backgroundColor: "#f1f1f1",
                                    borderRadius: "8px",
                                    color: "black",
                                }}
                            >
                                <h3>{item.title}</h3>
                                <p>
                                    <strong>Location:</strong> {item.location}
                                </p>
                                <p>
                                    <strong>Price:</strong> ${item.price}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default User;
