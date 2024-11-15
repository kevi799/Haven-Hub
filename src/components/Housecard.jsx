import React from 'react';

function Housecard({ id, title, description, status, images, onStatusChange, onDelete }) {
    const imageUrls = Array.isArray(images) ? images : images.exterior;

    return (
        <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', padding: '15px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease-in-out' }}>            <img src={imageUrls[0]?.url} alt={imageUrls[0]?.alt || 'House'} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <h3 style={{ marginTop: '10px', fontSize: '1.2rem', fontWeight: '600' }}>{title}</h3>
            <p style={{ margin: '10px 0', fontSize: '1rem', color: '#555' }}>{description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <button
                    style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                    onClick={() => onStatusChange(id, status === 'available' ? 'sold' : 'available')}
                >
                    {status === 'available' ? 'Mark as Sold' : 'Mark as Available'}
                </button>
                <button
                    style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c82333')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc3545')}
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Housecard;