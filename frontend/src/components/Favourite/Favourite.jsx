import React, { useEffect } from 'react';
import { FaTimes, FaHeartBroken } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const Favourite = ({ userId, favorites, setFavorites }) => {
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/favorites/${userId}`);
                setFavorites(response.data);
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, [userId, setFavorites]);

    const handleRemoveFavorite = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/favorites/${productId}`);
            const updatedFavorites = favorites.filter((product) => product.productId !== productId);
            setFavorites(updatedFavorites);
            toast.success('Product removed from favorites!');
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/150'; // Replace with a fallback image URL
    };

    return (
        <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mt-10">Favourite Products</h1>
            {favorites.length === 0 ? (
                <div className="mt-10">
                    <FaHeartBroken size={64} className="text-gray-400 mx-auto" />
                    <p className="text-gray-600 mt-4">No favorite products yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {favorites.map((product) => (
                        <div key={product.productId} className="space-y-3">
                            <div className="relative">
                                <img
                                    src={product.img}
                                    alt={product.title || 'Product image'}
                                    className="h-[220px] w-[150px] object-cover rounded-md"
                                    onError={handleImageError}
                                />
                                <button
                                    onClick={() => handleRemoveFavorite(product.productId)}
                                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-1 hover:bg-red-600"
                                    aria-label="Remove from Favorites"
                                >
                                    <FaTimes size={14} />
                                </button>
                            </div>
                            <div>
                                <h3 className="font-semibold">{product.title || 'Unknown Product'}</h3>
                                <p className="text-sm text-gray-600">{product.color || 'No color specified'}</p>
                                <div className="flex items-center gap-1">
                                    <span>{product.rating ? `${product.rating} ⭐` : 'No rating'}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favourite;
