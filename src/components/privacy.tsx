import Image from "next/image";
import React from "react";
import { Button } from ".";

export const Privacy = () => {
  return (
    <section className="bg-[#150E28] text-white border-b-2 border-white border-opacity-25 py-8 md:py-20">
      <div className="padding_section m-auto">
        <div className="md:flex md:max-w-[1200px]  md:gap-24 md:mx-auto md:items-center xl:pl-12">
          <section className="text-center md:w-1/2">
            <div>
              <p className="text-[20px] font-bold mx-auto md:mx-0 text-center md:text-left text-white  font-heading  mb-3 md:mb-6 text-xl sm:text-2xl  md:text-3xl">
                Privacy Policy and
                <br />
                <span className="text-[#D434FE]">Terms</span>
              </p>
              <p className="  mx-auto mb-4 md:mx-0 md:text-left  md:my-6 text-center  text-sm md:text-md leading-7 max-w-md m-auto">
                Last updated on September 12, 2023
              </p>
              <p className="text-[12px] w-[240px] mx-auto mb-4 md:mx-0 md:text-left   text-center  text-sm md:text-md leading-7 max-w-md m-auto">
                Below are our privacy & policy, which outline a lot of goodies.
                it&apos;s our aim to always take of our participant
              </p>
            </div>
            <div className="border-2 border-[#D434FE] text-[12px] leading-6 py-8 px-4 rounded-lg md:text-[14px]">
              <p className="md:text-left ">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className="my-6">
                <p className="font-semibold text-[#D434FE] md:mx-0 md:text-left">
                  Licensing Policy
                </p>
                <p className="md:mx-0 md:text-left">
                  Here are terms of our Standard License:
                </p>
              </div>
              <div className="flex space-x-4 mt-4 ">
                <Image
                  src="./assets/markIcon.svg"
                  width={40}
                  height={32}
                  alt="markIcon"
                  className="md:w-[20px] md:h-[15px] md:mt-1"
                />
                <p className="text-left ">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <Image
                  src="./assets/markIcon.svg"
                  width={40}
                  height={32}
                  alt="markIcon"
                  className="md:w-[20px] md:h-[15px] md:mt-1"
                />
                <p className="text-left ">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="w-fit mt-6">
                <Button>Read More</Button>
              </div>
            </div>
          </section>
          {/* Privacy and policy image */}
          <section className="lg:w-2/3">
            <div className="relative w-[200px] h-[300px] mx-auto my-12 md:hidden">
              <Image
                src="/assets/man-with-key.png"
                alt="winner cup picx"
                fill
              />
            </div>
            <div className="mx-auto hidden md:block">
              <Image
                src="/assets/man-with-key.png"
                alt="privacy and policy picx"
                width={490}
                height={565}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
