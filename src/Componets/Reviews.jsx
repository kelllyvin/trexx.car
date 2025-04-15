import React from 'react'
import Marquee from 'react-fast-marquee';
import man2 from '../assets/man2.png'


const Reviews = () => {
 
    
  
 
  return (
    <div className="layout">
      <h1 className="text-center  md:text-[22px] font-bold lg:text-[40px] text-[#171717] mt-10">
        Reviews from over 100k users
      </h1>
      <p className="text-[#595959] text-[16px] text-center">
        Discover a platform to Stay connected with loved <br />
        ones, share your life’s moments.
      </p>
      <marquee behavior="slide" direction="left" loop={0}>
        <div className="flex gap-[20px]">
          <div className="h-[200px] rounded-[14px] border border-white shadow-lg w-[380px] content-center px-5 ">
            <div className="flex gap-3  ">
              <img src={man2} alt="#" />
              <p className="font-semibold">
                James madison{" "}
                <span className="text-18px text-gray-400">
                  <br />
                  @jamesmad
                </span>
              </p>
            </div>
            <p className="text-[14px]">
              Fixiconn’s livestreaming and powerful enterprise <br />
              tools transformed our business—payments,
              <br /> messaging, and services are now hassle-free and <br />{" "}
              efficient!
            </p>
          </div>
          <div className="h-[200px] rounded-[14px] border border-white shadow-lg w-[380px] content-center px-5 ">
            <div className="flex gap-3  ">
              <img src={man2} alt="#" />
              <p className="font-semibold">
                James madison{" "}
                <span className="text-18px text-gray-400">
                  <br />
                  @jamesmad
                </span>
              </p>
            </div>
            <p className="text-[14px]">
              Fixiconn’s livestreaming and powerful enterprise <br />
              tools transformed our business—payments,
              <br /> messaging, and services are now hassle-free and <br />{" "}
              efficient!
            </p>
          </div>
          <div className="h-[200px] rounded-[14px] border border-white shadow-lg w-[380px] content-center px-5 ">
            <div className="flex gap-3  ">
              <img src={man2} alt="#" />
              <p className="font-semibold">
                James madison{" "}
                <span className="text-18px text-gray-400">
                  <br />
                  @jamesmad
                </span>
              </p>
            </div>
            <p className="text-[14px]">
              Fixiconn’s livestreaming and powerful enterprise <br />
              tools transformed our business—payments,
              <br /> messaging, and services are now hassle-free and <br />{" "}
              efficient!
            </p>
          </div>
          
        </div>
      </marquee>
    </div>
  );
}

export default Reviews