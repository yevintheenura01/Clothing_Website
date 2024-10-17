import React from 'react'
import Image1 from "../../assets/image2.png";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off all Women's wear",
        descripton: "ssssssss",
    },

    {
        id: 1,
        img: Image1,
        title: "Upto 50% off all Women's wear",
        descripton: "ssssssss",
    },

    {
        id: 1,
        img: Image1,
        title: "Upto 50% off all Women's wear",
        descripton: "ssssssss",
    }
]

const Hero = () => {
  return (
    <div>
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-items-center duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'> Lorem ipsum color sit.</h1>
                        <p className='text-sm'>
                        Crafted for style and comfort, the FitFusion Classic Denim Jacket is a timeless piece for every wardrobe. Made from high-quality, durable denim, this jacket offers a sleek fit and a vintage-inspired look that never goes out of style. The classic button-down front, chest pockets, and side pockets add both functionality and flair.
                        </p>

                        <div>
                            <button className="bg-gradient-to-r from-primary to -secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                Click now
                            </button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='order-1 sm:order-2'>
                        <div className='relative z-10'>
                        <img src={Image1}
                        alt=""
                        className='w-[640px] h-[326px] sm:h-[350px] sm:scale-125object-contain mx-auto'/>
                        </div>
                    </div>

                    <div>
                            <button className="bg-gradient-to-r from-primary to -secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                Click now
                            </button>
                        </div>

                        <div>
                            <button className="bg-gradient-to-r from-primary to -secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                Click now
                            </button>
                        </div>
                </div>
            </div>
        </div>
        <div>

        </div>
        </div>
    </div>
  )
}

export default Hero
