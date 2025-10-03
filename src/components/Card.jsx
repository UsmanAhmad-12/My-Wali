import React from 'react'

function Card({image, title, description}) { 
  return (
    <div data-aos="fade-down" className='bg-[#f8f8f8] border rounded-3xl p-8 w-full sm:w-[350px] mt-3'>
        <img className="mx-auto w-28" src={image} alt="" />
        <h6 className="text-center text-lg font-medium dm-serif-display">{title}</h6>
        <p className="text-center text-[10px] montserrat font-medium px-1 mt-1 text[#403F3D]">{description}</p>
    </div>
  )
}

export default Card