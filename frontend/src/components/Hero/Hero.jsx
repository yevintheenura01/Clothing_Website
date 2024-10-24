import React from 'react'
import Image1 from "../../assets/shopping.png";
import Image2 from "../../assets/sale2.png";
import Image3 from "../../assets/image3.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off all Women's wear",
        descripton: "Crafted for style and comfort, the FitFusion Classic Denim Jacket is a timeless piece for every wardrobe. Made from high-quality, durable denim, this jacket offers a sleek fit and a vintage-inspired look that never goes out of style. The classic button-down front, chest pockets, and side pockets add both functionality and flair."
    },

    {
        id: 1,
        img: Image2,
        title: "Upto 50% off all Women's wear",
        descripton: "ssssssss",
    },

    {
        id: 1,
        img: Image3,
        title: "Upto 50% off all Women's wear",
        descripton: "ssssssss",
    }
]

const Hero = () => {

    var settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 800,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpped: 4000,
            cssEase: "ease-in-out",
            pauseOnHover: false,
            pauseOnFocus: true,
        };
    

  return (
    <div>
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[550px] bg-gray-100 flex justify-items-center duration-200'>
        {/* background pattern */}
        
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {ImageList.map((data) =>(
                    <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* text content section */}
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true"
                            className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                            <p 
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            className='text-sm'>
                                {data.descripton}
                            </p>

                            <div>
                                <button 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-delay="300"
                                    className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-full hover:scale-105 duration-200">
                                    Order Now
                                </button>
                            </div>

                        </div>
                        {/* image section */}
                        <div className='order-1 sm:order-2'>
                            <div 
                            data-aos="zoom-in"
                            data-aos-once="true"
                            className='relative z-10'>
                            <img src={data.img}
                            alt=""
                            className='w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain mx-auto'/>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
            </Slider>
        </div>
        <div>

        </div>
        </div>
    </div> 
  )
}

export default Hero
