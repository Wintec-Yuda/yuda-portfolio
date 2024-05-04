import {  SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiReact, SiMysql, SiFirebase, SiShadcnui, SiLaravel, SiPhp, SiRedux } from "react-icons/si";
import { GiAtomCore } from "react-icons/gi";

const Skills = () => {
  const skills = [
    {
      name: "PHP",
      icon: <SiPhp size={30} className="text-indigo-400" />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript size={30} className="text-yellow-400" />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript size={30} className="text-blue-400" />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel size={30} className="text-red-400" />,
    },
    {
      name: "React",
      icon: <SiReact size={30} className="text-sky-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={30} className="text-white" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={30} className="text-sky-400" />,
    },
    {
      name: "Shadcn/ui",
      icon: <SiShadcnui size={30} className="text-white" />,
    },
    {
      name: "Redux",
      icon: <SiRedux size={30} className="text-purple-400" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql size={30} className="text-blue-400" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={30} className="text-yellow-400" />,
    },
    {
      name: "AtomicDesign",
      icon: <GiAtomCore size={30} className="text-white" />,
    },
  ];

  return (
    <div className="grid grid-cols-auto grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-3 gap-4 p-1">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col gap-2 justify-center items-center border-2 border-white bg-black bg-opacity-20 rounded-md  hover:bg-slate-950 py-4">
          {skill.icon}
          <label className="text-xs sm:text-sm">{skill.name}</label>
        </div>
      ))}
    </div>
  );
};

export default Skills;
