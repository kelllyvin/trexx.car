import React from 'react'
import {cars} from '../Data'
import { useState } from 'react'
import Singlecar from './Singlecar'

const categories =['all', ...new Set(cars.map((car)=> car.category))]


const Featured = () => {
  const [selected, setselected]= useState("all")
 
  const FeaturedCars =selected === 'all'?cars : cars.filter((car)=> car.category ===selected)
  
  return (
    <div className="layout">
      <div className="max-w-[517px]">
        <h1 className="text-[38px] font-bold text-[#1d1d1d]">
          Featured Vechicles
        </h1>
        <p className="text-[#5c5c5c] font-medium text-lg my-4">
          Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <div className="flex items-center gap-[20px] md:gap-[30px] ">
        {
          categories.map((category)=>{
            return (
              <button
              onClick={()=>setselected(category)}
                key={category}
                className={
                  category === selected
                    ? "bg-black text-white px-5 py-3 rounded-lg capitalize cursor-pointer"
                    : "px-5 py-3 rounded-lg capitalize cursor-pointer border border-black"
                }
              >
                
                {category}
              </button>
            );
          })
        }
      </div>
      <div className='mt-7 flex items-center justify-between flex-wrap'>
         {
          FeaturedCars.map((car, index) =>{
            return <Singlecar key={index} {...car} />
        

          })
         }
      </div>
    </div>
  );
}

export default Featured