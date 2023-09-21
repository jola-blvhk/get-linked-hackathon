import Image from 'next/image';
import React, { ReactNode } from 'react';
import { JsxElement } from 'typescript';

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
    <>
      {!imageLeft ? (
        <div
          className={`flex flex-col  space-y-10 items-center md:flex-row md:justify-between md:space-y-0 md:space-x-12`}
        >
          <div className='w-full h-full'>{children}</div>
          <div className='w-full h-full'>
            <Image src={src} height={height} width={width} alt='Image' />
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col-reverse items-center md:flex-row md:justify-between md:space-x-12 `}
        >
          <div className='w-full h-full '>
            <Image src={src} height={height} width={width} alt='Image' />
          </div>
          <div className='w-full h-full mb-8 md:mb-0'>{children}</div>
        </div>
      )}
    </>
  );
};
