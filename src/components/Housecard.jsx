import React from "react";

function HouseCard({ house, onStatusChange, onDelete }) {
    const { id, title, location, price, status, images } = house;

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this house?")) {
            onDelete(id);
        }
    };

    return (
        <div className="border rounded-lg shadow-md p-6 m-4 text-center bg-white">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {location}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Price:</strong> ${price}</p>
            <p className={`text-sm font-medium mb-4 ${status === "available" ? "text-green-600" : "text-red-600"}`}>
                <strong>Status:</strong> {status}
            </p>

            {/* Display Images */}
            <div className="flex flex-wrap gap-4 justify-center">
                {images && images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                            <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
                                <img
                                    src={image}
                                    alt={`${title} - image ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <div className="p-2 text-center">
                                    <p className="text-sm text-gray-500">Image {index + 1}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No images available</p>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={() => onStatusChange(id, status === "available" ? "sold" : "available")}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                    {status === "available" ? "Mark as Sold" : "Mark as Available"}
                </button>
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default HouseCard;