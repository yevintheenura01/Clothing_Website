import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaHeart } from 'react-icons/fa';

const Trend = ({ favorites, setFavorites }) => {
    const [trendData, setTrendData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrends = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setTrendData(response.data);
            } catch (error) {
                console.error('Error fetching trend data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrends();
    }, []);

    const handleFavorite = async (item) => {
        const isFavorited = favorites.some(fav => fav.productId === item.id); 

        if (!isFavorited) {
            try {
                await axios.post('http://localhost:5000/favorites', {
                    userId: 'user-id', // Replace with actual user ID
                    productId: item.id,
                    title: item.title,
                    img: item.trendImage,
                    price: item.price
                });
                setFavorites((prevFavorites) => [...prevFavorites, item]);
                navigate('/Favourite');
            } catch (error) {
                console.error('Error adding favorite:', error);
            }
        } else {
            console.log('Already in favorites');
        }
    };

    const handleOrderNow = (item) => {
        navigate('/ProductDetails', { state: { item } });
    };

    return (
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto py-12 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-2" data-aos="fade-up">Trending Products</h2>
                    <p className="text-gray-500 text-lg" data-aos="fade-up" data-aos-delay="100">
                        Check out what's trending now!
                    </p>
                </div>
                {loading ? (
                    <p>Loading trending products...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
                        {trendData.map((item) => (
                            <div
                                key={item.id}
                                data-aos="zoom-in"
                                className="bg-white dark:bg-gray-200 hover:bg-black/80 relative shadow-xl transition duration-300 group max-w-[300px] rounded-lg overflow-hidden"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={`http://localhost:5000/uploads/${item.trendImage}`} // Ensure a leading slash
                                        alt={item.title}
                                        className="max-w-full h-auto block mx-auto group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(4)].map((_, index) => <FaStar key={index} className="text-yellow-500" />)}
                                        </div>
                                        <FaHeart
                                            className={`cursor-pointer ${favorites.some(fav => fav.productId === item.id) ? 'text-red-500' : 'text-gray-400'}`}
                                            onClick={() => handleFavorite(item)}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-gray-500 group-hover:text-white transition duration-300 text-sm mb-2">
                                        {item.description}
                                    </p>
                                    <p className="text-lg font-semibold mb-4">{item.price}</p>
                                    <button
                                        className="bg-primary hover:scale-105 transition-all duration-300 text-white py-2 px-6 rounded-full group-hover:bg-white group-hover:text-primary"
                                        onClick={() => handleOrderNow(item)}
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trend;
