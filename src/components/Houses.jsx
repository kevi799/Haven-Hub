import React, { useState, useEffect } from "react";
import Housecard from './Housecard';

function Houses() {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [newHouse, setNewHouse] = useState({
        title: '',
        location: '',
        price: '',
        status: '',
        image: ''
    });

    const [imageFile, setImageFile] = useState(null); // For storing the selected image

    useEffect(() => {
        fetch("https://haven-hub.onrender.com/houses")
            .then(response => response.json())
            .then(data => {
                setHouses(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching houses:", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleStatusChange = (id, status) => {
        fetch(`https://haven-hub.onrender.com/houses/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        })
        .then(response => response.json())
        .then(() => {
            setHouses(houses.map(house =>
                house.id === id ? { ...house, status } : house
            ));
        })
        .catch(error => {
            console.error("Error updating status:", error);
        });
    };

    const handleDelete = (id) => {
        fetch(`https://haven-hub.onrender.com/houses/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setHouses(houses.filter(house => house.id !== id));
        })
        .catch(error => {
            console.error("Error deleting house:", error);
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewHouse({ ...newHouse, [name]: value });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]); // Store the file for upload
    };

    const handleAddHouse = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = '';
            if (imageFile) {
                // Upload image to a file server or API
                const formData = new FormData();
                formData.append('image', imageFile);

                const imageResponse = await fetch("https://api.your-image-upload.com/upload", {
                    method: "POST",
                    body: formData
                });

                const imageData = await imageResponse.json();
                imageUrl = imageData.url; // Assume the response contains the uploaded image URL
            }

            const houseData = { ...newHouse, image: imageUrl };

            const response = await fetch("https://haven-hub.onrender.com/houses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(houseData)
            });

            const createdHouse = await response.json();
            setHouses([...houses, createdHouse]); // Add the new house to the list
            setNewHouse({ title: '', location: '', price: '', status: '', image: '' }); // Clear the form
            setImageFile(null); // Clear the selected image
        } catch (error) {
            console.error("Error adding house:", error);
        }
    };

    const filteredHouses = houses.filter(house =>
        house.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p style={{ textAlign: "center", color: "gray" }}>Loading data...</p>;
    }

    if (error) {
        return <p style={{ textAlign: "center", color: "red" }}>There was an error fetching the data: {error.message}</p>;
    }

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#1F2937", padding: "2rem" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "Gold", marginBottom: "1.5rem" }}>
                    Available Houses
                </h1>

                <div style={{ marginBottom: "1.5rem" }}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search houses by title or location"
                        style={{ padding: "0.5rem", width: "100%", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>

                {houses.length === 0 ? (
                    <p style={{ textAlign: "center", color: "gray" }}>No houses available</p>
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                        {filteredHouses.map(house => (
                            <Housecard
                                key={house.id}
                                house={house}
                                onStatusChange={handleStatusChange}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}

        
                <form onSubmit={handleAddHouse} style={{ marginTop: "2rem", backgroundColor: "black", padding: "1rem", borderRadius: "8px", maxWidth:"500px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "white" }}>Add a New House</h2>
                    <input
                        type="text"
                        name="title"
                        value={newHouse.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        required
                        style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem", borderRadius: "4px" }}
                    />
                    <input
                        type="text"
                        name="location"
                        value={newHouse.location}
                        onChange={handleInputChange}
                        placeholder="Location"
                        required
                        style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem", borderRadius: "4px" }}
                    />
                    <input
                        type="number"
                        name="price"
                        value={newHouse.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        required
                        style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem", borderRadius: "4px" }}
                    />
                    <input
                        type="text"
                        name="status"
                        value={newHouse.status}
                        onChange={handleInputChange}
                        placeholder="Status (e.g., Available, Sold)"
                        required
                        style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem", borderRadius: "4px" }}
                    />
                    <input
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: "block", marginBottom: "1rem" }}
                    />
                    <button
                        type="submit"
                        style={{
                            display: "block",
                            width: "100%",
                            padding: "0.75rem",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Add House
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Houses;
