import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>

          <p className="text-slate-400 mt-3 max-w-2xl">
            Here are some of the projects I've built, showcasing my skills in
            frontend development, backend development and full-stack application
            development.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-slate-800 hover:border-blue-500 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto md:h-95 object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Mobile faint button overlay */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 md:hidden flex items-center justify-center text-center px-4"
              >
                <span className="bg-gray-400/10 text-black text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
                  View Project →
                </span>
              </a>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-300 mt-3 max-w-xl">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg font-medium transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
