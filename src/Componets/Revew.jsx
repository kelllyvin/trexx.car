import React from 'react'
import { testimonials } from '../Data'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import {Autoplay} from "swiper/modules"

const Revew = () => {
  return (
    <div className="py-[40px] custom-layout">
      <div className="text-center">
        <h1 className="font-bold text-xl md:text-[56px] text-[#171717]">
          Reviews from over 100k users
        </h1>
        <p className="font-medium text-[#595959] text-[18px]">
          Discover a platform to Stay connected with loved ones, share <br />
          your life’s moments.
        </p>
      </div>
      <div className="mt-10 ">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {testimonials.map(({ id, image, name, comment, handle }) => (
            <SwiperSlide key={id} className="py-3">
              <div className="bg-white p-5 shadow-md rounded-[16px] max-w-[391px] border-[#e9ecec]">
                <div className="flex gap-[10px] items-center mb-3">
                  <img
                    src={image}
                    alt={name}
                    className="w-[48px] h-[48px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-[18px] text-[#0c1118] mt-3">
                      {name}
                    </h3>
                    <p className=" font-normal text-[16px] text-[#667074]">
                      @{handle}{" "}
                    </p>
                  </div>
                </div>

                <p className="text-[#454d59] text-[16px] mt-2">{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
          
    </div>
  );
}

export default Revew