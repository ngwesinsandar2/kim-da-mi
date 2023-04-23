'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const links = [
    {
      id: 1,
      title: "home",
      link_url: "/",
    },
    {
      id: 2,
      title: "about",
      link_url: "/about",
    },
    {
      id: 3,
      title: "films",
      link_url: "/movies-series",
    },
  ]

  return (
    <>
      <header className="border-b py-2">
        <div className="flex justify-between items-center">
          <div className="logo relative">
            <h2 className="font-bold font-2xl before:z-[-1] before:h-4 before:block before:absolute before:w-full before:bottom-1 before:-skew-y-3 before:bg-[var(--primary-tint-50)]">
              <Link href="/" className="">Kim Da-mi</Link>
            </h2>
          </div>

          <button onClick={() => setShowMenu(!showMenu)} className="block md:hidden humbergur-menu flex flex-col gap-1">
            <div className={`${showMenu ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'} w-8 h-1 rounded-xl bg-[var(--primary-color)] transition-all duration-300`}></div>
            <div className={`${showMenu ? 'opacity-0 translate-x-full' : 'translate-x-0 opacity-1'} w-6 h-1 rounded-xl bg-[var(--primary-color)] transition-all duration-300`}></div>
            <div className={`${showMenu ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'} w-8 h-1 rounded-xl bg-[var(--primary-color)] transition-all duration-300`}></div>
          </button>

          <nav className={`${showMenu ? 'translate-x-0' : 'translate-x-full'} p-4 md:p-0 md:translate-x-0 absolute md:static top-[11%] right-0 border md:border-none shadow-md md:shadow-none bg-white rounded-full transition-all duration-300`}>
            <ul className="flex gap-6">
              {
                links.map(link => {
                  return (
                    <li className="relative" key={link.id}>
                      <Link href={link.link_url} className={`${link.link_url === pathname && 'before:h-4 before:block before:absolute before:w-full before:bottom-1 before:-skew-y-3 before:bg-[var(--secondary-tint-70)]'} uppercase font-2xl before:z-[-1]`}>{link.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;