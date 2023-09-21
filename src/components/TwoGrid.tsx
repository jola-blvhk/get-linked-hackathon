import Image from "next/image";
import React, { ReactNode } from "react";
import { JsxElement } from "typescript";

interface TwoGridProps {
  children: React.ReactNode;
  imageLeft?: boolean;
  src: string;
  height?: number;
  width?: number;
}

export const TwoGrid: React.FC<TwoGridProps> = ({
  children,
  imageLeft,
  src,
  height,
  width,
}) => {
  return (
    <div className="maxWidthScreen">
      <div className="padding_section bg-[#1E1E1E] text-white border-b-2 border-white border-opacity-25  ">
        <div className="bg-section_two_mobile sm:bg-section_two grid bg-no-repeat bg-cover ">
          {!imageLeft ? (
            <div
              className={`flex flex-col  space-y-10 items-center md:flex-row md:justify-between w-full md:space-y-0  border`}
            >
              <div className="w-full h-full">{children}</div>
              <div className="w-full h-full">
                <Image src={src} height={height} width={width} alt="Image" />
              </div>
            </div>
          ) : (
            <div
              className={`flex flex-col-reverse items-center md:flex-row md:justify-between md:space-x-12 `}
            >
              <div className="w-full h-full ">
                <Image src={src} height={height} width={width} alt="Image" />
              </div>
              <div className="w-full h-full mb-8 md:mb-0">{children}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
