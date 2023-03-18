import React, { useState } from 'react'
import CarouselItem from './CarouselItem';

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
      >
          {
            currentCarouselItem.length && currentCarouselItem.map(car => <CarouselItem key={car.id} title={car.title} description={car.description} icon={car.icon}/>)
          }
      </div>
      <div className="flex justify-between py-4">
        <button
            className="button"
            onClick={previousItem}
          >
            Previous
        </button>
        {
          children.map((item, index) =>
            <button
              className="button w-8"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              {index +1}
            </button>)
        }
        <button
          className="button"
          onClick={nextItem}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel