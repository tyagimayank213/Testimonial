import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonials = (props) => {

    let review = props.reviews;
    const [index, setIndex] = useState(0);
    function leftShiftHandler(){
        if(index === 0){
            setIndex(review.length -1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler() {
        let temp = (index+1)%review.length;
        setIndex(temp);
    }

    function surpriseHandler() {
        let temp = Math.floor(Math.random() * (review.length));
        setIndex(temp);
    }

  return (
    <div className="bg-white flex flex-col justify-center items-center p-6 mt-4 pt-12 w-[700px]">
        <Card review = {review[index]}/>


        <div  className='flex text-2xl mt-5 gap-3 font-bold text-violet-400'>
            <button className='cursor-pointer hover:text-violet-500'
                onClick={() => leftShiftHandler()}>
                <FiChevronLeft />        
            </button>
            <button className='cursor-pointer hover:text-violet-500'
                onClick={() => rightShiftHandler()}>
                <FiChevronRight />
            </button>
        </div>

        <div>
            <button className='bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 font-bold text-lg rounded-md text-white mt-3 '
                onClick={surpriseHandler}>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials