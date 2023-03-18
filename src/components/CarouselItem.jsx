import React from 'react'

const CarouselItem = ({title, description, icon}) => {
  return (
    <>
        <div>
          <img className="w-64 px-2" src={icon} />
        </div>
        <div>
          <div className="text-5xl py-4">
            {title}
          </div>
          <div className="text-base p-5 m-4">
            {description}
          </div>
        </div>
    </>
  )
}

export default CarouselItem