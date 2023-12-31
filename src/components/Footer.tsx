"use client";
import {
  ContactIcon,
  FacebookIcon,
  GetLinkedIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  XIcon,
} from "../../public/icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#100B20] text-white py-24">
        <div className="maxWidthScreen">
          <section className=" padding_section text-left text-sm md:flex  md:text-md">
            <div className="md:w-2/3">
              <div>
                <GetLinkedIcon width={120} />
              </div>
              <div>
                <p className="w-[240px] leading-6  mt-6 lg:w-[400px]">
                  Getlinked Tech Hackathon is a technology innovation program
                  established by a group of organizations with the aim of
                  showcasing young and talented individuals in the field of
                  technology
                </p>
              </div>
              <p className="my-6 lg:mt-20">
                Terms of Use{" "}
                <span className="ml-2 px-3 border-l-2 border-[#D434FE]">
                  Privacy Policy
                </span>
              </p>
            </div>
            {/* useful link */}
            <div className="text-sm md:text-md leading-8 md:w-1/3">
              <h4 className="font-bold text-[#D434FE] md:text-[14px]">
                Useful Links
              </h4>
              <ul>
                <li>Overview</li>
                <li>Timeline</li>
                <li>FAQs</li>
                <li>Register</li>
              </ul>
              <div className="flex items-center gap-2 lg:gap-6">
                <p className="text-[#D434FE]">Follow us</p>
                <div className="flex items-center gap-4">
                  <InstagramIcon width={16} height={20} />
                  <XIcon width={16} height={20} />
                  <FacebookIcon width={16} height={20} />
                  <LinkedinIcon width={16} height={20} />
                </div>
              </div>
            </div>
            {/* contact us */}
            <div className="mt-12 md:w-1/3 md:mt-0">
              <h4 className="font-bold text-[#D434FE] md:text-[14px]">
                Contact Us
              </h4>
              <div className="flex items-center my-2 gap-2">
                <ContactIcon width={12} height={20} />
                <p>+234 679 81819</p>
              </div>
              <div className="flex justify-start my-2 gap-2">
                <LocationIcon width={12} height={20} />
                <p className="max-w-[100px]">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </section>
          <div>
            <p className="text-center mt-6 text-[12px] md:text-[14px]">
              All rights reserved. © getlinked Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
