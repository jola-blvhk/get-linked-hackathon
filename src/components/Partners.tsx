import Image from "next/image";
import React from "react";

export const Partners = () => {
  return (
    <section className="bg-[#150E28] text-white border-b-2 border-white border-opacity-25 py-8 md:py-20">
      <div className="padding_section m-auto">
        <div>
          <h1 className="text-white text-center  font-heading font-bold mb-3 md:mb-6 text-xl sm:text-2xl  md:text-3xl">
            Partners and Sponsors
          </h1>
          <p className="text-center  text-sm md:text-md leading-7 max-w-md m-auto">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="m-auto mt-6 md:mt-12 grid place-items-center  w-fit max-w-5xl">
          <Image
            src="/assets/partners.svg"
            alt="partners"
            width={350}
            height={350}
            className="w-[100%] m-auto  h-auto"
          />
        </div>
      </div>
    
    </section>
  );
};
