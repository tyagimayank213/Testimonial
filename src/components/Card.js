import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Card = ({review}) => {
  return (
    <div className="flex flex-col relative justify-center items-center">
        <div className='absolute z-10 left-4 -top-[4rem]'>
            <img 
            className='aspect-square rounded-full w-[100px] h-[100px] z-30'
            src={review.image} />
            <div className="w-[100px] h-[100px] bg-violet-500 rounded-full absolute top-[-6px] left-[8px] -z-[20]"></div>
        </div>
        <div clasName="mt-7 ">
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='mt-7'>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>
        <div className='text-gray-400 mx-auto mt-5'>
            <FaQuoteLeft />
        </div>
        <div className='text-slate-500 mt-4 '>
            {review.text}
        </div>
        <div className='text-gray-400 mx-auto mt-5'>
            <FaQuoteRight />
        </div>

    </div>
  )
}

export default Card