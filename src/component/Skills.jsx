import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 text-xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-xl" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-xl" />,
  },
  {
    name: "REST APIs",
    icon: <SiPostman className="text-orange-400 text-xl" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Skills
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl">
            Technologies and tools I use to build fast, scalable and
            responsive web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {skill.icon}

                <span className="font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;