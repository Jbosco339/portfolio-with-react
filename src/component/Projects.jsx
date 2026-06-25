import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-28">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-400 hover:-translate-y-1 transition"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {project.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;