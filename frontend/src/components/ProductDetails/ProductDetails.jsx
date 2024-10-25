import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import the heart icons

const ProductDetails = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Get the passed item data

  const [selectedImage, setSelectedImage] = useState(item?.img); // Initialize with the main image
  const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size
  const [quantity, setQuantity] = useState(1); // State to track the quantity
  const [isFavorite, setIsFavorite] = useState(false); // Track if the item is favorited

  // Function to handle the Add Cart button click (single click to add, double-click to remove)
  const handleAddToCart = async (e) => {
    if (e.detail === 2) {
      handleRemoveFromCart(); // Double-click detected
      return;
    }

    if (!selectedSize) {
      alert('Please select a size before adding to the cart.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/cart', {
        _id: item._id,
        title: item?.title,
        price: item?.price,
        description: item?.description,
        selectedImage,
        selectedSize,
        quantity,
      });

      console.log('Item added to cart:', response.data);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  // Function to handle removing from the cart
  const handleRemoveFromCart = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/cart/${item._id}`, {
        data: { selectedSize },
      });

      console.log('Item removed from cart:', response.data);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Function to handle the Buy Now button click
  const handleBuyNow = async () => {
    if (!selectedSize) {
      alert('Please select a size before buying.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/cart', {
        _id: item._id,
        title: item?.title,
        price: item?.price,
        description: item?.description,
        selectedImage,
        selectedSize,
        quantity,
      });

      console.log('Item purchased:', response.data);
    } catch (error) {
      console.error('Error purchasing item:', error);
    }
  };

  // Function to handle adding to favorites
  const handleFavoriteClick = async () => {
    setIsFavorite(!isFavorite); // Toggle the heart icon

    try {
      const response = await axios.post('http://localhost:5000/favorites', {
        _id: item._id,
        title: item?.title,
        price: item?.price,
        description: item?.description,
        selectedImage,
      });

      console.log('Item added to favorites:', response.data);
    } catch (error) {
      console.error('Error adding item to favorites:', error);
    }
  };

  // Function to handle quantity change
  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 flex flex-row items-start">
        {/* Left Section - Main Image and Thumbnails */}
        <div className="flex">
          <div className="relative" style={{ height: '500px', width: '350px' }}>
            {/* Main Image */}
            <img
              src={`http://localhost:5000/uploads/${selectedImage}`}
              alt={item?.title || 'Product Image'}
              className="rounded-lg shadow-lg border-4 border-gray-300 object-cover"
              style={{ height: '100%', width: '100%' }}
            />

            {/* Thumbnails */}
            {item?.additionalImages && (
              <div className="absolute right-[-90px] top-0 h-full flex flex-col space-y-2">
                {item.additionalImages.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000/uploads/${img}`}
                    alt={`${item.title} additional view ${index + 1}`}
                    className="rounded-lg shadow-md border-2 border-gray-300 cursor-pointer transition-transform transform hover:scale-110 duration-300 ease-in-out"
                    style={{ width: '50px', height: '65px' }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex flex-col ml-60 w-1/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{item?.title || "Draped Velvet Midi Dress"}</h1>
          <p className="text-lg font-semibold text-gray-700 mb-2">{item?.price || "RS 26,450.00"}</p>
          <p className="text-gray-600 mb-4">{item?.description || "Round neck midi dress with a sleeveless design. Featuring draped fabric detail, a back vent at the hem, and concealed zip fastening."}</p>

          {/* Size Options */}
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">Available Sizes:</p>
            <div className="grid grid-cols-3 gap-2">
              {["EU XS / US XS", "EU S / US S", "EU M / US M", "EU L / US L", "EU XL / US XL", "EU XXL / US XXL"].map((size) => (
                <button
                  key={size}
                  className={`border border-gray-400 p-2 transition-all ${selectedSize === size ? 'bg-black text-white' : 'text-black'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="mt-2 text-gray-500">SEE MEASUREMENTS</p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <p className="font-semibold text-gray-800 mb-2">Quantity</p>
            <div className="flex items-center space-x-4">
              <button
                className="bg-gray-300 px-3 py-1 rounded-lg"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded-lg"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Favorite Icon - Positioned before the Add to Cart button */}
          <div onClick={handleFavoriteClick} className="cursor-pointer mb-6">
            {isFavorite ? (
              <FaHeart className="text-red-500 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-500 text-2xl" />
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-black text-white py-3 px-6 text-lg mb-2"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

          {/* Buy Now Button */}
          <button
            className="bg-white text-black border border-black py-3 px-6 text-lg mb-4"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
