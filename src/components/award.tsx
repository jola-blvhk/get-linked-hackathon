import Image from "next/image";
import React from "react";

export const Award = ( ) => {
  return (
    // <div className={` ${big ? "bg-[#903AFF]" : "bg-[#D434FE]"}opacity-10`}>
    //   <Image src={source} alt="award" />
    //   <h2 className="text-center">
    //     {position} <br />
    //     <span>Runner</span>
    //   </h2>
    //   <h3>N{price}</h3>
    // </div>
    <div className="w-52 h-96 relative">
      <div className="w-52 h-72 left-0 top-[73px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
      <img
        className="w-44 h-44 left-[17px] top-0 absolute"
        src="https://via.placeholder.com/179x180"
      />
      <div className="left-[75px] top-[184px] absolute text-white text-4xl font-bold font-['Montserrat'] leading-10">
        3rd
      </div>
      <div className="left-[60px] top-[232px] absolute text-white text-2xl font-semibold font-['Montserrat'] leading-10">
        Runner
      </div>
      <div className="left-[30px] top-[267px] absolute text-fuchsia-500 text-3xl font-bold font-['Montserrat'] leading-10">
        N150,000
      </div>
    </div>
  );
};
