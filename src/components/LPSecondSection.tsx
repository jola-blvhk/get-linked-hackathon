import React from "react";
import { TwoGrid } from ".";

export const LPSecondSection = () => {
  const info = (): JSX.Element => {
    return (
      <div>
        <h2 className="text-white">
          Introduction to getlinked <br />
          <span className=" text-primary-pink_100 ">tech Hackathon 1.0</span>
        </h2>
        <p className="text-center md:text-left">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    );
  };
  return (
    <section className="border-b-2 border-white border-opacity-25 bg-[#1E1E1E] text-white ">
      <TwoGrid imageLeft={true} Info={info} />
    </section>
  );
};
