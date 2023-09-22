"use client";

export const TimeLine = () => {
  return (
    <>
      <section className="hidden md:block bg-[#150E28] border-b-2 border-white border-opacity-25  py-10">
        <div className="">
          <div>
            <h1 className=" font-heading text-xl sm:text-2xl  md:text-3xl font-bold  mx-auto my-4 text-center">
              Timeline
            </h1>
            <p className="text-center text-sm md:text-md  lg:mb-20 ">
              Here is the breakdown of the time we <br />
              anticipate using for the upcoming event.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline__component timeline__component--bg text-right">
              <h2 className="timeline__title ">Hackathon Announcement</h2>
              <p className="timeline__paragraph max-w-[400px] ml-auto text-sm md:text-md  leading-normal mr-0 pt-2">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="timeline__middle  my-2">
              <div className="timeline__point text-center text-white flex items-center justify-center">
                1
              </div>
            </div>
            <div className="timeline__component">
              <div className="timeline__date timeline__date--right">
                November 18, 2023
              </div>
            </div>
            <div className="timeline__component text-right">
              <div className="timeline__date timeline__date--right">
                February 25, 2019
              </div>
            </div>
            <div className="timeline__middle my-2">
              <div className="timeline__point text-center text-white flex items-center justify-center">
                2
              </div>
            </div>
            <div className="timeline__component timeline__component--bg">
              <h2 className="timeline__title">Teams Registration begins</h2>
              <p className="timeline__paragraph max-w-[400px] text-sm md:text-md  leading-normal mr-0 pt-2">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="timeline__component timeline__component--bg text-right">
              <h2 className="timeline__title">Teams Registration ends</h2>
              <p className="timeline__paragraph max-w-[400px] ml-auto text-sm md:text-md  leading-normal mr-0 pt-2">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="timeline__middle my-2">
              <div className="timeline__point text-center text-white flex items-center justify-center">
                3
              </div>
            </div>
            <div className="timeline__component">
              <div className="timeline__date timeline__date--right">
                November 18, 2023
              </div>
            </div>
            <div className="timeline__component text-right">
              <div className="timeline__date timeline__date--right">
                November 18, 2023
              </div>
            </div>
            <div className="timeline__middle my-2">
              <div className="timeline__point text-center text-white flex items-center justify-center">
                4
              </div>
            </div>
            <div className="timeline__component timeline__component--bg">
              <h2 className="timeline__title">
                Announcement of the accepted teams and ideas
              </h2>
              <p className="timeline__paragraph max-w-[400px]  text-sm md:text-md  leading-normal mr-0 pt-2">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>

            <div className="timeline__component timeline__component--bg text-right">
              <h2 className="timeline__title">Teams Registration ends</h2>
              <p className="timeline__paragraph max-w-[400px] ml-auto text-sm md:text-md  leading-normal mr-0 pt-2">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="timeline__middle timeline__middle">
              <div className="timeline__point text-center text-white flex items-center justify-center">
                5
              </div>
            </div>
            <div className="timeline__component ">
              <div className="timeline__date timeline__date--right">
                November 18, 2023
              </div>
            </div>
            <div className="timeline__component timeline__component--bottom pt-24 text-right">
              <div className="timeline__date timeline__date--right">
                November 18, 2023
              </div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__point timeline__point--bottom text-center text-white flex items-center justify-center">
                6
              </div>
            </div>
            <div className="timeline__component timeline__component--bottom timeline__component--bg pt-20">
              <h2 className="timeline__title">Demo Day</h2>
              <p className="timeline__paragraph max-w-[400px]  text-sm md:text-md  leading-normal mr-0 pt-2">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
