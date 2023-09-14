import React, { useEffect, useState } from "react";
import { reviews } from "../../Const/const";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide < 2) {
        nextSlide();
      } else {
        clearInterval(interval);
      }
    }, 6000);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentSlide]);

  return (
    <div className="relative h-[80vh] bg-gradient-to-r from-blue-900 to-gray-900">
      <div className="overflow-hidden h-full">
        <div
          className="transition-transform duration-700 ease-in-out transform h-full flex items-center"
          style={{
            width: `${reviews.length * 100}%`,
            transform: `translateX(-${(currentSlide / reviews.length) * 100}%)`,
          }}
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center pt-24 h-full gap-4"
              style={{ width: `${100 / reviews.length}%` }}
            >
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-20 h-20 rounded-xl shadow-lg drop-shadow-lg object-contain transition-transform duration-700 ease-in-out"
              />
              <p className="text-center w-6/12 text-white text-xl font-normal line-clamp-3 pt-4 leading-8">
                {item.text}
              </p>
              <h4 className="text-white text-base font-medium text-center leading-tight pt-4">
                {item.reviewer} <br />{" "}
                <span className="text-gray-500 font-bold text-xs ">
                  {item.places}
                </span>
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 gap-4">
        {reviews.map((item, index) => (
          <span key={index}>
            <img
              src={item.image}
              alt=""
              className={`${
                index === currentSlide ? "opacity-100" : "opacity-30"
              } w-8 h-8 rounded-xl shadow-sm hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
            {index < reviews.length - 1 && (
              <span className="bg-white w-[1px] h-4"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
