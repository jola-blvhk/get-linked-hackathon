'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiX } from 'react-icons/hi';
import { Button } from '.';

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    {
      title: 'Timeline',
      href: '/',
    },
    {
      title: 'Overview',
      href: '/',
    },
    {
      title: 'FAQS',
      href: '/',
    },
    {
      title: 'Contact',
      href: '/',
    },
  ];

  const onToggleMenu = () => {
    setShowMenu((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };
  return (
    <>
      <div onClick={onToggleMenu} className='md:hidden'>
        <Image
          src='/assets/menu.svg'
          width={30}
          height={30}
          alt='Menu Icon'
          className='block w-auto h-auto'
        />
      </div>
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] bg-[#150E28] ${
          showMenu ? 'translate-x-0 rounded-none' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-end mt-6 padding_section'>
          <button
            aria-label='Toggle Menu'
            onClick={onToggleMenu}
            className={`md:hidden border border-primary-pink_100  rounded-full p-1 duration-500 ${
              !showMenu && '-rotate-[360deg]'
            }
            `}
          >
            <HiX className='text-xl' />
          </button>
        </div>

        <nav className='flex flex-col mt-4 padding_section'>
          {navLinks.map((link, id) => (
            <Link
              href={link.href}
              key={id}
              className='flex items-center gap-x-2 font-semibold text-lg pt-4 group'
              onClick={onToggleMenu}
            >
              {link.title}
            </Link>
          ))}
          <div className='mt-10'>
            <Button className='py-4 px-14 rounded-md'>Register</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
