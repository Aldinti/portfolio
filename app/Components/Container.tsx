import React from "react";
import Image from "next/image";
import { FcDocument } from "react-icons/fc";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

type Props = {};

const Container = (props: Props) => {
  const myRS = {
    linkedin: "https://www.linkedin.com/in/aldinti/",
    github: "https://github.com/Aldinti",
    twitter: "https://twitter.com/Aldinti",
    instagram: "https://www.instagram.com/aldinti/",
    email: "mailto:aldopati@gmail.com",
    cv: "https://1drv.ms/b/s!Au_lDWCMok1hij_cSqODAbzWTa1q?e=QbVrjK",
  };
  return (
    <div className="lg:pt-16 pt-4 relative w-10/12 mx-auto top-9">
      <div className="md:flex items-center justify-between flex-row-reverse">
        <div className="flex justify-end items-end max-md:pt-4">
          <div className="relative">
            <Image
              className="rounded-full w-100% h-auto transform -scale-x-100"
              width={500}
              height={500}
              src="/foto.png"
              alt=""
            />
            <div className="h-[100%] overflow-hidden w-[100%] z-[-1] top-[0%] left-[0%] rounded-full bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 absolute"></div>
          </div>
        </div>
        <div className="p-4 pl-0 mt-5 sm:mt-20">
          <p className="text-xl sm:text-2xl  md:text-xl lg:text-2xl xl:text-3xl">
            Hola
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2  lg:pt-6">
            Soy Aldo Patiño
            <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4">
              Ingeniero de Sistemas && Full Stack Developer
            </p>
          </h1>
          <p className="text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6">
            {`"developing the intelligence for the future"`}
          </p>
          {/* <div className='pt-10'>
              <p className='px-3 py-1 before:bg-white shadow-md bg-slate-400 inline-block'>Hire</p>
              <button className="pushable">
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front">
                      Hire Now!
                  </span>
              </button>
          </div> */}
          <div className="flex items-center mt-6 md:mt-14">
            <ul className="flex items-center space-x-2 sm:space-x-5 mr-6 my-4 ">
              <li>
                <a
                  href={myRS.linkedin}
                  target="_blank"
                  className="hover:opacity-100 opacity-50 transition ease-in duration-150"
                >
                  <AiOutlineLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href={myRS.github}
                  target="_blank"
                  className="hover:opacity-100 opacity-50 transition ease-in duration-150"
                >
                  <AiOutlineGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href={myRS.twitter}
                  target="_blank"
                  className="hover:opacity-100 opacity-50 transition ease-in duration-150"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href={myRS.instagram}
                  target="_blank"
                  className="hover:opacity-100 opacity-50 transition ease-in duration-150"
                >
                  <AiOutlineInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href={myRS.email}
                  target="_blank"
                  className="hover:opacity-100 opacity-50 transition ease-in duration-150"
                >
                  <AiOutlineMail size={24} />
                </a>
              </li>
            </ul>
              <a
                href={myRS.cv}
                target="_blank"
                className="hover:opacity-100 opacity-50 transition ease-in duration-150"
              >
                <FcDocument size={24} />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
