"use client";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import GoBack from "./GoBack";

type Props = {};

const myProjects = [
  {
    id: 1,
    image: "/landing.png",
    title: "Landing Page",
    descrip: `Como parte del proceso de formación como Full Stack Developer, desarrollé la landing page de un apliación sobre los personajes de la serie {"Rick and Morty"} en la que se muestran dichos personajes en forma de cards, con la opción de ver en detalle las características de cada uno.`,
    resources: [],
    linkCode: "",
    linkDemo: "",
  },
];

const Projects = (props: Props) => {
  const [selectedId, setSelectedId] = useState<boolean>(false);
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex items-baseline">
        <GoBack />
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">
          Proyectos
        </h1>
      </div>
      <p className="pt-6">
        {/* <p className="pt-6 text-neutral-300"> */}A lo largo de 8 meses, he
        adquirido experiencia en el desarrollo de una variedad de sitios web,
        que van desde simples páginas de aplicación o SPA, hasta aplicaciones
        complejas. Aquí hay algunos proyectos que me gustaría presentarles,
        mostrando mi trabajo y logros en el campo del desarrollo web.
      </p>
      {/* <div className='w-10/12 box1 max-md:mt-[-50px] mt-0'></div> */}

      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90"
          width={800}
          height={600}
          src="/parcels.png"
          alt=""
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Parcels App</h1>
          <div /* className="text-neutral-300" */>
            Plataforma de e-commerce especializada en la venta de parcelas,
            brindando a nuestros usuarios la oportunidad de encontrar el terreno
            perfecto para sus proyectos o inversiones. Aplicamos la metodología
            de SCRUM, con dailys lideradas por Fabian García y revisiones
            semanales a cargo de nuestro Product Owner. Utilizamos un sólido
            stack tecnológico que incluye: NextJS, Redux Toolkit, TypeScript,
            MongoDB, Mongoose y Cloudinary.{" "}
            {/* <h1 className="mt-4">
              {" "}
              <ul>
                Staff de Desarrollo:
                <li>+ Johan Amaya</li>
                <li>+ Gonzalo Cuellar Aliaga</li>
                <li>+ Ismael Díaz</li>
                <li>+ Agustina Julieta Kravsiuk</li>
                <li>+ Luciano Alejandro Más</li>
                <li>
                  + <b>Aldo Patiño Fernández</b>
                </li>
                <li>+ Lucas Alejandro Ribotta</li>
                <li>+ Percy Valderrama</li>
              </ul>
            </h1> */}
          </div>
          <div className="mt-6 inline-block">
            <a
            rel="noopener"
            href="https://parcelas.vercel.app"
            target="_blank"
            className="flex items-center px-4 py-1 border-[0.5px]  border-slate-500 rounded-3xl hover:bg-yellow-500"
            >
              Demo <BsArrowUpRight size={14} className="ml-2" />
            </a>
            <a
              rel="noopener"
              href="https://github.com/LucasRibotta/Project-Parcels"
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px]  border-slate-500 rounded-3xl hover:bg-yellow-500"
            >
              Código <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90"
          width={800}
          height={600}
          src="/countries.png"
          alt=""
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Countries App</h1>
          <div /* className="text-neutral-300" */>
            Simple Page Aplication (SPA) a partir de la API{" "}
            <a href="https://restcountries.com/v3.1/all">
              <u>restcountries</u>
            </a>{" "}
            en la que se puede:
            <ul>
              <li>{`>`} Buscar países.</li>
              <li>{`>`} Visualizar la información de los países.</li>
              <li>{`>`} Aplicar filtros combinados</li>
              <li>{`>`} Ordenarlos.</li>
              <li>{`>`} Crear actividades turísticas.</li>
            </ul>
          </div>
          <div className="mt-6 inline-block">
            <a
              rel="noopener"
              href="https://deploy-aldinti.vercel.app"
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px]  border-slate-500 rounded-3xl hover:bg-yellow-500"
            >
              Demo <BsArrowUpRight size={14} className="ml-2" />
            </a>
            <a
              rel="noopener"
              href="https://github.com/Aldinti/PI"
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px]  border-slate-500 rounded-3xl hover:bg-yellow-500"
            >
              Código <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 md:w-9/12 mx-auto ">
        <Image
          className="rounded-xl opacity-90"
          width={800}
          height={600}
          src="/landing.png"
          alt=""
        />
        <div className="my-10 sm:w-10/12 mx-auto">
          <h1 className="text-2xl font-bold mb-4">Landing Page</h1>
          <div /* className="text-neutral-300" */>
            Parte del proceso de formación como Full Stack Developer,
            desarrollé la landing page de un apliación sobre los personajes de
            la serie {"Rick and Morty"} quienes se muestran en forma de cards, 
            con la opción de ver en detalle las características de cada uno.{" "}
            <h1 className="mt-4">
              <ul>
                Las tecnologías usadas en esta SPA fueron:
                <li>+ React</li>
                <li>+ Redux</li>
                <li>+ Axios</li>
              </ul>
            </h1>
          </div>
          <div className="mt-6 inline-block">
            <a
              href=""
              target="_blank"
              className="flex items-center px-4 py-1 border-[0.5px]  border-slate-500 rounded-3xl hover:bg-yellow-500"
            >
              Explore <BsArrowUpRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
