const skills = [
  "React",
  "JavaScript",
  "TailwindCSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "REST APIs",
];

function Skills() {
  return (
    <section id="skills" className="py-28">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center hover:border-blue-400 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;