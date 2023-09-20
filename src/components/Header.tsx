// import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from ".";
import MobileNav from "./MobileNav";
// import { Input } from "./ui/input";

export const Header = () => {
  return (
    <nav className=" fixed top-0 z-50 w-full border-b-2 border-white border-opacity-25 py-7 bg-transparent text-white">
      <div className="flex-between  w-full  padding_section">
        <Link href="/">
          <h1 className="font-bold text-2xl md:text-3xl font-heading">
            get<span className=" text-primary-pink_100">linked</span>
          </h1>
        </Link>

        <div className="flex-center max-md:hidden md:space-x-20">
          <ul className="flex-center gap-x-3 md:gap-x-10">
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
            <li className="body-text hover:text-gradient_blue-purple !font-bold">
              <Link href="/" target="_blank">
                Faqs
              </Link>
            </li>
            <li className="body-text hover:text-gradient_blue-purple !font-bold">
              <Link href="/" target="_blank">
                Contact
              </Link>
            </li>
          </ul>

          <Button>Register</Button>
        </div>
        {/* <Menu className="block md:hidden" /> */}
        <MobileNav />
      </div>
    </nav>
  );
};
