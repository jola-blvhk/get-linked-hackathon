import React from "react";
import { Button, TwoGrid } from ".";

export const LPSecondSection = () => {
  const sectionOne = () => {
    return (
      <div>
        <h2 className="text-white text-center md:text-left font-heading font-bold mb-3 md:mb-6 text-xl sm:text-2xl  md:text-3xl">
          Introduction to getlinked <br />
          <span className=" text-primary-pink_100 ">tech Hackathon 1.0</span>
        </h2>
        <p className="text-center md:text-left text-sm md:text-md leading-7">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    );
  };
  const sectionTwo = () => {
    return (
      <div>
        <h2 className="text-white text-center md:text-left font-heading font-bold mb-3 md:mb-6 text-xl sm:text-2xl  md:text-3xl">
          Rules and <br />
          <span className=" text-primary-pink_100 ">Guidelines</span>
        </h2>
        <p className="text-center md:text-left text-sm md:text-md leading-7">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    );
  };
  const sectionThree = () => {
    return (
      <div className="text-center md:text-left">
        <h2 className="text-white text-center md:text-left font-heading font-bold mb-3 md:mb-6 text-xl sm:text-2xl  md:text-3xl">
          Judging Criteria <br />
          <span className=" text-primary-pink_100 ">Key Attributes</span>
        </h2>

        <h5 className="leading-7 font-bold mb-4 text-sm md:text-md">
          <span className="text-primary-pink_200 font-bold">
            Innovation and Creativity :
          </span>
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </h5>
        <h5 className="leading-7 font-bold  mb-4 text-sm md:text-md">
          <span className=" text-primary-pink_200 font-bold">
            Functionality :
          </span>
          Assess how well the solution works. Does it perform its intended
          functions effectively and without major issues? Judges would consider
          the completeness and robustness of the solution.
        </h5>
        <h5 className="leading-7 font-bold mb-4 text-sm md:text-md">
          <span className=" text-primary-pink_200 font-bold">
            Impact and Relevance :
          </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </h5>
        <h5 className="leading-7 font-bold mb-4 text-sm md:text-md">
          <span className="  text-primary-pink_200 font-bold">
            Technical Complexity :
          </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </h5>
        <h5 className="leading-7 font-bold mb-6 text-sm md:text-md">
          <span className="text-primary-pink_200 font-bold">
            Adherence to Hackathon Rules :
          </span>
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </h5>

        <Button className="py-3">Read More</Button>
      </div>
    );
  };
  return (
    <section className="  text-white ">
      <TwoGrid
        imageLeft={true}
        src="/assets/The_big_idea.png"
        width={500}
        height={500}
        className="w-[80%] h-auto object-contain"
      >
        {sectionOne()}
      </TwoGrid>

      <TwoGrid
        imageLeft={false}
        src="/assets/3d-graphic-a-woman-sitting.png"
        width={500}
        height={500}
        className="w-[90%] h-auto object-contain"
      >
        {sectionTwo()}
      </TwoGrid>

      <TwoGrid
        imageLeft={true}
        src="/assets/3d-graphic-two-person-discussing.png"
        width={500}
        height={500}
        className="w-[100%] h-auto object-contain"
      >
        {sectionThree()}
      </TwoGrid>
    </section>
  );
};
