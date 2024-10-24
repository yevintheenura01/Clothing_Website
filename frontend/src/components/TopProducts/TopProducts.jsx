import React from 'react'
import img1 from "../../assets/shirt4.png"
import img2 from "../../assets/shirt3.png"
import img3 from "../../assets/shirt5.png"
import img4 from "../../assets/shirt6.png"
import img5 from "../../assets/shirt7.png"
import img6 from "../../assets/shirt8.png"
import { FaStar} from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        description: "new cloth"
    },

    {
        id: 2,
        img: img2,
        title: "Women western",
        description: "new cloth"
    },

    {
        id: 3,
        img: img3,
        title: "Women western",
        description: "new cloth"
    },

    {
        id: 4,
        img: img4,
        title: "Women western",
        description: "new cloth"
    },

    {
        id: 5,
        img: img5,
        title: "Women western",
        description: "new cloth"
    },

    {
        id: 6,
        img: img6,
        title: "Women western",
        description: "new cloth"
    }
]

const TopProducts = () => {
  return (
    <div>
        <div className='container'>
        {/* Header section*/}
        <div className='text-left mb-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Rated Products</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Crafted for style and comfort, the FitFusion Classic Denim Jacket is a timeless piece for every wardrobe. Made from high-quality, durable denim, this jacket offers a sleek fit and a vintage-inspired look that never goes out of style. The classic button-down front, chest pockets, and side pockets add both functionality and flair.
                </p>
            </div>
        {/* Body section*/}
        <div
        className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-20 md:gap-5 place-items-center'
        >
            {ProductsData.map((data)=>(
                <div
                data-aos="zoom-in"
                className=' bg-white 
               dark:bg-gray-200 hover:bg-black/80
                dark-hover:bg-primary hover:text-white
                relative shadow-xl duration-300 group max-w-[300px]'
                >
                    {/* {image section} */}
                    <div>
                        <img src={data.img} 
                        alt=""
                        className='max-w-[300px] block mx-auto
                        group-hover:scale-105 duration-300
                        drop-shadow-md'
                        />
                    </div>
                    {/* details section */}
                    <div className="p-4 text-center">
                    {/* star ratings  */}
                        <div className="w-full flex items-center justify-center
                        gap-1
                        ">
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                        </div>

                        <h1 className='text-xl font-bold'>{data.title}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                        <button className='bg-primary hover:scale-105
                        duration-300 text-white py-1 px-4
                        rounded-full mt-4 group-hover:bg-white
                        group-hover:text-primary'
                        >
                            Order Now
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default TopProducts

