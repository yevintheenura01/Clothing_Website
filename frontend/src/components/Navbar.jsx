import React from 'react';
import Logo from '../assets/Logo.jpg'; // Import the logo icon image
import CartIcon from '../assets/cart.png'; // Import the cart icon image
import HeartIcon from '../assets/wardrobe.png'; // Import the heart icon image
import ProfileImage from '../assets/user.png'; // Import the user icon image

export default function Navbar() {
  return (
    <div className='shadow-md bg-[#131313] text-white duration-200 relative z-40'>
      {/* Main Navbar */}
      <div className='bg-[#131313] py-3'>
        <div className='container mx-auto flex justify-between items-center px-4'>
          
          {/* Logo */}
          <div className='flex items-center justify-start'>
            <a href="#" className='flex items-center'>
              {/* Adjust the logo size */}
              <img src={Logo} alt="FitFusion Logo" className='w-[120px] h-[120px] max-h-full' />
            </a>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex space-x-20 font-semibold text-[18px]' style={{ fontFamily: "'Roboto', serif" }}>
            <a href="#" className='hover:text-gray-400'>Trend</a>
            <a href="#" className='hover:text-gray-400'>Sustainability</a>
            <a href="#" className='hover:text-gray-400'>Virtual try on</a>
          </div>

          {/* Search Bar, Cart & Profile Icons */}
          <div className='flex items-center space-x-6'>
            {/* Search */}
            <div className='group relative'>
              <input
                type="text"
                placeholder='Search'
                className='w-[300px] sm:w-[300px] group-hover:w-[350px] transition-all duration-300 rounded-full border border-gray-500 bg-white text-black px-2 py-1 focus:outline-none'
              />
            </div>

            {/* Icons */}
            <div className='flex items-center space-x-10'>
              {/* Shopping Cart Icon */}
              <a href="#" className='hover:text-gray-400' aria-label="Shopping Cart">
                <img src={CartIcon} alt="Shopping Cart" className='w-[35px] h-[35px]' />
              </a>
              {/* Favorites Icon */}
              <a href="#" className='hover:text-gray-400' aria-label="Favorites">
                <img src={HeartIcon} alt="Favorites" className='w-[35px] h-[35px]' />
              </a>

              <a href="#" className='hover:text-gray-400' aria-label="User Profile">
                <img src={ProfileImage} alt="Profile" className='w-[40px] h-[40px] rounded-full' />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

