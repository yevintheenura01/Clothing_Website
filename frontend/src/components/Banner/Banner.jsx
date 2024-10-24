import React from 'react';
import BannerImg from "../../assets/banner2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 bg-gradient-to-r from-gray-100 via-white to-gray-200'>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 items-center'>
          {/* Image Section */}
          <div data-aos="zoom-in" className='flex justify-center'>
            <img 
              src={BannerImg} 
              alt="Banner" 
              className='max-w-[450px] h-[400px] w-full mx-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'
            />
          </div>
          {/* Text Section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>
              Winter Sale Up to 50% Off
            </h1>
            <p className='text-sm text-gray-500 leading-6 tracking-wide'>
              Crafted for style and comfort, the FitFusion Classic Denim Jacket is a timeless piece for every wardrobe. Made from high-quality, durable denim, this jacket offers a sleek fit and a vintage-inspired look that never goes out of style. The classic button-down front, chest pockets, and side pockets add both functionality and flair.
            </p>
            <div className='flex flex-col gap-6'>
              <FeatureItem icon={<GrSecure />} text="Quality Products" />
              <FeatureItem icon={<IoFastFood />} text="Fast Delivery" />
              <FeatureItem icon={<GiFoodTruck />} text="Secure Payment Method" />
              <FeatureItem icon={<IoFastFood />} text="Exciting Offers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text }) => (
  <div className='flex items-center gap-4'>
    <div className='text-4xl h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md transition duration-300 transform hover:scale-105'>
      {icon}
    </div>
    <p className='text-lg font-semibold text-gray-700'>{text}</p>
  </div>
);

export default Banner;
