import React from 'react';
import img1 from "../../assets/shoe01.jpg";
import img2 from "../../assets/shoe02.jpg";
import img3 from "../../assets/shoe03.jpg";
import img4 from "../../assets/shoe04.jpg";
import img5 from "../../assets/shoe05.jpg";
import img6 from "../../assets/shoe06.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    { id: 1, img: img1, title: "Coutgo Women's Closed Pointed Toe Pumps Stiletto High Heels Wedding Party Dress Shoes", rating: 5.0, color: "White", aosDelay: "0" },
    { id: 2, img: img2, title: "Marc Fisher Women's Foreva Heeled Sandal", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 3, img: img3, title: "Marc Fisher LTD Women's Paxton Flat Sandal", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 4, img: img4, title: "Crocs Women's Classic Slide | Platform Sandals", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 5, img: img5, title: "Crocs Women's Brooklyn Low Wedges Platform Sandals, Chalk Woven, 9", rating: 5.0, color: "Red", aosDelay: "200" },
    { id: 6, img: img6, title: "JENN ARDOR Wedge Sneakers for Women Fashion Canvas Shoes Casual Platform Hidden Heel Womens Slip On Sneaker Non Slip Side Zipper", rating: 5.0, color: "Red", aosDelay: "200" },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12 bg-gray-50 py-12'>
      <div className='container mx-auto'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-lg mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary uppercase tracking-wide'>Top Selling Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-gray-800 mb-4'>Our Best Products</h1>
          <p data-aos="fade-up" className='text-sm text-gray-500'>
            Crafted for style and comfort, these products showcase high-quality materials and timeless designs that elevate your wardrobe with elegance and durability.
          </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {ProductsData.map((data, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={data.aosDelay} 
              className='bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl'
            >
              <img
                src={data.img}
                alt={data.title}
                className='h-[250px] w-full object-cover'
              />
              <div className='p-6'>
                <h3 className='text-lg font-semibold text-gray-800 truncate'>{data.title}</h3>
                <p className='text-sm text-gray-500'>{data.color}</p>
                <div className='flex items-center mt-2'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-yellow-400 ${i < data.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className='ml-2 text-sm text-gray-700 font-medium'>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
