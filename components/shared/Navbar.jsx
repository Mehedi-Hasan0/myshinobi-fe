"use client";

import { navlinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition ease transform duration-300`;
  return (
    <>
      <nav className="container-padding lg:flex items-center justify-between gap-5 py-4 2xl:py-8 hidden relative z-40">
        <div className="flex items-center lg:gap-8 2xl:gap-14">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={100}
              height={104}
              className="w-20"
            />
          </Link>

          <div className="flex items-center flex-nowrap">
            {navlinks.map((link, i) => (
              <Link
                href={link.path}
                key={link.label}
                className={`text-white p-4 uppercase text-xs xl:text-base text-nowrap hover:text-primary transition duration-200 ease-in ${
                  link.active && "text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-stretch gap-2 lg:gap-4">
          <button className="px-6 py-1 border border-[#F9C306] rounded-md flex justify-center items-center hover:bg-[#F9C306] hover:border-transparent transition ease-in duration-200">
            <Image
              src="/assets/icons/opensea.svg"
              alt="icon"
              width={111}
              height={30}
              className="w-20"
            />
          </button>
          <button className="px-6 py-[2px] border border-[#F9C306] rounded-md bg-[#F9C306] hover:bg-transparent transition ease-in duration-200">
            <Image
              src="/assets/icons/kainu.svg"
              alt="icon"
              width={101}
              height={38}
              className="w-20 mb-1"
            />
          </button>
        </div>
      </nav>

      {/* for mobile */}
      <nav className="flex items-center justify-between lg:hidden container-padding py-2 relative z-40">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={100}
          height={104}
          className="w-14 sm:w-16"
        />

        <button
          className="flex flex-col h-10 w-10 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} bg-white ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} bg-white ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} bg-white ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>

        <div
          className={`w-48 p-5 absolute transition-all duration-200 ease-in-out right-0 bg-black min-h-screen top-16 ${
            isOpen ? "opacity-100 z-40" : "opacity-0 hidden"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navlinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  href={link.path}
                  className={`text-white p-4 uppercase text-xs xl:text-base text-nowrap ${
                    link.active && "text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* btn */}
          <div className="flex flex-col items-stretch gap-4 lg:gap-4 py-3">
            <button className="px-6 py-1 border border-[#F9C306] rounded-md flex justify-center items-center w-fit">
              <Image
                src="/assets/icons/opensea.svg"
                alt="icon"
                width={111}
                height={30}
                className="w-20"
              />
            </button>
            <button className="px-6 py-[2px] border border-[#F9C306] rounded-md bg-[#F9C306] w-fit">
              <Image
                src="/assets/icons/kainu.svg"
                alt="icon"
                width={101}
                height={38}
                className="w-20 mb-1"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
