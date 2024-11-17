import React from "react";

function HouseCard({ house, onStatusChange, onDelete }) {
    const { id, title, location, price, status, images } = house;

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this house?")) {
            onDelete(id);
        }
    };

    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "1rem",
            margin: "1rem",
            textAlign: "center",
            backgroundColor: "white",
            width: "300px"
        }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem" }}>{title}</h3>
            <p style={{ fontSize: "0.9rem", color: "gray", marginBottom: "0.5rem" }}>
                <strong>Location:</strong> {location}
            </p>
            <p style={{ fontSize: "0.9rem", color: "gray", marginBottom: "0.5rem" }}>
                <strong>Price:</strong> ${price}
            </p>
            <p style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                marginBottom: "1rem",
                color: status === "available" ? "green" : "red"
            }}>
                <strong>Status:</strong> {status}
            </p>

            <div style={{ marginBottom: "1rem" }}>
                {images && images.length > 0 ? (
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${title} - image ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "4px",
                                marginBottom: "0.5rem"
                            }}
                        />
                    ))
                ) : (
                    <p style={{ fontSize: "0.8rem", color: "gray" }}>No images available</p>
                )}
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <button
                    onClick={() => onStatusChange(id, status === "available" ? "sold" : "available")}
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    {status === "available" ? "Mark as Sold" : "Mark as Available"}
                </button>
                <button
                    onClick={handleDelete}
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "4px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default HouseCard;
