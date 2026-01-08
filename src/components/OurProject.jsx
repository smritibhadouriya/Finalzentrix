import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const OurProject = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "https://via.placeholder.com/600x400?text=Image+1", alt: "Image 1" },
    { src: "https://via.placeholder.com/600x400?text=Image+2", alt: "Image 2" },
    { src: "https://via.placeholder.com/600x400?text=Image+3", alt: "Image 3" },
  ];

  const Prev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const Next = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" rounded-div min-h-screen py-10 px-4 sm:px-6 md:px-8 lg:px-30 lg:py-25">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Paragraph and Arrows */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center lg:text-left lg:mt-20">
            Highlighting our standout campaigns and exclusive achievements!
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <BsFillArrowLeftCircleFill
              onClick={Prev}
              className="text-pink-500 h-10 w-10 cursor-pointer"
            />
            <BsFillArrowRightCircleFill
              onClick={Next}
              className="text-pink-500 h-10 w-10 cursor-pointer"
            />
          </div>
        </div>
        {/* Right Side: Image Carousel */}
        <div className="lg:w-2/3">
          <div className="flex gap-4 overflow-hidden rounded-xl">
            {/* First Image */}
            <div className="w-full h-96 md:h-180 md:w-full lg:w-full lg:h-140 bg-white rounded-2xl overflow-hidden">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Second Image (visible on medium screens and up) */}
            <div className="hidden md:block w-full h-96 md:h-180 md:w-2/3 lg:w-full lg:h-140 bg-white rounded-2xl overflow-hidden">
              <img
                src={images[(currentImage + 1) % images.length].src}
                alt={images[(currentImage + 1) % images.length].alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Third Image (Preview at 10% opacity, only on large screens) */}
            <div className="hidden md:block w-full h-96 md:h-180 md:w-1/2 lg:w-full lg:h-140 bg-white rounded-2xl overflow-hidden opacity-10">
              <img
                src={images[(currentImage + 2) % images.length].src}
                alt={images[(currentImage + 2) % images.length].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;