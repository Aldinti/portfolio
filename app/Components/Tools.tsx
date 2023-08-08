import React from "react";
import GoBack from "./GoBack";
import Image from "next/image";

type Props = {};

const myTools = [
  {
    title: "CSS",
    descrip:
      "Lenguaje de diseño gráfico para definir y crear la presentación de un documento HTML.",
    image: "/css-icon.png",
    link: "",
  },
  {
    title: "HTML",
    descrip: "Lenguaje de marcado para la elaboración de páginas web.",
    image: "/html-icon.png",
    link: "",
  },
  {
    title: "JavaScript",
    descrip:
      "Lenguaje de programación interpretado, dialecto del estándar ECMAScript.",
    image: "/javascript-icon.png",
    link: "",
  },
  {
    title: "VS Code",
    descrip: "Editor de código fuente desarrollado por Microsoft.",
    image: "/vscode-icon.png",
    link: "",
  },
  {
    title: "NodeJS",
    descrip:
      "Entorno en tiempo de ejecución multiplataforma para la capa del servidor (en el lado del servidor) basado en JavaScript.",
    image: "/nodejs-icon.png",
    link: "",
  },
  {
    title: "ReactJS",
    descrip:
      "Framework Javascript, open source, diseñado para crear interfaces de usuario y facilitar el desarrollo de aplicaciones en una sola página.",
    image: "/reactjs-icon.png",
    link: "",
  },
  {
    title: "Redux",
    descrip:
      "Patrón de arquitectura de datos que permite manejar el estado de la aplicación de una manera predecible.",
    image: "/redux-icon.png",
    link: "",
  },
  {
    title: "NextJS",
    descrip:
      "Marco de React que permite una serie de características adicionales, incluida la representación del lado del servidor y la generación de sitios estáticos y dinámicos.",
    image: "/nextjs-icon.png",
    link: "",
  },
  {
    title: "PostgresSQL",
    descrip:
      "Sistema de gestión de bases de datos <DBMS> relacional orientado a objetos y open source.",
    image: "/postgres-icon.png",
    link: "",
  },
  {
    title: "Vercel",
    descrip:
      "Plataforma unificada en la nube que permite a los desarrolladores desplegar, gestionar y escalar sus aplicaciones y sitios web.",
    image: "/vercel-icon.png",
    link: "",
  },
];

const Tools = (props: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex items-baseline">
        <GoBack />
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">Tools</h1>
      </div>
      <p className="pt-6 text-neutral-300">
        Productos, aplicaciones y servicios que uso.
      </p>
      <div className="mt-20 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        {myTools.map((myTool) => {
          return (
            <a
              key={myTool.title}
              href={myTool.link}
              className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
            >
              <div className="py-8 bg-neutral-800 w-full text-center rounded-t-2xl">
                <Image
                  className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
                  height={800}
                  width={800}
                  src={myTool.image}
                  alt=""
                />
              </div>
              <div className="p-8 py-10">
                <h1 className="mb-1 font-bold">{myTool.title}</h1>
                <p className="text-neutral-400">{myTool.descrip}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
