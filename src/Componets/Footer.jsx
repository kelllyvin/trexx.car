import React from "react";
import blacklogo from "../assets/blacklogo.png";

const Footer = () => {
  const links = [
    { title: "Home", to: "#" },
    { title: "Gallery", to: "#Gallery" },
    { title: "Services", to: "#" },
    { title: "How it works", to: "#" },
    { title: "Privacy", to: "#" },
    { title: "Terms & services", to: "#" },
  ];

  return (
    
      <div className="layout ">
        <div className=" h-[219px] flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-between lg:h-[105px]">
          <div>
            <img src={blacklogo} alt="trex logo" />
          </div>
          <div className="  flex flex-col lg:flex lg:flex-row  lg:gap-[40px] text-[20px] underline    ">
            {links.map((links, index) => {
              return (
                <a key={index} href={links.to}>
                  {links.title}
                </a>
              );
            })}
          </div>
        </div>
        <p className="mb-10">
          This website is owned and operated by csy Ltd., incorporated in the
          United Kingdom The information provided is not legally binding and
          does not constitute an offering, endorsement, recommendation or
          solicitation to enter into any type of financial transaction in this
          or in any other jurisdiction in which such solicitation or offer would
          be unlawful under the laws of such jurisdiction.
        </p>
      </div>
    
  );
};

export default Footer;
