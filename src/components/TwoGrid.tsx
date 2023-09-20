import React, { ReactNode } from "react";
import { JsxElement } from "typescript";

interface TwoGridProps {
  Info: JsxElement;
  Pic: ReactNode;
  imageLeft?: boolean;
}

export const TwoGrid: React.FC<TwoGridProps> = ({ Info, Pic, imageLeft }) => {
  return (
    <>
      {!imageLeft ? (
        <div
          className={`flex flex-col  space-y-10 items-center md:flex-row md:justify-between md:space-y-0 md:space-x-12`}
        >
          <div className="w-full h-full">{Info}</div>
          <div className="w-full h-full">{Pic}</div>
        </div>
      ) : (
        <div
          className={`flex flex-col-reverse items-center md:flex-row md:justify-between md:space-x-12 `}
        >
          <div className="w-full h-full ">{Pic}</div>
          <div className="w-full h-full mb-8 md:mb-0">{Info}</div>
        </div>
      )}
    </>
  );
};
