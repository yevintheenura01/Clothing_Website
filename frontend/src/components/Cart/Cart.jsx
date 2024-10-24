import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Get the item passed from ProductDetails
  const [cartItems, setCartItems] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null); // State to track clicked remove button

  useEffect(() => {
    // If there's an item passed from ProductDetails, add it to the cartItems state
    if (item) {
      setCartItems((prevItems) => {
        // Check if the item already exists in the cart
        const existingItem = prevItems.find(cartItem => cartItem.title === item.title);
        
        // If it doesn't exist, add it; otherwise, return the previous items
        if (!existingItem) {
          return [...prevItems, { ...item, quantity: 1 }]; // Ensure quantity starts at 1
        }
        return prevItems; // No need to add duplicate
      });
    } else {
      // Fetch existing cart items from the backend if no item is passed
      fetchCartItems();
    }
  }, [item]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cart');
      setCartItems(response.data); // Update cartItems state with fetched data
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  // Function to handle quantity increase
  const increaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].quantity += 1; // Increase the quantity
      return newItems;
    });
  };

  // Function to handle quantity decrease
  const decreaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      if (newItems[index].quantity > 1) {
        newItems[index].quantity -= 1; // Decrease the quantity
      }
      return newItems;
    });
  };

  // Function to remove item from the cart permanently
  const removeItem = async (index) => {
    const itemToRemove = cartItems[index];

    // Ensure we have a valid item with a unique ID
    if (!itemToRemove || !itemToRemove._id) { // Change id to _id
      console.error('Item to remove is invalid:', itemToRemove);
      return; // Exit if there is no valid item
    }

    try {
      // Send a DELETE request to your backend using _id
      await axios.delete(`http://localhost:5000/cart/${itemToRemove._id}`);
      
      // Update the state to remove the item from the cart
      setCartItems((prevItems) => {
        return prevItems.filter((_, i) => i !== index); // Remove item at index
      });
      setClickedIndex(null); // Reset clicked index after removal
    } catch (error) {
      console.error('Error removing item from cart:', error);
      alert('Failed to remove item from cart. Please try again.'); // Notify the user
    }

    // Mark the clicked index for styling change
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 300); // Reset after a short delay
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice(); // Calculate total price

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Item</th>
                  <th className="py-2 px-4 border-b">Price (RS)</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Total (RS)</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="py-4 px-4 border-b">
                      <img
                        src={`http://localhost:5000/uploads/${item.selectedImage}`}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="mt-2">{item.title}</div>
                    </td>
                    <td className="py-4 px-4 border-b">{item.price} RS</td>
                    <td className="py-4 px-4 border-b">
                      <div className="flex items-center justify-center">
                        <button
                          className="bg-gray-300 px-2 py-1 rounded-lg"
                          onClick={() => decreaseQuantity(index)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="bg-gray-300 px-2 py-1 rounded-lg"
                          onClick={() => increaseQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 border-b">{item.price * item.quantity} RS</td>
                    <td className="py-4 px-4 border-b">
                      <button
                        className={`bg-white text-black border border-black px-4 py-2 rounded-full transition-all duration-300 
                          ${clickedIndex === index ? 'bg-black text-white' : 'hover:bg-primary hover:text-white'}`}
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <h2 className="text-2xl font-bold">Total Price: {totalPrice} RS</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
