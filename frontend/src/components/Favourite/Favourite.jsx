import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa'; // Import an icon for removing favorites

const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    const userId = 'user-id'; // Replace with actual user ID if necessary

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/favorites?userId=${userId}`); // Fetch favorites for the specific user
                setFavorites(response.data);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, []);

    const handleRemoveFavorite = async (itemId) => {
        try {
            await axios.delete(`http://localhost:5000/favorites/${itemId}`); // Adjust endpoint as necessary
            setFavorites((prevFavorites) => prevFavorites.filter((item) => item._id !== itemId)); // Update local state
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };

    return (
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-primary">Your Favorites</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {favorites.length > 0 ? (
                        favorites.map((item) => (
                            <div key={item._id} className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105">
                                <img
                                    src={`http://localhost:5000/uploads/${item.selectedImage}`} // Ensure the image path is correct
                                    alt={item.title}
                                    className="w-full h-auto mb-4 rounded-t-lg"
                                />
                                <h3 className="text-xl font-bold text-center">{item.title}</h3>
                                <p className="text-gray-500 text-center mb-2">{item.description}</p>
                                <p className="text-lg font-semibold text-center mb-4">{item.price}</p>
                                <button 
                                    onClick={() => handleRemoveFavorite(item._id)}
                                    className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 w-full"
                                >
                                    <FaTrashAlt className="mr-2" />
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No favorites found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Favorite;
