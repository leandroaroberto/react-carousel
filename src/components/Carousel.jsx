import React, { useState } from 'react'
import CarouselItem from './CarouselItem';
import {  AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

const Carousel = ({delay, children}) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const nextItem = () => {
    if (currentIndex + 1 >= children.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previousItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex -1)
    }
    else {
      setCurrentIndex(children.length - 1)
    }
  }

  const currentCarouselItem = children.filter((child, index) => index == currentIndex)

  //setInterval(nextItem, delay * 1000);

  return (
    <div className="m-3">
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-500  shadow-lg flex justify-evenly items-center align-middle py-2 text-center h-72 rounded"
        data-testid="carousel-container"
      >
          {
            currentCarouselItem.length && currentCarouselItem.map(car => <CarouselItem key={car.id} title={car.title} description={car.description} icon={car.icon}/>)
          }
      </div>
      <div className="absolute top-[100px] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <AiOutlineDoubleLeft size={30} onClick={previousItem} data-testid="carousel-previous-button"/>
      </div>
      <div className="absolute top-[100px] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <AiOutlineDoubleRight size={30} onClick={nextItem} data-testid="carousel-next-button"/>
      </div>
      <div className="flex justify-evenly py-4">
        {
          children.map((item, index) =>
            <RxDotFilled
              key={index}
              onClick={() => setCurrentIndex(index)}
              size={30}
              className="cursor-pointer"
              data-testid={`carousel-go-to-item-${index}-button`}
            />
            )
        }
      </div>
    </div>
  )
}

export default Carousel