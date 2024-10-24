import React from 'react';
import img1 from "../../assets/women1.png";
import img2 from "../../assets/img2.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    { id: 1, img: img1, title: "Women Ethnic", rating: 5.0, color: "White", aosDelay: "0" },
    { id: 2, img: img2, title: "Women Western", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 2, img: img2, title: "Women Western", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 2, img: img2, title: "Women Western", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 2, img: img2, title: "Women Western", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 2, img: img2, title: "Women Western", rating: 5.0, color: "Red", aosDelay: "200" },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12 bg-gray-100 py-8'>
      <div className='container mx-auto'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary uppercase tracking-wide'>Top Selling Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-gray-800'>Our Best Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-500 mt-4'>
            Crafted for style and comfort, the FitFusion Classic Denim Jacket is a timeless piece for every wardrobe. Made from high-quality, durable denim, this jacket offers a sleek fit and a vintage-inspired look that never goes out of style. The classic button-down front, chest pockets, and side pockets add both functionality and flair.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {/* card section */}
            {ProductsData.map((data, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={data.aosDelay} 
                className='bg-white shadow-lg rounded-lg p-6 space-y-4 transform transition-all hover:scale-105'>
                <img
                  src={data.img}
                  alt={data.title}
                  className='h-[220px] w-full object-cover rounded-t-lg'
                />
                <div className='p-4'>
                  <h3 className='font-semibold text-gray-800'>{data.title}</h3>
                  <p className='text-sm text-gray-600 mb-2'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span className='text-sm text-gray-700'>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
