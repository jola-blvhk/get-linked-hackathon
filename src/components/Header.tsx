"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from ".";
import MobileNav from "./MobileNav";

import { useEffect, useState } from "react";
// import { Input } from "./ui/input";

const Header = () => {
  const [isPageScrolled, setIsPageScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 30) {
        setIsPageScrolled(true);
      } else {
        setIsPageScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-white border-opacity-25 py-7  text-white  ${
        isPageScrolled ? "bg-[#150E28]" : "bg-transparent border-b-2"
      }`}
    >
      <div className="maxWidthScreen">
        <div className="flex-between  w-full padding_section">
          <Link href="/">
            <h1 className="font-bold text-2xl md:text-3xl font-heading">
              get<span className=" text-primary-pink_100">linked</span>
            </h1>
          </Link>

          <div className="flex-center max-md:hidden md:space-x-20">
            <ul className="flex-center gap-x-3 md:gap-x-3">
              <li className="font-bold hover:text-gradient_blue-purple">
                <Link href="/" target="_blank">
                  Timeline
                </Link>
              </li>
              <li className="hover:text-gradient_blue-purple !font-bold">
                <Link href="/" target="_blank">
                  Overview
                </Link>
              </li>
              <li className="hover:text-gradient_blue-purple !font-bold">
                <Link href="/" target="_blank">
                  Faqs
                </Link>
              </li>
              <li className="hover:text-gradient_blue-purple !font-bold">
                <Link href="/contact" target="_blank">
                  Contact
                </Link>
              </li>
            </ul>
            <Button>Register</Button>
          </div>
          {/* <Menu className="block md:hidden" /> */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
