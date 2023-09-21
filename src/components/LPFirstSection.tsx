import React from "react";
import { Button } from "@/components";
import Image from "next/image";
export const LPFirstSection = () => {
  return (
    <section className="bg-[#1E1E1E] text-white border-b-2 border-white border-opacity-25 ">
      <div className="bg-section_one_mobile sm:bg-section_one grid bg-no-repeat bg-cover">
        <div className="grid maxWidthScreen">
          <div className="w-fit m-auto md:float-right md:mr-20 lg:mr-24 2xl:mr-36 pt-32 maxWidthScreen">
            <p className="text-center text-sm md:text-lg lg:text-2xl  italic font-semibold">
              Igniting a Revolution in HR Innovation
            </p>
            <div className="flex-end">
              <Image
                src="/assets/pink-curve.png"
                width={100}
                height={100}
                alt="pink-curve"
                className="md:w-40 h-auto"
              />
            </div>
          </div>
          <div className="grid md:flex ">
            <section className=" padding_section grid space-y-6 w-fit m-auto pt-12 md:pt-0">
              <div className="">
                <div className="flex-center  relative w-fit m-auto md:m-0">
                  <h1 className="font-bold font-heading  text-center   md:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                    getlinked Tech
                  </h1>
                  <Image
                    src="/assets/lightbulb.png"
                    width={100}
                    height={100}
                    alt="lightbulb"
                    className="absolute -top-4 lg:-top-12 right-3 lg:right-5  w-[9%]  lg:w-[12%] object-contain h-[100%]"
                  />
                </div>
                <div className="flex justify-center items-center md:justify-start w-fit m-auto gap-2">
                  <h1 className="font-bold font-heading text-center md:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                    Hackathon
                    <span className=" text-primary-pink_100">1.0</span>
                  </h1>

                  <Image
                    src="/assets/pin-star.png "
                    width={100}
                    height={100}
                    alt="pink-curve"
                    className=" w-[18%] object-contain h-[100%]"
                  />
                </div>
              </div>

              <div className="m-auto md:m-0">
                <p className="text-center md:text-left max-w-md">
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
                </p>
              </div>

              <div className="m-auto md:m-0">
                <Button className="text-lg">Register</Button>
              </div>

              <div>
                <h1 className="font-unica text-center md:text-left text-5xl lg:text-6xl">
                  00<span className="text-sm">H</span> 00
                  <span className="text-sm">M</span> 00
                  <span className="text-sm">S</span>
                </h1>
              </div>
            </section>
            <section className="mt-14 relative w-[100%] ">
              <Image
                src="/assets/hero-image.png"
                className="w-[100%] h-auto  -z-[1] "
                width={1440}
                height={800}
                alt="a man"
              />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
