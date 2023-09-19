// import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { Input } from "./ui/input";

export const Header = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white bg-primary-purple_100">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <h1 className="font-bold text-2xl md:text-3xl">
            get<span className=" text-primary-pink_100">linked</span>
          </h1>
        </Link>

     

        {/* <Menu className="block md:hidden" /> */}

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="/" target="_blank">
              Timeline
            </Link>
          </li>
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="/" target="_blank">
              Overview
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
