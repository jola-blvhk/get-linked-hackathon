"use client";
import Image from "next/image";
import { Award } from "./award";

export const Rewards = () => {
  return (
    <>
      <section className="bg-[#150E28] border-b-2 border-white border-opacity-25 py-10">
        <div className="maxWidthScreen">
          <div className="padding_section">
            <div className=" m-auto md:m-0 text-center md:text-left w-fit md:float-right pb-9">
              <h2 className="font-heading text-xl sm:text-2xl  md:text-3xl font-bold  mx-auto ">
                Prizes and <br />{" "}
                <span className=" text-primary-pink_100">Rewards</span>
              </h2>

              <p className=" leading-7 mx-auto mb-4  text-sm md:text-md max-w-sm ">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>

            <div className=" grid  sm:flex-between w-full  gap-10 sm:gap-7">
              <div className=" grid place-items-center sm:place-items-start sm:w-[40%]">
                <Image
                  src="/assets/cup-with-a-dart.svg"
                  width={100}
                  height={100}
                  alt="cup with a dart"
                  className="w-full h-auto  object-contain"
                />
              </div>
              <div className="w-72 h-52 m-auto relative block md:hidden ">
                <div className="w-24 h-40 left-0 top-[41.18px] absolute">
                  <div className="w-24 h-32 left-[-0px] top-[35.66px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
                  <Image
                    className="w-20 h-20 left-[6.79px] top-[-0px] absolute"
                    src="/assets/silver_medal_second_position.png"
                    alt="silver award"
                    width={100}
                    height={100}
                  />
                  <div className="w-6 h-6 left-[33px] top-[76.82px] absolute text-white text-xs font-bold leading-relaxed">
                    2nd
                  </div>
                  <div className="w-12 h-5 left-[22px] top-[93.82px] absolute text-white text-xs font-semibold font-['Montserrat'] leading-relaxed">
                    Runner
                  </div>
                  <div className="w-20 h-7 left-[9px] top-[109.82px] absolute text-fuchsia-500 text-sm font-bold font-['Montserrat'] leading-loose">
                    N300,000
                  </div>
                </div>
                <div className="w-24 h-40 left-[204px] top-[45.85px] absolute">
                  <div className="w-24 h-32 left-0 top-[30.99px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
                  <Image
                    className="w-20 h-20 left-[7.01px] top-0 absolute"
                    src="/assets/bronze_medal_3rd-position.png"
                    alt="gold medal"
                    width={100}
                    height={100}
                  />
                  <div className="w-5 h-8 left-[34px] top-[74.15px] absolute text-white text-xs font-bold font-['Montserrat'] leading-relaxed">
                    3rd
                  </div>
                  <div className="w-12 h-5 left-[21px] top-[89.15px] absolute text-white text-xs font-semibold font-['Montserrat'] leading-relaxed">
                    Runner
                  </div>
                  <div className="w-14 h-7 left-[16px] top-[108.15px] absolute text-fuchsia-500 text-xs font-bold font-['Montserrat'] leading-relaxed">
                    N150,000
                  </div>
                </div>
                <div className="w-32 h-52 left-[84.91px] top-0 absolute">
                  <div className="w-24 h-36 left-[18.09px] top-[62.41px] absolute bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600" />
                  <Image
                    className="w-32 h-32 left-0 top-0 absolute"
                    src="/assets/gold_medal_1st_position.png"
                    alt="bronze medal"
                    width={100}
                    height={100}
                  />
                  <div className="w-4 h-6 left-[55.09px] top-[131px] absolute text-white text-xs font-bold font-['Montserrat'] leading-relaxed">
                    1st
                  </div>
                  <div className="w-11 h-5 left-[40.09px] top-[144px] absolute text-white text-xs font-semibold font-['Montserrat'] leading-relaxed">
                    Runner
                  </div>
                  <div className="w-20 h-7 left-[26.09px] top-[165px] absolute text-purple-600 text-sm font-bold font-['Montserrat'] leading-loose">
                    N400,000
                  </div>
                </div>
              </div>
              <div className="hidden md:grid place-items-end">
                <Image
                  src="/assets/Rewards.svg"
                  width={100}
                  height={100}
                  alt="cup with a dart"
                  className="w-[90%] h-auto  object-contain"
                />
              </div>

              {/* <div className="w-96 h-96 relative lg:block">
                <div className="w-52 h-96 left-0 top-[97px] absolute">
                  <div className="w-52 h-72 left-0 top-[84px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
                  <Image
                    className="w-44 h-44 left-[16px] top-0 absolute"
                    src="/assets/silver_medal_second_position.png"
                    alt="silver award"
                    width={100}
                    height={100}
                  />
                  <div className="left-[70px] top-[195px] absolute text-white text-4xl font-bold font-['Montserrat'] leading-10">
                    2nd
                  </div>
                  <div className="left-[60px] top-[243px] absolute text-white text-2xl font-semibold font-['Montserrat'] leading-10">
                    Runner
                  </div>
                  <div className="left-[25px] top-[278px] absolute text-fuchsia-500 text-3xl font-bold font-['Montserrat'] leading-10">
                    N300,000
                  </div>
                </div>
                <div className="w-52 h-96 left-[480px] top-[108px] absolute">
                  <div className="w-52 h-72 left-0 top-[73px] absolute bg-fuchsia-500 bg-opacity-10 rounded-lg border border-fuchsia-500" />
                  <Image
                    className="w-44 h-44 left-[17px] top-0 absolute"
                    src="/assets/bronze_medal_3rd-position.png"
                    alt="gold medal"
                    width={100}
                    height={100}
                  />
                  <div className="left-[75px] top-[184px] absolute text-white text-4xl font-bold font-['Montserrat'] leading-10">
                    3rd
                  </div>
                  <div className="left-[60px] top-[232px] absolute text-white text-2xl font-semibold font-['Montserrat'] leading-10">
                    Runner
                  </div>
                  <div className="left-[30px] top-[267px] absolute text-fuchsia-500 text-3xl font-bold font-['Montserrat'] leading-10">
                    N150,000
                  </div>
                </div>
                <div className="w-72 h-96 left-[200px] top-0 absolute">
                  <div className="w-52 h-80 left-[42px] top-[147px] absolute bg-purple-600 bg-opacity-10 rounded-lg border border-purple-600" />
                  <Image
                    className="w-72 h-72 left-0 top-0 absolute"
                    src="/assets/gold_medal_1st_position.png"
                    alt="bronze medal"
                    width={100}
                    height={100}
                  />
                  <div className="left-[121px] top-[296px] absolute text-white text-4xl font-bold font-['Montserrat'] leading-10">
                    1st
                  </div>
                  <div className="left-[102px] top-[352px] absolute text-white text-2xl font-semibold font-['Montserrat'] leading-10">
                    Runner
                  </div>
                  <div className="left-[66px] top-[404px] absolute text-purple-600 text-3xl font-bold font-['Montserrat'] leading-10">
                    N400,000
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
