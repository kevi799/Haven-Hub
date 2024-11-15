import React from "react";

function HouseCard({ id, title, location, price, status, onStatusChange, onDelete }) {
    return (
        <div className="house-card">
            <h3>{title}</h3>
            <p>Location: {location}</p>
            <p>Price: ${price}</p>
            <p>Status: {status}</p>
            <button onClick={() => onStatusChange(id, status === "available" ? "sold" : "available", "houses")}>
                {status === "available" ? "Mark as Sold" : "Mark as Available"}
            </button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default HouseCard;
