import React from "react";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { FaMapLocation } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import GoBack from "./GoBack";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex items-baseline">
        <GoBack />
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">Contact</h1>
      </div>
      <div className="flex items-baseline">
        <BsFillPersonLinesFill size={24} className="ml-2" />
        {/* <p className="pt-6 text-neutral-900"> */}
        <p className="pt-6">
          Ing. Aldo Benjamín Patiño Fernández
        </p>
      </div>
      <div className="flex items-baseline">
        <BsWhatsapp size={24} className="ml-2" />
        <p className="pt-6">
          <a href="https://wa.me/+573012462912">+57 301 246 2912</a>
        </p>
      </div>
      <div className="flex items-baseline">
        <BiLogoGmail size={24} className="ml-2" />
        <p className="pt-6">aldopati@gmail.com</p>
      </div>
      <div className="flex items-baseline">
        <FaMapLocation size={24} className="ml-2" />
        <p className="pt-6">Santa Marta - Magdalena - Colombia</p>
      </div>
    </div>
  );
};

export default Contact;
