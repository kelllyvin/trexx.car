import React from 'react'
import search from '../assets/search.png'
import line   from '../assets/line.png'
import park   from '../assets/park.png'
import happy  from '../assets/happy.png'

const Howitworks = () => {
  const text = [
    {
      h: "Search for vehicle",
      p: "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate",
    },
    {
      h: "Select  and make Agreement",
      p: "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate",
    },
    {
      h: "Enjoy reliable vehicle",
      p: "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate",
    },
  ];
  return (
    <div className="layout ">
      <div className="text-center mt-10">
        <div className=" md:block mx-auto">
          <h1 className="font-bold text-[38px] text-[#1d1d1d]">
            How rental works at Trex vehicles
          </h1>
          <p className="text-18px text-[#5c5c5c]  ">
            Lorem ipsum dolor sit amet, ssfsf consectetur <br />adipiscing 
            elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis.
          </p>
        </div>
      </div>
      <div className="layout flex gap-[100px] justify-center mt-10">
        
        <div>
          <img src={search} alt="" />
        </div>
        <div className='mt-3'>
          <img src={line} alt="" />
        </div>
        <div>
          <img src={park} alt="" />
        </div>
        <div className='mt-3'>
          <img src={line} alt="" />
        </div>
        <div>
          <img src={happy} alt="" />
        </div>
      </div>
      <div className="layout lg:flex gap-[100px] mt-10 text-center ">
        {text.map((t, index) => {
          return (
            <div key={index} className="">
              <h1 className="font-bold text-[20px] mb-3">{t.h}</h1>
              <p className='mb-5'> {t.p}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Howitworks