import React from "react";
import { GiSkills } from "react-icons/gi";
import GoBack from "./GoBack";

type Props = {};

const Skills = (props: Props) => {
  const mySkills = [
    "Autodidacta",
    "Respetuoso",
    "Proactivo",
    "Organizado",
    "Comprometido",
    "Puntual",
    "SCRUM",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "React",
    "Redux",
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
    "Sequelize",
  ];
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="flex items-baseline">
          <GoBack />
          <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">Skills</h1>
        </div>

        {mySkills.map((mySkill) => {
          return (
            <div key={mySkill} className="mt-6 inline-block">
              <a
                href=""
                // target="_blank"
                className="flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl hover:bg-yellow-500"
              >
                {mySkill} <GiSkills size={24} className="ml-2" />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
