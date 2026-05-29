import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "FavsmanArtistry",
      description: "A premium interior design platform specializing in POP ceilings and expert craftsmanship.",
      image: "/images/project1.png",
      link: "https://favsmanartistry.com" // <-- ADD YOUR ACTUAL LINK HERE
    },
    {
      id: 2,
      title: "Cherie Beauty",
      description: "An elegant e-commerce landing page for a beauty brand with responsive galleries.",
      image: "/images/project2.png",
      link: "https://netlify.app" // <-- ADD YOUR ACTUAL LINK HERE
    },
    {
      id: 3,
      title: "Portfolio Pro",
      description: "A high-performance developer portfolio built with React and Tailwind CSS.",
      image: "/images/project3.png",
      link: "https://yourportfolio.com"
    },
    {
      id: 4,
      title: "Swift Mart",
      description: "A full-stack grocery delivery application with real-time tracking.",
      image: "/images/project4.png",
      link: "https://swiftmart-demo.com"
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section className="bg-[#0f172a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visibleProjects.map((project) => (
            <div key={project.id} className="group flex flex-col bg-[#1e293b]/30 p-4 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all">
              
              {/* Image & Hover Link Container */}
              <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video mb-6 shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* The "View Live" Overlay - This now uses the link from the object above */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 bg-[#00d1ff] hover:bg-white hover:text-[#00d1ff] text-white px-6 py-2 rounded-full font-bold transition-colors duration-300"
                  >
                    View Live <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-[#00d1ff] text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Toggle */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 bg-[#00d1ff] hover:bg-[#00b8e6] text-white px-8 py-3 rounded-md font-bold text-lg transition-all shadow-lg active:scale-95"
          >
            {showAll ? "View Less" : "View More"}
            <ChevronDown 
              size={24} 
              className={`transition-transform duration-300 ${showAll ? 'rotate-180' : 'rotate-0'}`} 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
