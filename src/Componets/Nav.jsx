import React from 'react'
import logo from '../assets/logo.png'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const links =[
  {title: "Home", to: "#"},
  {title: "Gallery", to: "#Gallery"},
  {title: "Services", to: "#"},
  {title: "How it works", to: "#"}

]
const Nav = () => {
  const [isMenuOpen, setisMenuOpen]=useState(false)

  return (
    <nav className="bg-[#090909AB] relative">
      <div className="layout flex items-center justify-between h-[105px]">
        <div>
          <img src={logo} alt="trex logo" />
        </div>
        <div className="hidden lg:flex gap-[40px] text-[20px] font-bold text-[#fcfcfc]">
          {links.map((links, index) => {
            return (
              <a key={index} href={links.to}>
                {links.title}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <button className="bg-[#fdfdfd] w-[138px] h-[42px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
            Contact Us
          </button>
        </div>
        <div className="block lg:hidden">
          <button
            className="text-white"
            onClick={() => setisMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose size={30} /> : <IoMenuSharp size={30} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className=" lg:hidden bg-black absolute top-[105px] w-1/2 left-0 p-2.5">
            <div className=" flex flex-col gap-[40px] text-[20px] font-bold text-[#fcfcfc]">
              {links.map((links, index) => {
                return (
                  <a key={index} href={links.to}>
                    {links.title}
                  </a>
                );
              })}
            </div>
            <button className="bg-[#fdfdfd] mt-[40px] w-[138px] h-[42px] rounded-[44px] text-[#1d1d1d] font-bold text-[16px]">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav