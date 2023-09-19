import { Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className='bg-[#150E28]'>
        <div className=' bg-section_one bg-no-repeat bg-cover'>
          <div className='pt-32 relative'>
            <Image
              src='/assets/heroImage.png'
              className='h-[650px] w-full -z-[1] object-cover'
              width={1440}
              height={600}
              alt='Image'
            />
          </div>
        </div>
      </section>
    </>
  );
}
