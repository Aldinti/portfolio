"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
      <div className="sm:text-3xl text-xl font-bold inline-block">
        <a href="/" className="inline-block">
          Aldinti
        </a>
      </div>
      <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu size={24} />
      </div>
      <nav
        className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-600 ${
          showNav ? "top-16 hi" : "max-sm:hidden top-0"
        }`}
      >
        <ul className="flex flex-wrap items-center max-sm:text-sm justify-between max-sm:justify-around">
          <li
            className={`py-1 hover:bg-yellow-600 hover:text-black transition ease-in duration-300 delay-300 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"
            }`}
          >
            <a href="#home" className="px-2">
              Home
            </a>
          </li>
          <li
            className={`py-1 hover:bg-yellow-600 hover:text-black transition ease-in duration-300 delay-300 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-40"
            }`}
          >
            <a href="#skills" className="px-2">
              Skills
            </a>
          </li>
          <li
            className={`py-1 hover:bg-yellow-600 hover:text-black transition ease-in duration-300 delay-300 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-48"
            }`}
          >
            <a href="#projects" className="px-2">
              Projects
            </a>
          </li>
          <li
            className={`py-1 hover:bg-yellow-600 hover:text-black transition ease-in duration-300 delay-300 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-56"
            }`}
          >
            <a href="#contact" className="px-2">
              Contact
            </a>
          </li>
          <li
            className={`py-1 hover:bg-yellow-600 hover:text-black transition ease-in duration-300 delay-300 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-64"
            }`}
          >
            <a href="#tools" className="px-2">
              Tools
            </a>
          </li>
          <li
            className={`py-1 hover:bg-yellow-600 hover:text-black transition ease-in duration-300 delay-300 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-72"
            }`}
          >
            <a href="#about" className="whitespace-nowrap px-2">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
