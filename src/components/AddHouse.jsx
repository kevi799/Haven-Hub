import React, { useState } from "react";

function AddHouse({ onAdd }) {
    const [newHouse, setNewHouse] = useState({
        title: "",
        location: "",
        price: "",
        status: "available",
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewHouse((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const images = Array.from(files).map((file) => URL.createObjectURL(file));
        setNewHouse((prev) => ({
            ...prev,
            images,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/houses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newHouse),
        })
            .then((response) => response.json())
            .then((addedHouse) => {
                onAdd(addedHouse);
                setNewHouse({
                    title: "",
                    location: "",
                    price: "",
                    status: "available",
                    images: [],
                });
            })
            .catch((error) => console.error("Error adding house:", error));
    };

    const formStyle = {
        margin: "20px",
        maxWidth: "500px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "black",
        color: "white",
    };

    const inputStyle = {
        width: "100%",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "14px",
        marginBottom: "15px",
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const buttonHoverStyle = {
        backgroundColor: "#45a049",
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={newHouse.title}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
            </div>
            <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={newHouse.location}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
            </div>
            <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={newHouse.price}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
            </div>
            <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Status:</label>
                <select
                    name="status"
                    value={newHouse.status}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                >
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                </select>
            </div>
            <div>
                <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Images:</label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ marginTop: "10px" }}
                />
            </div>
            <button
                type="submit"
                style={buttonStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            >
                Add House
            </button>
        </form>
    );
}

export default AddHouse;
