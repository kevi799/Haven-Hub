import React from "react";

function HouseCard({ id, title, location, price, status, onStatusChange, onDelete, images }) {
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this house?")) {
            onDelete();
        }
    };

    return (
        <div className="house-card" style={styles.card}>
            <h3>{title}</h3>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Status:</strong> {status}</p>

            <div style={styles.imageContainer}>
                {images && images.length > 0 ? (
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${title} - image ${index + 1}`}
                            style={styles.image}
                        />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>

            <div style={styles.buttonContainer}>
                <button
                    onClick={() => onStatusChange(id, status === "available" ? "sold" : "available")}
                    style={styles.statusButton}
                >
                    {status === "available" ? "Mark as Sold" : "Mark as Available"}
                </button>
                <button
                    onClick={handleDelete}
                    style={styles.deleteButton}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    imageContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "16px",
    },
    image: {
        width: "100px",
        height: "100px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
    },
    statusButton: {
        padding: "8px 16px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    deleteButton: {
        padding: "8px 16px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    }
};

export default HouseCard;
