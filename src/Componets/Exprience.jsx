
import React, { useEffect } from "react";
import { IoMdAdd } from "react-icons/io";

const Exprience = () => {
  const text = [
    {
      p: "Comfort",
      title:
        "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      p: "Insurance",
      title:
        "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      p: "Commitment",
      title:
        "Lorem ipsum dolor sit amet, ssfsf consectetur adipiscing elit. Nunc vulpujtate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];
  const text1 = [
    {
      p: "trusted customers",
      h1: 2000,
    },
    {
      p: "Avaliable Cars",
      h1: 134,
    },
    {
      p: "Total reservation",
      h1: 134,
    },
  ];
  return (
    <div className="layout">
      <div className=" w-full max-w-[1241px] h-450px my-[40px]  ">
        <h1 className="text-[38px] font-bold text-[#1d1d1d] ">
          Experience luxury <br /> without compromises
        </h1>
        <div className="w-full h-full lg:flex gap-[38px] md:block mx-auto">
          {text.map((t, index) => {
            return (
              <div
                className=" rounded-[14px] border border-white shadow-lg mt-[40px] h-[298px]  py-2 px-5"
                key={index}
              >
                <h1 className="text-[28px] font-semibold text-black my-[10px] mt-[20px] ">
                  {t.p}
                </h1>
                <p className="text-[#5c5c5c]">{t.title}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-25 justify-between lg:flex layout ">
          <h1 className="text-[19px]">
            Trusted by customers since <span className="font-bold">1990</span>
          </h1>
          <div className=" mt-10 flex-col lg:flex-row gap-[40px]  text-lg mb-10  ">
            
            {text1.map((t, index) => {
              return (
                <div key={index}>
                 
                  <p>{t.p}</p>
                  <h1 className="font-bold text-[26px] flex ">{t.h1}<IoMdAdd className="mt-2 ml- " /></h1>
                
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;

