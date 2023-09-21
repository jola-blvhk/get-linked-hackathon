import Image from "next/image";
import React, { ReactNode } from "react";
import { JsxElement } from "typescript";

interface TwoGridProps {
  children: React.ReactNode;
  imageLeft?: boolean;
  src: string;
  height?: number;
  width?: number;
  className?: string;
}

export const TwoGrid: React.FC<TwoGridProps> = ({
  children,
  imageLeft,
  src,
  height,
  width,
  className,
}) => {
  return (
    <div className="bg-[#150E28] text-white border-b-2 border-white border-opacity-25">
      <div className="maxWidthScreen">
        <div className="padding_section   ">
          <div className="bg-section_two_mobile sm:bg-section_two bg-no-repeat bg-cover  ">
            <div
              className={`grid md:grid-cols-2 place-items-center     w-full py-12 md:py-16 gap-10 md:gap-20`}
            >
              <div
                className={`w-full h-full  grid items-center ${
                  imageLeft ? "order-last" : "order-first"
                } `}
              >
                {children}
              </div>
              <div className="w-full h-full grid place-items-center">
                <Image
                  src={src}
                  height={height}
                  width={width}
                  alt="Image"
                  className={className}
                />
              </div>
            </div>
            {/* ) : (
            <div
              className={`flex flex-col-reverse items-center md:flex-row md:justify-between md:space-x-12 `}
            >
              <div className="w-full h-full ">
                <Image src={src} height={height} width={width} alt="Image" />
              </div>
              <div className="w-full h-full mb-8 md:mb-0">{children}</div>
            </div>
          )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
