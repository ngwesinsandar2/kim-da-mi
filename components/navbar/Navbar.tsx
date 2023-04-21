'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

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
      <header className="border-b">
        <div className="flex justify-between items-center">
          <div className="logo relative">
            <h2 className="font-bold font-2xl before:z-[-1] before:h-4 before:block before:absolute before:w-full before:bottom-1 before:-skew-y-3 before:bg-[var(--primary-tint-50)]">
              <Link href="/" className="">Kim Da-mi</Link>
            </h2>
          </div>

          <nav>
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