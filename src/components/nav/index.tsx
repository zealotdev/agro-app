'use client';

import { BiSolidMessage } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import Header from '../header';
import { IoNotifications } from 'react-icons/io5';
import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <div>
        {/* Header */}
        <Header />
        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </>
  );
}

// Mobile navigation
export const NavMobile = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex justify-evenly py-6 shadow-lg raised-lg text-blue-600">
        <Link href={'/dashboard'} className="hover:cursor-pointer">
          <FaHome size={25} />
        </Link>
        <Link href={'/'} className="hover:cursor-pointer">
          <IoNotifications size={25} />
        </Link>
        <Link href={'/'} className="hover:cursor-pointer">
          <BiSolidMessage size={25} />
        </Link>
      </div>
    </div>
  );
};
