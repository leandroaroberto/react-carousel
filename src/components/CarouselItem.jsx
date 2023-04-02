import React from 'react'

const CarouselItem = ({title, description, icon}) => {
  return (
    <>
        <div>
          <img className="w-64 px-2" src={icon} data-testid="carousel-icon"/>
        </div>
        <div>
          <div className="text-5xl py-4"  data-testid="carousel-title">
              {title}
          </div>
          <div className="text-base p-5 m-4" data-testid="carousel-description">
            {description}
          </div>
        </div>
    </>
  )
}

export default CarouselItem