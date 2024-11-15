import React, { useState, useEffect } from "react";
import Housecard from "./Housecard";
import AddHouse from "./AddHouse";

function Houses() {
    const [houses, setHouses] = useState([]);

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

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
    };

    return (
        <>
        <div style={{ padding: "20px" }}>
            <h2>Available Houses</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {houses.map((house) => (
                    <Housecard
                        key={house.id}
                        id={house.id}
                        title={house.title}
                        location={house.location}
                        price={house.price}
                        status={house.status}
                        images={house.images}
                        onStatusChange={() => {}}
                        onDelete={() => {}}
                    />
                ))}
            </div>
           
            <div style={{ marginTop: "40px" }}>
                <h3>Add a New House</h3>
                <AddHouse onAdd={handleAddHouse} />
            </div>
        </div>
        </>
    );
}

export default Houses;
