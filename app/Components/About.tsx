import React from "react";
import { MdDeveloperMode, MdEngineering } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import GoBack from "./GoBack";

type Props = {};

const myAbouts = {
  about1: `Administrador IT y Auditor SGI ISO 27001. He gestionado redes,
  servidores, sistemas operativos y bases de datos. He realizado
  auditorías internas y externas para verificar el cumplimiento de la
  norma ISO 27001. Como jefe de mantenimiento he supervisado labores
  del personal de aseo y servicios generales, elaborando informes,
  presupuestos y cronogramas.`,
  about2: `He desarrollado proyectos individuales y participado en proyectos
  grupales utilizando SCRUM. Tengo conocimientos en: JavaScript,
  ReactJS, NodeJS, Express, SQL, Postgres y MongoDB. Actualmente estoy
  trabajando en los proyectos: Parcels, este fue mi proyecto final en
  Henry el cuale desarrollé con otros 7 compañeros; y Countries, es
  una API basada en`,
  about3: `Estoy aprendiendo y afianzando conocimientos en Typescript, Next.js,
  Redux.js y el idioma Inglés para certificarme en C1. Entusiasta del
  software y hardware libre, pentesting y ethical hacking, además del
  desarrollo de habilidades cognitivas sobre la Inteligencia y el Ser.
  Interés en Robótica, AI & IOT.`,
  about4: `He ejercido como docente de informática y matemáticas diseñando
  planes de estudio, evaluaciones y actividades didácticas para
  facilitar el aprendizaje. He mantenido una buena comunicación con
  los padres y los demás docentes.`,
};

const About = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex items-baseline">
        <GoBack />
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">About</h1>
      </div>

      <div className="mt-20 grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-2 sm:gap-10">
      {/* <div className="flex max-md:flex-wrap gap-7 justify-between"> */}
        <div className="d p-5 relativ overflow-hidden mt-5">
          <h1 className="text-center mt-5">Ingeniero de Sistemas</h1>
          <div className="flex justify-center mt-4">
            <MdEngineering className="text-pink-600" size={28} />
          </div>
          <p className="text-left mt-10 text-neutral-300">{myAbouts.about1}</p>
          <p className="text-center  mt-10 mb-7">
            <a
              href=""
              className="px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-green-500"
            >
              know more
            </a>
          </p>
          <span className="w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 "></span>
          <span className="w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-pink-600 absolute top-[27%] "></span>
          <span className="w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-pink-600 absolute bottom-0 "></span>
          <span className="w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 "></span>
        </div>

        <div className="d p-5 relativ overflow-hidden mt-5">
          <h1 className="text-center mt-5">Full Stack Developer</h1>
          <div className="flex justify-center mt-4">
            <MdDeveloperMode className="text-yellow-500" size={28} />
          </div>
          <p className="text-left mt-10 text-neutral-300">
            {myAbouts.about2}
            <a href="https://restcountries.com/v3.1/all"> restcountries.com</a>.
          </p>
          <p className="text-center  mt-10 mb-7">
            <a
              href=""
              className="px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-green-500"
            >
              know more
            </a>
          </p>
          <span className="w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 "></span>
          <span className="w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-yellow-600 absolute top-[27%] "></span>
          <span className="w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-yellow-600 absolute bottom-0 "></span>
          <span className="w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 "></span>
        </div>

        <div className="d p-5 relativ overflow-hidden  mt-5">
          <h1 className="text-center mt-5">Autodidacta</h1>
          <div className="flex justify-center mt-4">
            <FaBookOpenReader className="text-blue-600" size={28} />
          </div>
          <p className="text-left mt-10 text-neutral-300">{myAbouts.about3}</p>
          <p className="text-center  mt-10 mb-7">
            <a
              href=""
              className="px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-green-500"
            >
              know more
            </a>
          </p>
          <span className="w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 "></span>
          <span className="w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-blue-600 absolute top-[27%] "></span>
          <span className="w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0 "></span>
          <span className="w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 "></span>
        </div>

        <div className="d p-5 relativ overflow-hidden mt-5">
          <h1 className="text-center mt-5">Docente</h1>
          <div className="flex justify-center mt-4">
            <FaChalkboardTeacher className="text-green-700" size={28} />
          </div>
          <p className="text-left mt-10 text-neutral-300">{myAbouts.about4}</p>
          <p className="text-center  mt-10 mb-7">
            <a
              href=""
              className="px-4 py-2 rounded-sm border-[0.5px] border-[#363636] shadow-md text-gray-400 hover:text-green-500"
            >
              know more
            </a>
          </p>
          <span className="w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0 "></span>
          <span className="w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-green-700 absolute top-[27%] "></span>
          <span className="w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-green-600 absolute bottom-0 "></span>
          <span className="w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0 "></span>
        </div>
      </div>
    </div>
  );
};

export default About;
