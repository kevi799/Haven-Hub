import React, { useState } from "react";

function AddHouse({ onAdd }) {
    const [newHouse, setNewHouse] = useState({
        title: "", 
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

    return (
        <form onSubmit={handleSubmit} className="m-5 max-w-md p-5 border border-gray-300 rounded-lg bg-black text-white">
            <div>
                <label className="block font-bold mb-2">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={newHouse.title}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-sm mb-4"
                />
            </div>
            <div>
                <label className="block font-bold mb-2">Location:</label>
                <input
                    type="text"
                    name="location"
                    value={newHouse.location}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-sm mb-4"
                />
            </div>
            <div>
                <label className="block font-bold mb-2">Price:</label>
                <input
                    type="number"
                    name="price"
                    value={newHouse.price}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-sm mb-4"
                />
            </div>
            <div>
                <label className="block font-bold mb-2">Status:</label>
                <select
                    name="status"
                    value={newHouse.status}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md text-sm mb-4"
                >
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                </select>
            </div>
            <div>
                <label className="block font-bold mb-2">Images:</label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-3"
                />
            </div>
            <button
                type="submit"
                className="w-full p-3 bg-green-500 text-white rounded-md text-lg cursor-pointer transition-all duration-300 hover:bg-green-600"
            >
                Add House
            </button>
        </form>
    );
}

export default AddHouse;
