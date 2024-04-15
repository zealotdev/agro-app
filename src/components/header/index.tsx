import { BiSolidMessage } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="shadow">
      <div className="py-8 md:py-8 text-center relative">
        <div className="absolute left-1/2 -translate-x-1/2  md:-left-8 md:translate-x-1/2 top-1/2 -translate-y-1/2 ">
          <h3 className="text-blue-500 font-serif font-extrabold text-lg md:text-2xl italic hover:cursor-pointer">
            OptiGrow.<i className="font-thin text-sm">inc</i>
          </h3>
        </div>

        {/* Large screen links */}
        <div className="hidden md:flex justify-center gap-[8rem] text-blue-600">
          <Link
            href={'/dashboard'}
            className="hover:cursor-pointer hover:text-blue-800"
          >
            <FaHome size={25} />
          </Link>
          <Link href={'/'} className="hover:cursor-pointer hover:text-blue-800">
            <IoNotifications size={25} />
          </Link>
          <Link href={'/'} className="hover:cursor-pointer hover:text-blue-800">
            <BiSolidMessage size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
